import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxFormsRoutingModule } from './ntx-forms-routing.module';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadiobuttonComponent } from './form-radiobutton/form-radiobutton.component';
import { FormSlidetoggleComponent } from './form-slidetoggle/form-slidetoggle.component';
import { FormCheckboxCircleComponent } from './form-checkbox-circle/form-checkbox-circle.component';
import { FormSliderComponent } from './form-slider/form-slider.component';
import { FormSelectComponent } from './form-select/form-select.component';

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
    FormSlidetoggleComponent,
    FormCheckboxCircleComponent,
    FormSliderComponent,
    FormSelectComponent
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
    FormSlidetoggleComponent,
    FormCheckboxCircleComponent,
    FormSliderComponent,
    FormSelectComponent
  ]
})
export class NtxFormsModule { }
