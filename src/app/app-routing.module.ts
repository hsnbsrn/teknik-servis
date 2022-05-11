import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DComponent } from './d/d.component';
import { NdComponent } from './nd/nd.component';

const routes: Routes = [
  {path:'nd',component:NdComponent},
  {path:'d',component:DComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
