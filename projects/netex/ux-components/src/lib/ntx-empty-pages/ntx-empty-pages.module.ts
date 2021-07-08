import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxEmptyPagesRoutingModule } from './ntx-empty-pages-routing.module';
import { EmptyPageComponent } from './empty-page/empty-page.component';

import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';

@NgModule({
	declarations: [EmptyPageComponent],
	imports: [
		CommonModule,
		NtxEmptyPagesRoutingModule,
		NtxSharedModule,
		NtxButtonsModule
	],
	exports: [EmptyPageComponent]
})
export class NtxEmptyPagesModule { }
