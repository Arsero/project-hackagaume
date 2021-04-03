import { AddServiceComponent } from './components/add-service/add-service.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'annonces', component: AnnonceComponent },
  { path: 'service/:id', component: ServiceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
