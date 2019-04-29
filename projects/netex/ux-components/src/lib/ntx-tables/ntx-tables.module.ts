import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { BasicTableComponent } from './basic-table/basic-table.component';
import { EvaluationTableComponent } from './evaluation-table/evaluation-table.component';
import { NtxTablesRoutingModule } from './ntx-tables-routing.module';
import { SelectableTableComponent } from './selectable-table/selectable-table.component';

import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';
import { NtxLabelsModule } from '../ntx-labels/ntx-labels.module';
import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { EvaluationMultiSelectOptionsComponent } from './evaluation-multi-select-options/evaluation-multi-select-options.component';
import { MultiSelectOptionsComponent } from './multi-select-options/multi-select-options.component';


@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxTablesRoutingModule,
		NtxMenusModule,
		FormsModule,
		NtxLabelsModule,
		NtxButtonsModule
	],
	declarations: [
		BasicTableComponent,
		SelectableTableComponent,
		MultiSelectOptionsComponent,
		EvaluationTableComponent,
		EvaluationMultiSelectOptionsComponent
	],
	exports: [
		BasicTableComponent,
		SelectableTableComponent,
		MultiSelectOptionsComponent,
		EvaluationTableComponent,
		EvaluationMultiSelectOptionsComponent
	]
})
export class NtxTablesModule { }
