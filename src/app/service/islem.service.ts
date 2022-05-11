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

  getIslem():Observable<Islem[]>{
    return this.httpClient.get<Islem[]>(this.path);
  }

}
