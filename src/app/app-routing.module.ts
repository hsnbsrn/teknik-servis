import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DComponent } from './d/d.component';
import { DdetailsComponent } from './d/ddetails/ddetails.component';
import { NdComponent } from './nd/nd.component';

const routes: Routes = [
  {path:'nd',component:NdComponent},
  {path:'d',component:DComponent},
  {path:'dDetail/:id',component:DdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
