import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personel } from '../models/personel';
import { AlertifyService } from '../service/alertifyjs.service';
import { PersonelService } from '../service/personel.service';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.css']
})
export class PersonelComponent implements OnInit {

  constructor(private personelService:PersonelService,private alertify:AlertifyService) { }
  personel:Personel|undefined;
  personels:Personel[]|undefined;
  model:Personel=new Personel();
  ngOnInit() {
    this.personelService.getPersonel().subscribe(data=>{
      this.personels=data;     
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
  add(form:NgForm){
    this.personelService.addPersonel(this.model).subscribe(data=>{})
    this.alertify.success("Eklendi");
    console.log(this.model.aktifmi);
  }
  update(form:NgForm){
    this.personelService.updatePersonel(this.model).subscribe(data=>{})
    this.alertify.success("Güncellendi");
    console.log(this.model.aktifmi);
  }
  delete(){
    this.personelService.deletePersonel(this.model.id).subscribe(data=>{})
    this.alertify.success("Silindi");
    console.log(this.model.aktifmi);
  }
}
