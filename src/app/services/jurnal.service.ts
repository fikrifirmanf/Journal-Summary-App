import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JurnalService {
 
  constructor(private http:HttpClient) { }
  private baseUrl = "http://localhost:3000/api/"

  getResume(url:String):Observable<any>{
    return this.http.get(this.baseUrl+"resume?url="+url).pipe(map((res)=>res),catchError((err)=>{
      console.log(err)
      return throwError(err)
    }),finalize(()=>null),catchError((err)=>{
      console.log(err)
      return of([])
    }),finalize(()=>null))
  }
}
