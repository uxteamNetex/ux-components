import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxTablesModule
} from '@netex/ux-components';

import { TableRoutingModule } from './table-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NtxTablesModule
  ]
})
export class TableModule { }
