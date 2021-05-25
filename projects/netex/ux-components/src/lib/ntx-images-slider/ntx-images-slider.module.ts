import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxImagesSliderRoutingModule } from './ntx-images-slider-routing.module';
import { ImagesSliderComponent } from './images-slider/images-slider.component';

@NgModule({
	declarations: [ImagesSliderComponent],
	imports: [
		CommonModule,
		NtxImagesSliderRoutingModule,
		NtxSharedModule
	],
	exports: [
		ImagesSliderComponent
	]
})
export class NtxImagesSliderModule { }
