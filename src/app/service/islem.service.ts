import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Islem } from '../models/islem';
@Injectable({
  providedIn: 'root'
})
export class IslemServiceService {

  constructor(private httpClient:HttpClient) { }

  path="https://localhost:7091/api/islems"
  handleError(err: HttpErrorResponse){
    let errorMesage="";
    
    if(err.error instanceof ErrorEvent){
  
      errorMesage='Bir hata oluştu '+err.error.message
  
    }else{
      errorMesage= 'Sistemsel bir hata'
    }
    return throwError(()=>errorMesage);
  }
  getIslem():Observable<Islem[]>{
    return this.httpClient.get<Islem[]>(this.path);
  }

  getIslemById(id:any){
    return this.httpClient.get<Islem>(this.path+id)
  }

  addCihaz(c:Islem){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.httpClient.post<Islem>(this.path,c,httpOptions).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateCihaz(data:Islem):Observable<Islem>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.httpClient.put<Islem>(this.path+data.id,data,httpOptions).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError))
  }

  deleteIslem(id:any): Observable<any>{
    return this.httpClient.delete(this.path+id)
    } 
}
