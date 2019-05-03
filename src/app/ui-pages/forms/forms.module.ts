import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';

import {
  NtxFormsModule,
  NtxCardsModule
} from '@netex/ux-components';

import { FormsRoutingModule } from './forms-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule,
    NtxFormsModule,
    NtxCardsModule,
    FormsRoutingModule,
    MatExpansionModule
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class FormsModule { }
