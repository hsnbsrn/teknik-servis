import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DComponent } from './d/d.component';
import { DdetailsComponent } from './d/ddetails/ddetails.component';
import { IslemComponent } from './islem/islem.component';
import { IslemdComponent } from './islem/islemd/islemd.component';
import { NdComponent } from './nd/nd.component';
import { PersonelComponent } from './personel/personel.component';
import { PersonelDetayComponent } from './personel/personelDetay/personelDetay.component';

const routes: Routes = [
  {path:'nd',component:NdComponent},
  {path:'d',component:DComponent},
  {path:'dDetail/:id',component:DdetailsComponent},
  {path:'islem',component:IslemComponent},
  {path:'dIslem/:id',component:IslemdComponent},
  {path:'personel',component:PersonelComponent},
  {path:'personel/:id',component:PersonelDetayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
