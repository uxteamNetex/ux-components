import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorRoutingModule } from './paginator-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
	NtxCardsModule
} from '@netex/ux-components';
import { NtxPaginatorModule } from 'projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.module';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		PaginatorRoutingModule,
		NtxCardsModule,
		NtxPaginatorModule
	],
	exports: []
})
export class PaginatorModule { }
