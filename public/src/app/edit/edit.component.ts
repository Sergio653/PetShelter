import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; 


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet: any;
  errors = [];
  showErrors: Boolean;
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
    })
  }
  onUpdate(id){
    let obv = this._httpService.update(id,this.pet)
    obv.subscribe(data => {
      console.log("testing edit",data)
      if(data['errors']){
        console.log(data['errors'])
        this.showErrors = true;
        for (let err in data['errors']){
          this.errors.push(data['errors'][err]['message'])
        }
      }
      else{
        this._router.navigateByUrl('/pets')
      }
    })
    this.errors = [];
  }
}
