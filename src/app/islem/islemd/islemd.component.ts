import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Islem } from 'src/app/models/islem';
import { AlertifyService } from 'src/app/service/alertifyjs.service';
import { IslemServiceService } from 'src/app/service/islem.service';

@Component({
  selector: 'app-islemd',
  templateUrl: './islemd.component.html',
  styleUrls: ['./islemd.component.css']
})
export class IslemdComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private islemService:IslemServiceService,private activatedRoute:ActivatedRoute,private alertify:AlertifyService,private modalService:BsModalService) { }
  islem:Islem|undefined;
  model:Islem=new Islem();
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getById(params["id"]);
    })
  }

  getById(id:any){
    this.islemService.getIslemById(id).subscribe(data=>{
      this.islem=data;
      this.model.id=this.islem.id;
      this.model.ad=this.islem.ad;
      this.model.ucret=this.islem.ucret;
      console.log(data);
    })
  }
  update(form:NgForm){
    this.islemService.updateIslem(this.model).subscribe(data=>{})
    this.alertify.success("Güncellendi");
  }
  delete(){
    this.islemService.deleteIslem(this.islem?.id).subscribe(data=>{})
    this.alertify.success("Silindi");
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
