import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogInsService } from './log-ins.service';
import { NotesService } from './services/notes.service';

@Injectable({
  providedIn: 'root'
})
export class MyActiveGaurdGuard implements CanActivate {
  constructor(private loginservices:LogInsService,private r : Router , private activate:ActivatedRoute){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginservices.isPageAdmin){
      return true;
    }else{
      console.log("U have no access")
      return false;
    }
  }


}
