import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { FormsModule } from '@angular/forms';

import { NtxTablesRoutingModule } from './ntx-tables-routing.module';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { SelectableTableComponent } from './selectable-table/selectable-table.component';

import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { MultiSelectOptionsComponent } from './multi-select-options/multi-select-options.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxTablesRoutingModule,
    NtxMenusModule,
    FormsModule
  ],
  declarations: [
    BasicTableComponent,
    SelectableTableComponent,
    MultiSelectOptionsComponent
  ],
  exports: [
    BasicTableComponent,
    SelectableTableComponent,
    MultiSelectOptionsComponent
  ]
})
export class NtxTablesModule { }
