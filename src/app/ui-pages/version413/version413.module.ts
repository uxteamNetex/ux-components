import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Version413RoutingModule } from './version413-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { EntityDetailPanelComponent } from '../detail-panel/entity-detail-panel/entity-detail-panel.component';

import {
	MatTableModule,
	MatIconModule,
	MatGridListModule,
	MatToolbarModule,
	MatButtonModule,
	MatDividerModule
} from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';

import {
	NtxCardsModule,
	NtxListsModule,
	NtxFormsModule,
	NtxTreesModule,
	NtxLabelsModule,
	NtxChipsModule,
	NtxButtonsModule,
	NtxTabsModule,
	NtxMenusModule,
	NtxDialogsModule
} from '@netex/ux-components';

@NgModule({
declarations: [DocumentationComponent, ExamplesComponent, EntityDetailPanelComponent],
	imports: [
		CommonModule,
		Version413RoutingModule,
		MatTableModule,
		MatIconModule,
		MatGridListModule,
		MatToolbarModule,
		MatButtonModule,
		MatDividerModule,
		MatExpansionModule,
		NtxCardsModule,
		NtxListsModule,
		NtxFormsModule,
		NtxTreesModule,
		NtxLabelsModule,
		NtxChipsModule,
		NtxButtonsModule,
		NtxTabsModule,
		NtxMenusModule,
		NtxDialogsModule
	],
	entryComponents: [
		EntityDetailPanelComponent
	]
})
export class Version413Module { }
