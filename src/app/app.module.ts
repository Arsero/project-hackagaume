import { ServiceService } from 'src/app/services/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ServiceDetailComponent,
    NavbarComponent,
    FooterComponent,
    AnnonceComponent,
    AdminComponent,
    AddServiceComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
