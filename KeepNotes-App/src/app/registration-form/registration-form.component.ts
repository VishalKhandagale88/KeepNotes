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
    FirsName:[null,[Validators.required]],
    LastName:[null,Validators.required],
    EmailId:[null,[Validators.required,Validators.email]],
    Password:[null,Validators.required],
    ConfirmPassword:[null,Validators.required],
    Gender:[null],
    Age:[null,[Validators.required,this.AgeValidation]],
    PhoneNumber:[null,[Validators.required,Validators.pattern('[9876]{1,10}')]],
    street:[null],
    city:[null],
    state:[null],
    pinCode:[null,[Validators.required,Validators.pattern('[4-6]{1,6}')]],
  },{validators:this.checkConfirmPasswords}); // validator is key here

  get FirsName(){
    return this.UserDataFromForm.controls['FirsName'];
  }

  get LastName(){
    return this.UserDataFromForm.controls['LastName'];
  }

  get EmailId(){
    return this.UserDataFromForm.controls['EmailId'];
  }

  // get Password(){
  //   return this.UserDataFromForm.controls['Password'];
  // }

  get ConfirmPassword(){
    return this.UserDataFromForm.controls.ConfirmPassword;
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

    if(acc.value<18){
      return{error1:true}
    }
    else{
      return null;
    }
  }

  checkConfirmPasswords(Acc:AbstractControl){

    let p =  Acc.get("Password")?.value
    console.log("password is "+p);
    let cp = Acc.get("ConfirmPassword")?.value
    if(p===cp){
      return null ;
    }
    else{
      return {passwordMismatch:true} ;
    }
  }

}
