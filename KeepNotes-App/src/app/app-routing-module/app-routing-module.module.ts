import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesViewComponent } from '../notes-view/notes-view.component';
import { AddnotesComponent } from '../addnotes/addnotes.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { ErrorcomponentComponent } from '../errorcomponent/errorcomponent.component';
import { NotesContainerComponent } from '../notes-container/notes-container.component';
import { SingleCardComponent } from '../single-card/single-card.component';
import { LogInPageComponent } from '../log-in-page/log-in-page.component';
import { MyActiveGaurdGuard } from '../my-active-gaurd.guard';
import { CheckPagesLeavingGuard } from '../check-pages-leaving.guard';

const routes : Routes=[
  {
    path:"",
    component:LogInPageComponent
  },
  {
    path:"home",
    component:NotesContainerComponent,

  },
  {
    path:"AddNotes",
    component:AddnotesComponent,
    canActivate:[MyActiveGaurdGuard],
    canDeactivate:[CheckPagesLeavingGuard]

  },
  {
    path:"AddUser",
    component:RegistrationFormComponent,
    canDeactivate:[CheckPagesLeavingGuard]
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
    path:"loginpage",
    component:LogInPageComponent
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
