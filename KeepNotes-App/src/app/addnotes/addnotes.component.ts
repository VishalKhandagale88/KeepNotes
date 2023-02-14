import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { note } from '../notes';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {

    // constructor(private httppost : NotesService){}

    // AddNotes(data:any){
    //   this.httppost.PostData(data).subscribe(data=>{alert(`Notes added with id ${data.id}`)})
    // }
    constructor(private httpUpdateData : NotesService, private rs : Router , private activerouteer:ActivatedRoute){}
  ngOnInit(): void {
    this.activerouteer.paramMap.subscribe(parameters=>{
      let id=parameters.get("id")??0
      if(id>0){
        this.httpUpdateData.getParticularNote(id).subscribe(data=>this.NotesToBeAdded=data)
      }
    })
  }

  addTheNotes(){
    if(this.NotesToBeAdded.id!=0){
      alert(this.NotesToBeAdded.id)
      
      alert("Hello id not equal to deo")
      this.httpUpdateData.updateParticularNotes(this.NotesToBeAdded,this.NotesToBeAdded.id).subscribe(data=>{
        alert("Notes added"+data.id);
        this.rs.navigateByUrl("home");
      })
    }else{
      alert("New NOtes");
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
