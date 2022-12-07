import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutletComponent } from './components/outlet/outlet.component';
import { HomeComponent } from './routes/home/home.component';
import { MujerComponent } from './routes/mujer/mujer.component';
import { SignupComponent } from './routes/signup/signup.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "outlet", component: OutletComponent},
  {path: "hombre", component: SignupComponent},
  {path: "mujer", component: MujerComponent},
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
