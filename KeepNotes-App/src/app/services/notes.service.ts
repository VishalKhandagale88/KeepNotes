import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { note } from '../notes';
import { usersDetails } from '../userdatas';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  url:string = "http://localhost:3000/notes"

  constructor(private httpClient : HttpClient) { }

  featchDate():Observable<Array<note>>{
    return this.httpClient.get<Array<note>>(this.url);
  }

  PostData(data:note):Observable<note>{
    return this.httpClient.post<note>(this.url,data)
  }

  PostUserDetails(data:usersDetails):Observable<usersDetails>{
    return this.httpClient.post<usersDetails>("http://localhost:3001/userdata",data)
  }
  getParticularNote(id:any):Observable<note>{
    return this.httpClient.get<note>(this.url+"/"+id)
  }

  updateParticularNotes(notes:note,id:any):Observable<note>{
    return this.httpClient.put<note>(this.url+"/"+id,notes)
  }
}
