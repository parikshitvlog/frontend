import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ApitableComponent } from './apitable/apitable.component';
import { DashbordComponent } from './dashbord/dashbord.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'apiData',component:ApitableComponent},
  {path:'dashdata',component:DashbordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
