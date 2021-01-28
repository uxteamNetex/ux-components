import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatTableModule, MatIconModule, MatGridListModule } from '@angular/material';

import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { NtxCardsModule, NtxTablesModule, NtxChipsModule, NtxButtonsModule, NtxListsModule, NtxFormsModule, NtxMenusModule, NtxLabelsModule, NtxDragAndDropModule } from '@netex/ux-components';
import { Version4XXRoutingModule } from './version4XX-routing.module';
import { NtxToolbarModule } from 'projects/netex/ux-components/src/public_api';
import { DragAndDropAddedComponent } from 'projects/netex/ux-components/src/lib/ntx-drag-and-drop/drag-and-drop-added/drag-and-drop-added.component';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		Version4XXRoutingModule,
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
		NtxDragAndDropModule
	]
})
export class Version4XXModule { }
