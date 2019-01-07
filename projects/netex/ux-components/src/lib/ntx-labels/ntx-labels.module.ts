import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxLabelsRoutingModule } from './ntx-labels-routing.module';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [LabelComponent],
  imports: [
    CommonModule,
    NtxLabelsRoutingModule,
    NtxSharedModule
  ],
  exports: [
    LabelComponent
  ]
})
export class NtxLabelsModule { }
