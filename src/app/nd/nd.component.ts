import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Islem } from '../models/islem';
import { Mcihaz } from '../models/mcihaz';
import { IslemServiceService } from '../service/islem.service';
import { McihazService } from '../service/mcihaz.service';


@Component({
  selector: 'app-nd',
  templateUrl: './nd.component.html',
  styleUrls: ['./nd.component.css']
})
export class NdComponent implements OnInit {

  constructor(private islemService:IslemServiceService,private mcihazService:McihazService) { }

  islems:Islem[]|undefined
  model:Mcihaz= new Mcihaz();
  ngOnInit() {
    this.islemService.getIslem().subscribe(data=>{
      this.islems=data;
    })
  }
  add(form:NgForm){
    this.mcihazService.addPers(this.model).subscribe(data=>{})
  }

}
