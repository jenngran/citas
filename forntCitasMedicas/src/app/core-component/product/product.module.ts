import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatNativeDateModule
  ]
})
export class ProductModule { }
