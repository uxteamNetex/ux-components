import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxFormsRoutingModule } from './ntx-forms-routing.module';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  declarations: [
    FormInputComponent,
    FormTextareaComponent,
    FormDatepickerComponent
  ],
  entryComponents: [
    FormInputComponent,
    FormDatepickerComponent
  ],
  exports: [
    FormInputComponent,
    FormTextareaComponent,
    FormDatepickerComponent
  ]
})
export class NtxFormsModule { }
