import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxTablesModule
} from '@netex/ux-components';

import { TableRoutingModule } from './table-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NtxTablesModule,
    MatExpansionModule
  ]
})
export class TableModule { }
