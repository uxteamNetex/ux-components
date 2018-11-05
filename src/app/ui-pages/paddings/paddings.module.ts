import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxTablesModule
} from '@netex/ux-components';

import { SharedModule } from '../../shared/shared.module';

import { PaddingsRoutingModule } from './paddings-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule,
    PaddingsRoutingModule,
    NtxTablesModule
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class PaddingsModule { }
