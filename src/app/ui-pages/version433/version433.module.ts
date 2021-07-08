import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatTableModule, MatIconModule, MatGridListModule } from '@angular/material';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { Version433RoutingModule } from './version433-routing.module';
import { NtxToolbarModule } from 'projects/netex/ux-components/src/public_api';
import {
	NtxCardsModule,
	NtxTablesModule,
	NtxChipsModule,
	NtxButtonsModule,
	NtxListsModule,
	NtxFormsModule,
	NtxMenusModule,
	NtxLabelsModule,
	NtxDragAndDropModule,
	NtxEmptyPagesModule,
	NtxDialogsModule,
	NtxProgressBarModule,
	NtxExpansionPanelsModule
} from '@netex/ux-components';


@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		Version433RoutingModule,
		MatIconModule,
		MatGridListModule,
		MatExpansionModule,
		NtxCardsModule,
		NtxListsModule,
		NtxLabelsModule,
		NtxTablesModule,
		NtxButtonsModule,
		NtxFormsModule,
		NtxMenusModule,
		NtxToolbarModule,
		NtxChipsModule,
		NtxDragAndDropModule,
		NtxEmptyPagesModule,
		NtxDialogsModule,
		NtxProgressBarModule,
		NtxExpansionPanelsModule
	]
})
export class Version433Module { }
