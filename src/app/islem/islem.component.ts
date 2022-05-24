import { Component, OnInit } from '@angular/core';
import { Islem } from '../models/islem';
import { IslemServiceService } from '../service/islem.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-islem',
  templateUrl: './islem.component.html',
  styleUrls: ['./islem.component.css']
})
export class IslemComponent implements OnInit {

  constructor(private islemService:IslemServiceService) { }
  islem:Islem[]|undefined;
  filterTerm!: string;
  ngOnInit() {
    this.islemService.getIslem().subscribe(data=>{
      this.islem=data;
    })
  }

}
