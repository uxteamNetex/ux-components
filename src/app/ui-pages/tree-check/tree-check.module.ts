import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxTreesModule,
  NtxCardsModule
} from '@netex/ux-components';

import { TreeCheckRoutingModule } from './tree-check-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule,
    TreeCheckRoutingModule,
    NtxTreesModule,
    NtxCardsModule
  ],
  declarations: [DocumentationComponent, ExamplesComponent]
})
export class TreeCheckModule { }
