import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxFormsRoutingModule } from './ntx-forms-routing.module';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxFormsRoutingModule
  ],
  declarations: [
    FormInputComponent
  ],
  exports: [
    FormInputComponent
  ]
})
export class NtxFormsModule { }
