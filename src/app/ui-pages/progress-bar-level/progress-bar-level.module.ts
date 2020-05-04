import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	NtxProgressBarModule,
	NtxCardsModule
} from '@netex/ux-components';

import { ProgressBarLevelRoutingModule } from './progress-bar-level-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		NtxProgressBarModule,
		NtxCardsModule,
		ProgressBarLevelRoutingModule,
		MatExpansionModule
	],
	declarations: [DocumentationComponent, ExamplesComponent]
})
export class ProgressBarLevelModule { }
