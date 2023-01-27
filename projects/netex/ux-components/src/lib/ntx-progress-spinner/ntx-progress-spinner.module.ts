import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxProgressSpinnerRoutingModule } from './ntx-progress-spinner-routing.module';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';

@NgModule({
  declarations: [ProgressSpinnerComponent, ProgressCircleComponent],
  imports: [
    CommonModule,
    NtxProgressSpinnerRoutingModule,
    NtxSharedModule
  ],
  exports: [
    ProgressSpinnerComponent,
    ProgressCircleComponent
  ]
})
export class NtxProgressSpinnerModule { }
