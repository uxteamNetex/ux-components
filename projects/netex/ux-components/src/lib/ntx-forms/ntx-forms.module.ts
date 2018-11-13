import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxFormsRoutingModule } from './ntx-forms-routing.module';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormInputComponent
  ],
  entryComponents: [
    FormInputComponent
  ],
  exports: [
    FormInputComponent
  ]
})
export class NtxFormsModule { }
