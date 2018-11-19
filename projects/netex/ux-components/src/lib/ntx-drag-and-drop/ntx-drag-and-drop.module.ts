import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxDragAndDropRoutingModule } from './ntx-drag-and-drop-routing.module';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxDragAndDropRoutingModule
  ],
  declarations: [DragAndDropComponent],
  exports: [DragAndDropComponent]
})
export class NtxDragAndDropModule { }
