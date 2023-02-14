import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesViewComponent } from '../notes-view/notes-view.component';
import { AddnotesComponent } from '../addnotes/addnotes.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { ErrorcomponentComponent } from '../errorcomponent/errorcomponent.component';
import { NotesContainerComponent } from '../notes-container/notes-container.component';
import { SingleCardComponent } from '../single-card/single-card.component';

const routes : Routes=[
  {
    path:"",
    component:NotesContainerComponent
  },
  {
    path:"home",
    component:NotesContainerComponent
  },
  {
    path:"AddNotes",
    component:AddnotesComponent
  },
  {
    path:"AddUser",
    component:RegistrationFormComponent
  },
  {
    path:"SingleCard/:id",
    component:SingleCardComponent
  },
  {
    path:"editemployee/:id",
    component:AddnotesComponent
  },

  {
    path:"**",
    component:ErrorcomponentComponent
  }
]

@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModuleModule { }
