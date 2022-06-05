import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Personel } from '../models/personel';


@Injectable({
  providedIn: 'root'
})
export class PersonelService {

constructor(private httpClient:HttpClient) {}
path="https://localhost:7091/api/Personel/";
handleError(err: HttpErrorResponse){
  let errorMesage="";
  
  if(err.error instanceof ErrorEvent){

    errorMesage='Bir hata oluştu '+err.error.message

  }else{
    errorMesage= 'Sistemsel bir hata'
  }
  return throwError(()=>errorMesage);
}
getPersonel():Observable<Personel[]>{
  return this.httpClient.get<Personel[]>(this.path);
}
getPersonelById(id:any){
  return this.httpClient.get<Personel>(this.path+id)

}
addPersonel(c:Personel){
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.post<Personel>(this.path,c,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}
deletePersonel(id:any): Observable<any>{
return this.httpClient.delete(this.path+id)
}
updatePersonel(c:Personel):Observable<Personel>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.put<Personel>(this.path+c.id,c,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}}