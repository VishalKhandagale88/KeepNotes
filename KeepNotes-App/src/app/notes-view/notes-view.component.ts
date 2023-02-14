import { Component, Input } from '@angular/core';
import { note } from '../notes';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent {
  @Input()
  NotesCard:note[]|any

}
