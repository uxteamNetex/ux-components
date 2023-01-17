import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';

import {
	NtxCardsModule,
	NtxMenusModule,
	NtxListsModule,
	NtxFormsModule,
	NtxButtonsModule
} from '@netex/ux-components';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsDocComponent } from './documentation/lists-doc.component';
import { ListsExamplesComponent } from './examples/lists-examples.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	imports: [
		CommonModule,
		ListsRoutingModule,
		FormsModule,
		NtxCardsModule,
		NtxMenusModule,
		NtxListsModule,
		MatExpansionModule,
		NtxFormsModule,
		NtxButtonsModule
	],
	declarations: [
		ListsExamplesComponent,
		ListsDocComponent
	]
})
export class ListsModule { }
