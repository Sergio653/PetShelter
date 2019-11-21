import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  addPet(pet){
    return this._http.post('/pets', pet)
  }
  getPets(){
    return this._http.get('/pets')
  }
  getOnePet(id){
    return this._http.get(`/pets/${id}`)
  }
  update(id,pet){
    return this._http.put(`/pets/${id}`,pet)
  }
  delete(id){
    return this._http.delete(`/pets/${id}`)
  }
}
