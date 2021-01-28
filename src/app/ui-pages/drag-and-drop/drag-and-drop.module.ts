import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxButtonsModule,
  NtxCardsModule,
  NtxDragAndDropModule
} from '@netex/ux-components';

import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NtxButtonsModule,
    NtxCardsModule,
    NtxDragAndDropModule,
    DragAndDropRoutingModule,
    MatExpansionModule
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class DragAndDropModule { }
