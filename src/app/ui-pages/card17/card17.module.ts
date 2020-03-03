import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatGridListModule, MatExpansionModule } from '@angular/material';
import { NtxCardsModule } from '@netex/ux-components';
import { DocumentationComponent } from '../card17/documentation/documentation.component';
import { ExamplesComponent } from '../card17/examples/examples.component';
import { Card17RoutingModule } from './card17-routing.module';
import { NtxTablesModule } from 'projects/netex/ux-components/src/public_api';

@NgModule({
	imports: [
		CommonModule,
		Card17RoutingModule,
		NtxCardsModule,
		MatGridListModule,
		MatExpansionModule,
		NtxTablesModule
	],
	declarations: [DocumentationComponent, ExamplesComponent],
})
export class Card17Module { }
