import { Component, OnInit } from '@angular/core';
import { Islem } from '../models/islem';
import { IslemServiceService } from '../service/islem.service';


@Component({
  selector: 'app-nd',
  templateUrl: './nd.component.html',
  styleUrls: ['./nd.component.css']
})
export class NdComponent implements OnInit {

  constructor(private islemService:IslemServiceService) { }

  islems:Islem[]|undefined
  ngOnInit() {
    this.islemService.getIslem().subscribe(data=>{
      this.islems=data;
    })
  }

}
