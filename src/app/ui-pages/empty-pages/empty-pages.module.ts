import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyPagesRoutingModule } from './empty-pages-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { MatExpansionModule } from '@angular/material';

import {
	NtxEmptyPagesModule
} from '@netex/ux-components';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		EmptyPagesRoutingModule,
		NtxEmptyPagesModule,
		MatExpansionModule
	]
})
export class EmptyPagesModule { }
