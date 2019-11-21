import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getPetsFromService()
  }
  getPetsFromService(){
    let obv = this._httpService.getPets()
    obv.subscribe(data =>{
      console.log("Found pets",data)
      this.pets = data['pets'].sort((a,b)=> a.type.localeCompare(b.type))
    })
  }
}
