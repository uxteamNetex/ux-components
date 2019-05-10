import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxTreesModule,
  NtxCardsModule
} from '@netex/ux-components';

import { TreesRoutingModule } from './trees-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TreesRoutingModule,
    NtxTreesModule,
    NtxCardsModule,
    MatExpansionModule
  ],
  declarations: [DocumentationComponent, ExamplesComponent]
})
export class TreesModule { }
