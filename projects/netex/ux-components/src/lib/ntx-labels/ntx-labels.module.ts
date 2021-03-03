import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxLabelsRoutingModule } from './ntx-labels-routing.module';
import { LabelComponent } from './label/label.component';
import { LabelErrorComponent } from './label-error/label-error.component';
import { LabelRoundComponent } from './label-round/label-round.component';

@NgModule({
	declarations: [LabelComponent, LabelErrorComponent, LabelRoundComponent],
	imports: [
		CommonModule,
		NtxLabelsRoutingModule,
		NtxSharedModule
	],
	exports: [
		LabelComponent,
		LabelErrorComponent,
		LabelRoundComponent
	]
})
export class NtxLabelsModule { }
