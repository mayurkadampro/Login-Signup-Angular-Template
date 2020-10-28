import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FpasswordComponent } from './components/fpassword/fpassword.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent,
  },
  {
    path:"forgot_password",
    component: FpasswordComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
