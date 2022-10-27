import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login/login.component';

import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword/resetpassword.component';
const routes: Routes = [
  {path:'registration',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
