import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Islem } from 'src/app/models/islem';
import { Mcihaz } from 'src/app/models/mcihaz';
import { IslemServiceService } from 'src/app/service/islem.service';
import { McihazService } from 'src/app/service/mcihaz.service';

@Component({
  selector: 'app-ddetails',
  templateUrl: './ddetails.component.html',
  styleUrls: ['./ddetails.component.css']
})
export class DdetailsComponent implements OnInit {

  constructor(private islemService:IslemServiceService,private mCihazService:McihazService,private activatedRoute:ActivatedRoute) { }

  cihaz:Mcihaz|undefined;
  model:Mcihaz=new Mcihaz();
  islems:Islem[]|undefined
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getById(params["id"]);
    });
    this.islemService.getIslem().subscribe(data=>{
      this.islems=data;
    })
  }
  getById(id:any){
    this.mCihazService.getMcihazById(id).subscribe(data=>{
      this.cihaz=data;
      this.model.adSoyad=this.cihaz.adSoyad;
      this.model.id=this.cihaz.id;
      this.model.islem=this.cihaz.islem
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
