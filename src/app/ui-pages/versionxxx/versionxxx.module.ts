import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatTableModule, MatIconModule, MatGridListModule } from '@angular/material';

import { VersionxxxRoutingModule } from './versionxxx-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { NtxCardsModule, NtxChipsModule, NtxButtonsModule, NtxListsModule, NtxFormsModule, NtxMenusModule } from '@netex/ux-components';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		VersionxxxRoutingModule,
		MatTableModule,
		MatIconModule,
		MatGridListModule,
		MatExpansionModule,
		NtxCardsModule,
		NtxButtonsModule,
		NtxListsModule,
		NtxChipsModule,
		NtxFormsModule,
		NtxMenusModule
	]
})
export class VersionxxxModule { }
