import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatIconModule, MatGridListModule } from '@angular/material';

import { Version440RoutingModule } from './version440-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import {
	NtxFormsModule,
	NtxButtonsModule,
	NtxCardsModule,
	NtxExpansionPanelsModule
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
		NtxExpansionPanelsModule,
		NtxMenusModule,
		NtxFormsModule
	]
})
export class Version440Module { }
