import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations:[
    AppComponent,
    WelcomeComponent,
    ProductListComponent, 
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
