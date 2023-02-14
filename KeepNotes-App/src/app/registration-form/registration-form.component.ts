import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NotesService } from '../services/notes.service';
import { usersDetails } from '../userdatas';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {


  constructor(private fb: FormBuilder, private httppost:NotesService) {}
  UserDataFromForm=this.fb.group({
    FirsName:['',[Validators.required]],
    LastName:['',Validators.required],
    EmailId:['',[Validators.required,Validators.email]],
    Password:['',Validators.required],
    ConfirmPassword:['',Validators.required],
    Gender:[''],
    Age:[null,[Validators.required,this.AgeValidation]],
    PhoneNumber:["",Validators.required],
    street:[''],
    city:[''],
    state:[''],
    pinCode:['']
  },{Validators:this.checkConfirmPasswords})

  get FirsName(){
    return this.UserDataFromForm.controls['FirsName'];
  }

  get LastName(){
    return this.UserDataFromForm.controls['LastName'];
  }

  get EmailId(){
    return this.UserDataFromForm.controls['EmailId'];
  }

  get Password(){
    return this.UserDataFromForm.controls['Password'];
  }

  get ConfirmPassword(){
    return this.UserDataFromForm.controls['ConfirmPassword'];
  }
  get PhoneNumber(){
    return  this.UserDataFromForm.controls['PhoneNumber'];
  }
  get pinCode(){
    return this.UserDataFromForm.controls['pinCode'];
  }

  get Age(){
    return this.UserDataFromForm.controls['Age'];
  }
  onSubmit(data:usersDetails) {
    this.httppost.PostUserDetails(data).subscribe(data=>{alert(`Wlcome to KeepNotes ${data.FirsName} `)})
  }

  AgeValidation(acc:AbstractControl){
    console.log("age"+acc.value)
    if(acc.value<18){
      return{error1:true}
    }
    else{
      return null;
    }
  }

  checkConfirmPasswords(acc:AbstractControl){
    console.log(acc.get("Password")?.value)
    console.log(acc.get("ConfirmPassword")?.value)
    if(acc.get("Password")?.value==acc.get("ConfirmPassword")?.value){
      return null ;
    }
    else{
      return {passwordMismatch:true} ;
    }
  }

}
