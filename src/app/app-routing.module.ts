import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login/login.component';

import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { NoteIconsComponent } from './Components/note-icons/note-icons.component';
import { DisplaynotesComponent}from './Components/displaynotes/displaynotes.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'iconcomponent' ,component:NoteIconsComponent},
  {
    
      path: 'dashboard', component: DashboardComponent,
      children: [
        {path :'createNotes',component:CreatenotesComponent},
        {path:'getallnotes',component:GetallnotesComponent},
        {path :'archieve',component:ArchieveComponent},
        {path :'trash',component:TrashComponent},
      ]
    },
    {path:'displaynotes',component:DisplaynotesComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
