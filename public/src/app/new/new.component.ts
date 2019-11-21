import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;
  errors = [];
  showErrors: Boolean;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    ) { }

  ngOnInit() {
    this.newPet = {name: "", type: "", desc: "", one: "", two: "", three: ""}
    
  }
  onSubmit(){
    let obv = this._httpService.addPet(this.newPet)
    obv.subscribe(data => {
      if(data['errors']){
        console.log(data['errors'])
        this.showErrors = true;
        for (let err in data['errors']){
          this.errors.push(data['errors'][err]['message'])
        }
      }
      else{
        this._router.navigateByUrl('/')
      }
      
    })
  }
}
