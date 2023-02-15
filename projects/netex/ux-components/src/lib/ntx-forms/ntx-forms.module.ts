import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxFormsRoutingModule } from './ntx-forms-routing.module';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { FormDatepickerRangeComponent } from './form-datepicker-range/form-datepicker-range.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadiobuttonComponent } from './form-radiobutton/form-radiobutton.component';
import { FormSlidetoggleComponent } from './form-slidetoggle/form-slidetoggle.component';
import { FormCheckboxCircleComponent } from './form-checkbox-circle/form-checkbox-circle.component';
import { FormSliderComponent } from './form-slider/form-slider.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormSelectButtonComponent } from './form-select-button/form-select-button.component';
import { FormSelectNoBorderComponent } from './form-select-no-border/form-select-no-border.component';
import { FormSelectBorderButtonComponent } from './form-select-border-button/form-select-border-button.component';
import { FormInputNoLabelComponent } from './form-input-no-label/form-input-no-label.component';
import { FormSearchboxComponent } from './form-searchbox/form-searchbox.component';
import { FormSearchboxBackgroundComponent } from './form-searchbox-background/form-searchbox-background.component';
import { FormSelectThinComponent } from './form-select-thin/form-select-thin.component';
import { FormInputAutocompleteComponent } from './form-input-autocomplete/form-input-autocomplete.component';
import { InputNoLabelComponent } from './input-no-label/input-no-label.component';
import { TextareaNoLabelComponent } from './textarea-no-label/textarea-no-label.component';
import { SearchboxFilterPanelComponent } from './searchbox-filter-panel/searchbox-filter-panel.component';
import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';
import { FormSelectMultipleComponent } from './form-select-multiple/form-select-multiple.component';
import { FormRadiobuttonDarkComponent } from './form-radiobutton-dark/form-radiobutton-dark.component';
import { FormTextareaDarkComponent } from './form-textarea-dark/form-textarea-dark.component';
import { FormSelectDarkComponent } from './form-select-dark/form-select-dark.component';
import { FormDatepickerDarkComponent } from './form-datepicker-dark/form-datepicker-dark.component';

@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxFormsRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatNativeDateModule,
		NtxButtonsModule
	],
	declarations: [
		FormInputComponent,
		FormTextareaComponent,
		TextareaNoLabelComponent,
		FormDatepickerComponent,
		FormDatepickerRangeComponent,
		FormCheckboxComponent,
		FormRadiobuttonComponent,
		FormSlidetoggleComponent,
		FormCheckboxCircleComponent,
		FormSliderComponent,
		FormSelectComponent,
		FormSelectButtonComponent,
		FormSelectNoBorderComponent,
		FormSelectBorderButtonComponent,
		FormInputNoLabelComponent,
		InputNoLabelComponent,
		FormSearchboxComponent,
		FormSearchboxBackgroundComponent,
		FormSelectThinComponent,
		FormSelectMultipleComponent,
		FormInputAutocompleteComponent,
		SearchboxFilterPanelComponent,
		FormRadiobuttonDarkComponent,
		FormTextareaDarkComponent,
		FormSelectDarkComponent,
		FormDatepickerDarkComponent
	],
	entryComponents: [
		FormInputComponent,
		FormDatepickerComponent
	],
	exports: [
		FormInputComponent,
		FormTextareaComponent,
		TextareaNoLabelComponent,
		FormDatepickerComponent,
		FormDatepickerRangeComponent,
		FormCheckboxComponent,
		FormRadiobuttonComponent,
		FormSlidetoggleComponent,
		FormCheckboxCircleComponent,
		FormSliderComponent,
		FormSelectComponent,
		FormSelectButtonComponent,
		FormSelectNoBorderComponent,
		FormSelectBorderButtonComponent,
		FormSelectMultipleComponent,
		FormInputNoLabelComponent,
		InputNoLabelComponent,
		FormSearchboxComponent,
		FormSearchboxBackgroundComponent,
		FormSelectThinComponent,
		FormInputAutocompleteComponent,
		SearchboxFilterPanelComponent,
    FormRadiobuttonDarkComponent,
    FormTextareaDarkComponent,
    FormSelectDarkComponent,
    FormDatepickerDarkComponent
	]
})
export class NtxFormsModule { }
