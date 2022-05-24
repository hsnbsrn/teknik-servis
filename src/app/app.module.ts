import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NdComponent } from './nd/nd.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DComponent } from './d/d.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DdetailsComponent } from './d/ddetails/ddetails.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IslemComponent } from './islem/islem.component';

@NgModule({
  declarations: [				
    AppComponent,
      NdComponent,
      DComponent,
      DdetailsComponent,
      IslemComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    TooltipModule.forRoot(),
    AccordionModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
