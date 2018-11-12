import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxChipsRoutingModule } from './ntx-chips-routing.module';
import { BasicChipComponent } from './basic-chip/basic-chip.component';
import { CategoryChipComponent } from './category-chip/category-chip.component';
import { ImageChipComponent } from './image-chip/image-chip.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxChipsRoutingModule
  ],
  declarations: [
    BasicChipComponent,
    CategoryChipComponent,
    ImageChipComponent
  ],
  exports: [
    BasicChipComponent,
    CategoryChipComponent,
    ImageChipComponent
  ]
})
export class NtxChipsModule { }
