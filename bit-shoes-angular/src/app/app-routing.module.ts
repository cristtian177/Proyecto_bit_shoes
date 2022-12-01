import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './routes/admin/admin.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},

  {path: "home", component: HomeComponent},
  {path: "admin", component: AdminComponent},



  
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
