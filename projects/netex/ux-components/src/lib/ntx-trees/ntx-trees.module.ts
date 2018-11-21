import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxTreesRoutingModule } from './ntx-trees-routing.module';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  imports: [
    CommonModule,
    NtxTreesRoutingModule,
    NtxSharedModule
  ],
  declarations: [TreeComponent],
  exports: [TreeComponent]
})
export class NtxTreesModule { }
