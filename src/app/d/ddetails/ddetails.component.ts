import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Islem } from 'src/app/models/islem';
import { Mcihaz } from 'src/app/models/mcihaz';
import { AlertifyService } from 'src/app/service/alertifyjs.service';
import { IslemServiceService } from 'src/app/service/islem.service';
import { McihazService } from 'src/app/service/mcihaz.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DurumService } from 'src/app/service/durum.service';
import { Durum } from 'src/app/models/durum';

@Component({
  selector: 'app-ddetails',
  templateUrl: './ddetails.component.html',
  styleUrls: ['./ddetails.component.css']
})
export class DdetailsComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService,private islemService:IslemServiceService,private mCihazService:McihazService,private activatedRoute:ActivatedRoute,private alertify:AlertifyService,
    private durumService:DurumService) { }

  i:number|undefined
  cihaz:Mcihaz|undefined;
  model:Mcihaz=new Mcihaz();
  islems:Islem[]|undefined;
  durums:Durum[]|undefined;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getById(params["id"]);
    });
    this.islemService.getIslem().subscribe(data=>{
      this.islems=data;
    });
    this.durumService.getDurum().subscribe(data=>{
      this.durums=data;
    });
  }
  getById(id:any){
    this.mCihazService.getMcihazById(id).subscribe(data=>{
      this.cihaz=data;
      this.model.adSoyad=this.cihaz.adSoyad;
      this.model.id=this.cihaz.id;
      this.model.islem=this.cihaz.islem;
      this.model.cihaz=this.cihaz.cihaz;
      this.model.detayIslem=this.cihaz.detayIslem;
      this.model.mail=this.cihaz.mail;
      this.model.telNo=this.cihaz.telNo;
      this.model.ucret=this.cihaz.ucret;
      this.model.ekstra=this.cihaz.ekstra;
      this.model.durum=this.cihaz.durum;
      this.model.getirilen=this.cihaz.getirilen; 
      this.model.personel=this.cihaz.personel; 
      console.log(this.model.personel);
    })
  }
  update(form:NgForm){
    this.mCihazService.updateCihaz(this.model).subscribe(data=>{})
    this.alertify.success("Güncellendi");
    console.log(this.model.durum);
  }
  delete(){
    this.mCihazService.deleteCİhaz(this.model.id).subscribe(()=>{
      console.log("silindi")
    })
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  up(form:NgForm){
    var i : number;
    var j : number= +this.model.ekstra!;
    var t : number;
    i = this.model.ucret!
    t = i + j;
    console.log(typeof(i))
    console.log(typeof(j))
    console.log("İ "+i)
    console.log("j "+j)
    console.log("t "+t)
    this.model.ucret = t;
    this.mCihazService.updateCihaz(this.model).subscribe(data=>{})
    this.alertify.success("Güncellendi");
  }
  up1(form:NgForm){
    this.model.durum=2;
    this.mCihazService.updateCihaz(this.model).subscribe(data=>{})
    this.alertify.success("Güncellendi");
  }

  up2(form:NgForm){
    this.model.durum=3;
    this.mCihazService.updateCihaz(this.model).subscribe(data=>{})
    this.alertify.success("Güncellendi");
  }

  up3(form:NgForm){
    this.model.durum=1002;
    this.mCihazService.updateCihaz(this.model).subscribe(data=>{})
    this.alertify.success("Güncellendi");
  }
}
