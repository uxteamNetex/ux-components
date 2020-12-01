import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatTableModule, MatIconModule, MatGridListModule } from '@angular/material';

import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { NtxCardsModule, NtxTablesModule, NtxChipsModule, NtxButtonsModule, NtxListsModule, NtxFormsModule, NtxMenusModule, NtxLabelsModule } from '@netex/ux-components';
import { Version4XXRoutingModule } from './version4XX-routing.module';

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
		NtxButtonsModule
	]
})
export class Version4XXModule { }
