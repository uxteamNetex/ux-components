import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxExpansionPanelsRoutingModule } from './ntx-expansion-panels-routing.module';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanel2Component } from './expansion-panel2/expansion-panel2.component';

@NgModule({
	declarations: [ExpansionPanelsComponent, ExpansionPanel2Component],
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxExpansionPanelsRoutingModule,
		MatExpansionModule
	],
	exports: [
		ExpansionPanelsComponent,
		ExpansionPanel2Component
	],
})
export class NtxExpansionPanelsModule { }
