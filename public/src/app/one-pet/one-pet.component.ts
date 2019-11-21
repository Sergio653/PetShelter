import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-one-pet',
  templateUrl: './one-pet.component.html',
  styleUrls: ['./one-pet.component.css']
})
export class OnePetComponent implements OnInit {
  pet: any;
  likes: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.getPetFromService(params['id'])
  });
    this.pet = {}
  }
  getPetFromService(id){
    let obv = this._httpService.getOnePet(id)
    obv.subscribe(data => {
      console.log("Found Pet",data)
      this.pet = data['pet']
      this.likes = data['pet']['likes']
    })
  }
  like(id){
    var like = this.likes+1
    this.pet.likes = like;
    let obv = this._httpService.update(id,this.pet)
    obv.subscribe(data => {
      console.log("updated",data)
      
    })
  }
  onDelete(id){
    console.log("in componet")
    let obv = this._httpService.delete(id)
    obv.subscribe( data => {
      console.log("Adopted pet", data)
      this._router.navigateByUrl('/pets')
    })
  }
}
