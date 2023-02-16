import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogInsService } from '../log-ins.service';
import { usersDetails } from '../userdatas';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent {

  username:string="";
  userPassword:string="";

  constructor(private loginservice:LogInsService,private router:Router){}
  CheckLogIn(){
    alert(this.username);
    alert(this.userPassword);
    this.loginservice.LogInAuthentication(this.username,this.userPassword);
    setTimeout(()=>{
      if(this.loginservice.isPageAdmin){
        this.router.navigateByUrl("home");
      }
    },3000)
  }

}
