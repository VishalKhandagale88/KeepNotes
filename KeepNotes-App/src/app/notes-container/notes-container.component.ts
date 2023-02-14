import { Component } from '@angular/core';
import { note } from '../notes';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent {

  NotesArray :note[]|any
  constructor(private httpref : NotesService ){this.getCompleteNotes()}

  getCompleteNotes(){
    this.httpref.featchDate().subscribe(item=>this.NotesArray=item)
  }
  searchingNotes(data:string){
    if(data==""){
      this.getCompleteNotes();
    }
    else{
      this.NotesArray = this.NotesArray.filter((d:{title:string; })=>d.title == data);
    }

  }
}
