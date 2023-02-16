import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NotesService } from './services/notes.service';
import { usersDetails } from './userdatas';

@Injectable({
  providedIn: 'root'
})
export class LogInsService {

  constructor(private noteservices:NotesService,private r:Router) { }
  isPageAdmin:boolean=false;
  isNormalUser:boolean=true;
  userData:usersDetails|undefined;
  LogInAuthentication(username:string,userpassword:string){
    if(username=="vishal" && userpassword=="123456" ){
      this.isPageAdmin=true;
    }else if(username=="vishal" && userpassword!="123456"  ){
      alert("Incorrect password")
    }
    else{
      this.r.navigateByUrl("loginpage")
      alert("Access denied");
    }

  }

}
