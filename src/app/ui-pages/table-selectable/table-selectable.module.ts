import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxTablesModule
} from '@netex/ux-components';

import { TableSelectableRoutingModule } from './table-selectable-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TableSelectableRoutingModule,
    NtxTablesModule,
    MatExpansionModule
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class TableSelectableModule { }
