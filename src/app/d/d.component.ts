import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mcihaz } from '../models/mcihaz';
import { McihazService } from '../service/mcihaz.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {

  constructor(private mcihazService:McihazService) { }
  mcihazs:Mcihaz[]|undefined;
  filterTerm!: string;
  
  ngOnInit() {
    this.mcihazService.getMcihaz().subscribe(data=>{
      this.mcihazs=data;
    })
  }
  

}
