import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxProgressBarRoutingModule } from './ntx-progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxProgressBarRoutingModule
  ],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent]
})
export class NtxProgressBarModule { }
