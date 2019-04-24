import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxEmptyPagesModule
} from '@netex/ux-components';

import { EmptyPagesRoutingModule } from './empty-pages-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    EmptyPagesRoutingModule,
    NtxEmptyPagesModule
  ]
})
export class EmptyPagesModule { }
