import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NdComponent } from './nd/nd.component';

const routes: Routes = [
  {path:'nd',component:NdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
