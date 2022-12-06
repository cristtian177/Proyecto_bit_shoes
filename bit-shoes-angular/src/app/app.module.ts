import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel-item/carousel.component';
import { HomeComponent } from './routes/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { SignupComponent } from './routes/signup/signup.component';
=======
>>>>>>> cris
import { AdminComponent } from './routes/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    OutletComponent,
    FooterComponent,
<<<<<<< HEAD
    SignupComponent,
=======
>>>>>>> cris
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
