import { Service } from 'src/app/service.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  services: Service[] = [
    {
      id: 1,
      name: 'Formations',
      description:
        "Des ateliers collectifs autour des usages de l'ordinateur et des nouvelles technologies. Mais également un accompagnement socio-professionnel gratuit dont l’objectif est de permettre l’acquisition des compétences numériques aujourd’hui indispensables aux démarches de la vie quotidienne ainsi qu’à l’exercice d’une activité professionnelle.",
      image: '../../assets/images/proxi/formation1.svg',
      owner: {
        id: 1,
        firstname: 'Jean',
        lastname: 'Dupond',
        email: 'JeanDupond@gmail.com',
        phone: '0485624851',
      },
    },
    {
      id: 2,
      name: 'Service Juridique',
      description:
        'Que vous soyez entrepreneur ou particulier, ce service assure suivi juridique pour les personnes qui ont besoins de réponses à des questions liées à diverses branches du droit. Notre avocat prend en charge n’importe quel type de question juridique et veille à communiquer à tout demandeur l’explication adaptée. Ces prestations incluent la consultation ainsi que l’aide juridique. Grâce à une écoute active qui lui permet de mieux appréhender toute question en matière de droit, notre avocat traite les dossiers des demandeurs avec beaucoup de professionnalisme et d’empathie. Notre avocat est disponible tous les mardis après-midi pour vos questions.',
      image: '../../assets/images/proxi/juridique.svg',
      owner: {
        id: 1,
        firstname: 'Nicolas',
        lastname: 'Lempereur',
        email: 'nico95@yahoo.com',
        phone: '0493468532',
      },
    },
    {
      id: 3,
      name: 'Titre service',
      description:
        "Besoin d'aide pour votre ménage, votre repassage, vos courses ou le transport de personnes à mobilité réduite ? Grâce aux titres-services, bénéficiez de tarifs avantageux et d'un système pratique et efficace. Nous proposons des services comme le repassage dans notre Tiers-Lieux et bien plus encore !",
      image: '../../assets/images/proxi/formation1.svg',
      owner: {
        id: 1,
        firstname: 'Cécile',
        lastname: 'Du moulin',
        email: 'cecile.dumoulin@hotmail.fr',
        phone: '0485469530',
      },
    },
    {
      id: 4,
      name: 'Location de salle',
      description:
        'On vous propose de louer nos espaces au Tiers-Lieux le Parc. Que ce soit pour les réunions de votre entreprise, une conférence ou bien un mariage. Nous avons différentes salles adaptées à chaque besoin.',
      image: '../../assets/images/proxi/location.svg',
      owner: {
        id: 1,
        firstname: 'Aurélien',
        lastname: 'Fabri',
        email: 'aurelien_fabri@outloook.com',
        phone: '0493468520',
      },
    },
    {
      id: 5,
      name: 'Espace de coworking',
      description:
        "Le Parc propose un espace de travail partagé composé de postes de travail en open space, de bureaux fermés et de salles de réunion à louer. Une connexion Internet pour favoriser le travail à distance (télétravail) ainsi qu'un espace de détente et de cuisine.",
      image: '../../assets/images/proxi/coworking.svg',
      owner: {
        id: 1,
        firstname: 'Jean-Paul',
        lastname: 'Lefèvre',
        email: 'Jpl@gmail.com',
        phone: '0493658541',
      },
    },
    {
      id: 6,
      name: 'Réseau interne',
      description:
        "Cet outil vous permet de retrouver au sein des utilisateurs du Tiers-Lieux, des personnes selon leurs compétences. Il s'agit d'un réseau interne d'entre aide pour favoriser le partage.",
      image: '../../assets/images/proxi/network.svg',
      owner: {
        id: 1,
        firstname: 'Helena',
        lastname: 'Vogel',
        email: 'H.vogel@gmail.com',
        phone: '0493568452',
      },
    },
    {
      id: 7,
      name: 'Coopérative fermière',
      description:
        'La coopérative fermière de la Gaume s’engage depuis plusieurs années à promouvoir une agriculture locale de qualité en valorisant les circuits courts avec nos éleveurs et producteurs locaux. En développant une activité économique équitable pour le secteur agricole gaumais. En proposant des produits de qualité respectant les normes environnementales.',
      image: '../../assets/images/proxi/ferme.svg',
      owner: {
        id: 1,
        firstname: 'Jean',
        lastname: 'Dupond',
        email: 'JeanDupond@gmail.com',
        phone: '0485624851',
      },
    },
    {
      id: 8,
      name: 'Bibliothèque de Rossignol',
      description: 'Au premier étage du CCRT',
      image: '../../assets/images/proxi/biblio.svg',
      owner: {
        id: 1,
        firstname: 'Nicolas',
        lastname: 'Lempereur',
        email: 'nico95@yahoo.com',
        phone: '0493468532',
      },
    },
    {
      id: 9,
      name: 'Ludothèque de Tintigny',
      description:
        'Possibilité de louer des centaines de jeux et jouets à un prix modique. Conseiller enfants et adultes dans le choix des jeux. Favoriser le jeu et lui rendre son importance. Stimuler les échanges et les rencontres autour du jeu.',
      image: '../../assets/images/proxi/3709576.svg',
      owner: {
        id: 1,
        firstname: 'Cécile',
        lastname: 'Du moulin',
        email: 'cecile.dumoulin@hotmail.fr',
        phone: '0485469530',
      },
    },
  ];

  constructor() {}

  getAllServices(): Service[] {
    return this.services;
  }

  getService(id: number): Observable<Service> {
    return of(this.services.find((s) => s.id == id));
  }
}
