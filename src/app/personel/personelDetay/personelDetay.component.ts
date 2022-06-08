import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Personel } from 'src/app/models/personel';
import { AlertifyService } from 'src/app/service/alertifyjs.service';
import { PersonelService } from 'src/app/service/personel.service';

@Component({
  selector: 'app-personelDetay',
  templateUrl: './personelDetay.component.html',
  styleUrls: ['./personelDetay.component.css']
})
export class PersonelDetayComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private personelService:PersonelService,private alertify:AlertifyService,private activatedRoute:ActivatedRoute,private modalService:BsModalService) { }
  personel:Personel|undefined;
  personels:Personel[]|undefined;
  model:Personel=new Personel();
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getById(params["id"]);
    });
  }

  getById(id:any){
    this.personelService.getPersonelById(id).subscribe(data=>{
      this.personel=data;
      this.model.id=this.personel.id;
      this.model.adSoyad=this.personel.adSoyad;
      this.model.aktifmi=this.personel.aktifmi;
      console.log(data);
    });
  }
  update(form:NgForm){
    console.log(this.model);
    this.personelService.updatePersonel(this.model).subscribe(data=>{})
    this.alertify.success("Güncellendi");
  }
  delete(){
    this.personelService.deletePersonel(this.model.id).subscribe(data=>{})
    this.alertify.success("Silindi");
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
