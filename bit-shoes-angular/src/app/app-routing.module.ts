import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { AdminComponent } from './routes/admin/admin.component';
import { HombreComponent } from './routes/hombre/hombre.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { MujerComponent } from './routes/mujer/mujer.component';
import { OutletCompraComponent } from './routes/outlet-compra/outlet-compra.component';
import { Page404Component } from './routes/page404/page404.component';
import { ShoppingCartComponent } from './routes/shopping-cart/shopping-cart.component';
import { SignupComponent } from './routes/signup/signup.component'

const routes: Routes = [
  //{path: laruta, component: elcomponente que se va a renderizar cuando ponga esa ruta}

  {path: "", pathMatch: "full", redirectTo: "/home"},

  {path: "home", component: HomeComponent, canActivate: [UserGuard]},
  {path: "admin", component: AdminComponent, canActivate: [AdminGuard]},
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'hombre', component: HombreComponent},
  {path: 'mujer', component:MujerComponent},
  {path: 'outlet', component: OutletCompraComponent},

  //siempre de ultimas la pagina 404 que te dice si la ruta no existe
  {path: "**", component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
