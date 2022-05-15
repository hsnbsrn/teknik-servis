import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mcihaz } from 'src/app/models/mcihaz';
import { McihazService } from 'src/app/service/mcihaz.service';

@Component({
  selector: 'app-ddetails',
  templateUrl: './ddetails.component.html',
  styleUrls: ['./ddetails.component.css']
})
export class DdetailsComponent implements OnInit {

  constructor(private mCihazService:McihazService,private activatedRoute:ActivatedRoute) { }

  cihaz:Mcihaz[]|undefined;
  model:Mcihaz=new Mcihaz();

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getById(params["id"])
    });

  }
  getById(id:any){
    this.mCihazService.getMcihazById(id).subscribe(data=>{
      this.cihaz=data;
      console.log(this.cihaz)
    })
  }
  update(form:NgForm){
    this.mCihazService.updateCihaz(this.model).subscribe(data=>{})
  }
  delete(){
    this.mCihazService.deleteCİhaz(this.model.id).subscribe(()=>{
      console.log("silindi")
    })
  }

}
