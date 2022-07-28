import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatIconModule, MatGridListModule } from '@angular/material';

import { Version440RoutingModule } from './version440-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import {
	NtxFormsModule,
	NtxListsModule,
	NtxTablesModule,
	NtxButtonsModule,
	NtxCardsModule,
	NtxChipsModule,
	NtxToolbarModule,
	NtxExpansionPanelsModule,
	NtxAvatarsModule
} from '@netex/ux-components';
import { NtxMenusModule } from 'projects/netex/ux-components/src/public_api';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		Version440RoutingModule,
		MatIconModule,
		MatGridListModule,
		MatExpansionModule,
		NtxButtonsModule,
		NtxCardsModule,
		NtxChipsModule,
		NtxExpansionPanelsModule,
		NtxMenusModule,
		NtxFormsModule,
		NtxListsModule,
		NtxTablesModule,
		NtxToolbarModule,
		NtxAvatarsModule
	]
})
export class Version440Module { }
