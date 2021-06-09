import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxExpansionPanelsRoutingModule } from './ntx-expansion-panels-routing.module';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';

@NgModule({
	declarations: [ExpansionPanelsComponent],
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxExpansionPanelsRoutingModule
	],
	exports: [ExpansionPanelsComponent],
})
export class NtxExpansionPanelsModule { }
