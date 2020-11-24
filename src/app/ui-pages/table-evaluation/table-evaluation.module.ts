import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxTablesModule
} from '@netex/ux-components';

import { TableEvaluationRoutingModule } from './table-evaluation-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    TableEvaluationRoutingModule,
    NtxTablesModule,
    MatExpansionModule
  ]
})
export class TableEvaluationModule { }
