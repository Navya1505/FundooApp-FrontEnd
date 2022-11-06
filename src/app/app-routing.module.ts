import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenicationGuard } from './Components/authenication.guard';

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
import { UpdatenotesComponent } from './Components/updatenotes/updatenotes.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'iconcomponent' ,component:NoteIconsComponent},
  {
    
      path: 'dashboard', component: DashboardComponent,canActivate:[AuthenicationGuard],
      children: [
        {path :'createNotes',component:CreatenotesComponent},
        {path:'getallnotes',component:GetallnotesComponent},
        {path :'archive',component:ArchieveComponent},
        {path :'trash',component:TrashComponent},
        {path:'displaynotes',component:DisplaynotesComponent},
        {path:'Updatenotes',component:UpdatenotesComponent}
      ]
    },
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
