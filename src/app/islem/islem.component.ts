import { Component, OnInit } from '@angular/core';
import { Islem } from '../models/islem';
import { IslemServiceService } from '../service/islem.service';
import { NgForm } from '@angular/forms';
import { AlertifyService } from '../service/alertifyjs.service';

@Component({
  selector: 'app-islem',
  templateUrl: './islem.component.html',
  styleUrls: ['./islem.component.css']
})
export class IslemComponent implements OnInit {

  constructor(private islemService:IslemServiceService,private alertifyService:AlertifyService) { }
  islem:Islem[]|undefined;
  filterTerm!: string;
  model:Islem= new Islem();
  ngOnInit() {
    this.islemService.getIslem().subscribe(data=>{
      this.islem=data;
    })
  }
  add(form:NgForm){
    this.islemService.addIslem(this.model).subscribe(data=>{});
    this.alertifyService.success("Eklendi");

  }

}
