import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mcihaz } from '../models/mcihaz';

@Injectable({
  providedIn: 'root'
})
export class McihazService {

constructor(private httpClient:HttpClient) { }
path="https://localhost:7091/api/mcihazs"
getMcihaz():Observable<Mcihaz[]>{
  return this.httpClient.get<Mcihaz[]>(this.path);
}
}

