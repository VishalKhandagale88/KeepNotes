import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckBeforeLeavingPage } from '../CheckBeforeLeavingPage';
import { note } from '../notes';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit,CheckBeforeLeavingPage {

    // constructor(private httppost : NotesService){}

    // AddNotes(data:any){
    //   this.httppost.PostData(data).subscribe(data=>{alert(`Notes added with id ${data.id}`)})
    // }
    constructor(private httpUpdateData : NotesService, private rs : Router , private activerouteer:ActivatedRoute){}
  canClosePage(): boolean {

    if(this.NotesToBeAdded.title=="" || this.NotesToBeAdded.category=="" || this.NotesToBeAdded.content=="" || this.NotesToBeAdded.priority){
      var val=confirm("Do you want to leave this page");
      return val;
    }else{
      return false;
    }
  }
  ngOnInit(): void {
    this.activerouteer.paramMap.subscribe(parameters=>{
      let id=parameters.get("id")??0
      if(id>0){

        this.httpUpdateData.getParticularNote(id).subscribe(data=>this.NotesToBeAdded=data)
      }
    })
  }

  addTheNotes(){
    alert(this.NotesToBeAdded.id)
    if(this.NotesToBeAdded.id!== undefined){
      this.httpUpdateData.updateParticularNotes(this.NotesToBeAdded,this.NotesToBeAdded.id).subscribe(data=>{
        alert("Notes added"+data.id);
        this.rs.navigateByUrl("home");
      })
    }else{
      this.httpUpdateData.PostData(this.NotesToBeAdded).subscribe(data=>{
        alert("Notes added "+data.id);
        this.rs.navigateByUrl("home");
      })
    }
  }

    NotesToBeAdded:note={
      title: '',
      content: '',
      reminderDate: undefined,
      category: '',
      priority: ''
    }
    // udpateNotsDB(notesdata:note){
    //     this.httpUpdateData.PostData(notesdata).subscribe(data=>{alert(`Notes Added with ${data.id}`)})

    // }


}
