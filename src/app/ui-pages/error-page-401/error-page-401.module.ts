import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	NtxErrorPagesModule
} from '@netex/ux-components';

import { ErrorPage401RoutingModule } from './error-page-401-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
	declarations: [DocumentationComponent, ExamplesComponent],
	imports: [
		CommonModule,
		ErrorPage401RoutingModule,
		NtxErrorPagesModule
	]
})
export class ErrorPage401Module { }
