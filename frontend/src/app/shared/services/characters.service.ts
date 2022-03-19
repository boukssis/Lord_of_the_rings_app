import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) { }

  get_List_characters():Observable<Character[]>{
  
    //Imitating Roles for testing purposes 
   let role = JSON.parse(String(localStorage.getItem('user'))).roles
   const headers = new HttpHeaders({
     role:role
   })
   
    return  this.http.get<Character[]>(environment.BaseUrl+'/characters', {headers:headers} )
    .pipe(retry(1), catchError(this.handleError));

}

 
//Handle Error
handleError(error:any) {
let errorMessage = '';
if (error.error instanceof ErrorEvent) {
  // client-side error
  errorMessage = `Error: ${error.error.message}`;
} else {
  // server-side error
  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
}
console.log(errorMessage);
return throwError(() => {
    return errorMessage;
});
}
}
