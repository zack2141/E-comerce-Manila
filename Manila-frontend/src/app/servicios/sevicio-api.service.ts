import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SevicioAPIService {

  constructor(private httpClient: HttpClient) {}

  //consumo de api

  consumoapi(

  ):Observable<any>{

    return this.httpClient.get(``)

  }
}
