import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { SignupComponent } from './routes/signup/signup.component';
const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "signup", component: SignupComponent},
  {path: "home", component: HomeComponent},
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
