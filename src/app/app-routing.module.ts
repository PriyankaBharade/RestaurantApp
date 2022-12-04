import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup/signup.component';
import { LoginComponent } from './login/login/login.component';
import { RestaurantDashComponent } from './dashboard/restaurant-dash/restaurant-dash.component';
const routes: Routes = [
  {
    path:'',
    component: SignupComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dahboard',
    component: RestaurantDashComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
