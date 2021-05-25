import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	NtxCardsModule,
	NtxImagesSliderModule,
} from '@netex/ux-components';

import { ImagesSliderRoutingModule } from './images-slider-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		ImagesSliderRoutingModule,
		NtxCardsModule,
		NtxImagesSliderModule,
		MatExpansionModule
	]
})
export class ImagesSliderModule { }
