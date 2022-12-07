import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { SignupComponent } from './routes/signup/signup.component';
import { AdminComponent } from './routes/admin/admin.component';
import { Page404Component } from './routes/page404/page404.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http' //-- permite consumir apis con el cliente http de angular
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './routes/shopping-cart/shopping-cart.component';
import { BannerComponent } from "./components/banner/banner.component"; //-- permite capturar formularios en angular
import { FooterComponent } from './components/footer/footer.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { CarouselComponent } from './components/carousel-item/carousel.component';
import { CarouselWithControlsComponent } from './components/carousel-with-controls/carousel-with-controls.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        AdminComponent,
        Page404Component,
        CardComponent,
        ShoppingCartComponent,
        BannerComponent,
        FooterComponent,
        OutletComponent,
        CarouselComponent,
        CarouselWithControlsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ]
})
export class AppModule { }
