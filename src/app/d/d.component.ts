import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Durum } from '../models/durum';
import { Islem } from '../models/islem';
import { Mcihaz } from '../models/mcihaz';
import { DurumService } from '../service/durum.service';
import { IslemServiceService } from '../service/islem.service';
import { McihazService } from '../service/mcihaz.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {

  constructor(private mcihazService:McihazService,private islemService:IslemServiceService,private durumService:DurumService) { }
  mcihazs:Mcihaz[]|undefined;
  filterTerm!: string;
  islem:Islem[]|undefined;
  durums:Durum[]|undefined
  row=1;
  ngOnInit() {
    this.mcihazService.getMcihaz().subscribe(data=>{
      this.mcihazs=data;
    });
    this.islemService.getIslem().subscribe(data=>{
      this.islem=data;
    });
    this.durumService.getDurum().subscribe(data=>{
      this.durums=data;
    });
  }
  

}
