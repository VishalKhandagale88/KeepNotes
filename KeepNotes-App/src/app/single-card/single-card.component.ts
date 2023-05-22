import { Component, OnInit } from '@angular/core';
import { note } from '../notes';
import { NotesService } from '../services/notes.service';
import { ActivatedRoute } from '@angular/router'; // import manually

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit{

  constructor( private notesservices:NotesService,private ar:ActivatedRoute){}
  SingleNotes:note|undefined;

  ngOnInit():void{
    this.ar.paramMap.subscribe((parameter)=>{
      let id = parameter.get('id')??0;
      this.notesservices.getParticularNote(id).subscribe(data=>this.SingleNotes=data)
    })
  }

}
