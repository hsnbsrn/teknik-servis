import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mcihaz } from 'src/app/models/mcihaz';
import { McihazService } from 'src/app/service/mcihaz.service';

@Component({
  selector: 'app-ddetails',
  templateUrl: './ddetails.component.html',
  styleUrls: ['./ddetails.component.css']
})
export class DdetailsComponent implements OnInit {

  constructor(private mCihazService:McihazService,private activatedRoute:ActivatedRoute) { }

  cihaz:Mcihaz[]|undefined;


  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getById(params["id"])
    });

  }

  getById(id:any){
    this.mCihazService.getMcihazById(id).subscribe(data=>{
      this.cihaz=data;
      console.log(this.cihaz)
    })
  }

}
