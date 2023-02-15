import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NotesViewComponent } from './notes-view/notes-view.component';
import {MatCardModule} from '@angular/material/card';
import{HttpClientModule} from '@angular/common/http';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AddnotesComponent } from './addnotes/addnotes.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { SingleCardComponent } from './single-card/single-card.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesViewComponent,
    SearchbarComponent,
    AddnotesComponent,
    RegistrationFormComponent,
    NotesContainerComponent,
    ErrorcomponentComponent,
    SingleCardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    AppRoutingModuleModule,
    MatTooltipModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
