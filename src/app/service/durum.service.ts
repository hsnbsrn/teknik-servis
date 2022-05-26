import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Durum } from '../models/durum';

@Injectable({
  providedIn: 'root'
})
export class DurumService {

constructor(private httpClient:HttpClient) { }
path="https://localhost:7091/api/durums"
handleError(err: HttpErrorResponse){
  let errorMesage="";
  
  if(err.error instanceof ErrorEvent){

    errorMesage='Bir hata oluştu '+err.error.message

  }else{
    errorMesage= 'Sistemsel bir hata'
  }
  return throwError(()=>errorMesage);
}
getDurum():Observable<Durum[]>{
  return this.httpClient.get<Durum[]>(this.path);
}
}
