import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NtxChipsRoutingModule } from './ntx-chips-routing.module';
import { BasicChipComponent } from './basic-chip/basic-chip.component';
import { CategoryChipComponent } from './category-chip/category-chip.component';
import { ImageChipComponent } from './image-chip/image-chip.component';
import { FilterChipComponent } from './filter-chip/filter-chip.component';
import { ImageSubtitleChipComponent } from './image-subtitle-chip/image-subtitle-chip.component';
import { AutocompleteChipComponent } from './autocomplete-chip/autocomplete-chip.component';
import { IconChipComponent } from './icon-chip/icon-chip.component';

@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxChipsRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		BasicChipComponent,
		CategoryChipComponent,
		ImageChipComponent,
		FilterChipComponent,
		ImageSubtitleChipComponent,
		AutocompleteChipComponent,
		IconChipComponent
	],
	exports: [
		BasicChipComponent,
		CategoryChipComponent,
		ImageChipComponent,
		FilterChipComponent,
		ImageSubtitleChipComponent,
		AutocompleteChipComponent,
		IconChipComponent
	]
})
export class NtxChipsModule { }
