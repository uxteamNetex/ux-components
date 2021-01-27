import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxDragAndDropRoutingModule } from './ntx-drag-and-drop-routing.module';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragAndDropAddedComponent } from './drag-and-drop-added/drag-and-drop-added.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxDragAndDropRoutingModule
  ],
  declarations: [DragAndDropComponent, DragAndDropAddedComponent],
  exports: [DragAndDropComponent, DragAndDropAddedComponent]
})
export class NtxDragAndDropModule { }
