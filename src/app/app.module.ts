import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './Components/login/login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword/resetpassword.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { TrashComponent } from './Components/trash/trash.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoteIconsComponent } from './Components/note-icons/note-icons.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import {MatCardModule} from '@angular/material/card';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { UpdatenotesComponent } from './Components/updatenotes/updatenotes.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { AuthguradServiceService } from './services/authgurad-service.service';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    CreatenotesComponent,
    TrashComponent,
    ArchieveComponent,
    NoteIconsComponent,
     GetallnotesComponent,
    DisplaynotesComponent,
    UpdatenotesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
     MatButtonModule,
     ReactiveFormsModule,
     HttpClientModule,
     MatSidenavModule,
     MatListModule,
     MatIconModule,
     MatToolbarModule,
     MatExpansionModule,
     MatCardModule,
     MatDialogModule,
     MatListModule,
     MatToolbarModule,
     FormsModule,
     MatMenuModule,
    
     
  
    
  ],
  providers: [
    AuthguradServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
