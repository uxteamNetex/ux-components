import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatIconModule, MatGridListModule } from '@angular/material';

import { Version440RoutingModule } from './version440-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import {
	NtxCardsModule,
	NtxExpansionPanelsModule
} from '@netex/ux-components';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		Version440RoutingModule,
		MatIconModule,
		MatGridListModule,
		MatExpansionModule,
		NtxCardsModule,
		NtxExpansionPanelsModule
	]
})
export class Version440Module { }
