import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxFormsRoutingModule } from './ntx-forms-routing.module';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadiobuttonComponent } from './form-radiobutton/form-radiobutton.component';
import { FormSlidetoggleComponent } from './form-slidetoggle/form-slidetoggle.component';

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
    FormDatepickerComponent,
    FormCheckboxComponent,
    FormRadiobuttonComponent,
    FormSlidetoggleComponent
  ],
  entryComponents: [
    FormInputComponent,
    FormDatepickerComponent
  ],
  exports: [
    FormInputComponent,
    FormTextareaComponent,
    FormDatepickerComponent,
    FormCheckboxComponent,
    FormRadiobuttonComponent,
    FormSlidetoggleComponent
  ]
})
export class NtxFormsModule { }
