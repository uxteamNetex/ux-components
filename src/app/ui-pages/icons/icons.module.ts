import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsExamplesComponent } from './examples/icons-examples.component';
import { IconsDocComponent } from './documentation/icons-doc.component';
import { MatIconModule, MatCardModule, MatGridListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import {
  NtxCardsModule
} from '@netex/ux-components';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IconsRoutingModule,
    MatIconModule,
    NtxCardsModule
  ],
  declarations: [
    IconsExamplesComponent,
    IconsDocComponent
  ]
})
export class IconsModule { }
