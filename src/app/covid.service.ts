import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  create(data: Result){
    return this.http.post('http://localhost:3000/covidResult',data)
  }
  getData(){
    return this.http.get("http://localhost:3000/covidResult")
  }
  delete(id: any){
    return this.http.delete('http://localhost:3000/covidResult/' + id)
  }
  update(id: any, data: Result){
    return this.http.put('http://localhost:3000/covidResult/' + id, data)
  }
}
