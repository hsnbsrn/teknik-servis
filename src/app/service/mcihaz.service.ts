import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Mcihaz } from '../models/mcihaz';

@Injectable({
  providedIn: 'root'
})
export class McihazService {

constructor(private httpClient:HttpClient) { }

path="https://localhost:7091/api/mcihazs/"
handleError(err: HttpErrorResponse){
  let errorMesage="";
  
  if(err.error instanceof ErrorEvent){

    errorMesage='Bir hata oluştu '+err.error.message

  }else{
    errorMesage= 'Sistemsel bir hata'
  }
  return throwError(()=>errorMesage);
}
getMcihaz():Observable<Mcihaz[]>{
  return this.httpClient.get<Mcihaz[]>(this.path);
}
getMcihazById(id:any){
  return this.httpClient.get<Mcihaz[]>(this.path+id)
}
addCihaz(c:Mcihaz){
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.post<Mcihaz>(this.path,c,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

updateCihaz(data:Mcihaz):Observable<Mcihaz>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.put<Mcihaz>(this.path,data,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError))
}

deleteCİhaz(id:any): Observable<any>{
return this.httpClient.delete(this.path+id)
} 

}

