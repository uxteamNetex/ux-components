import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxTablesRoutingModule } from './ntx-tables-routing.module';
import { BasicTableComponent } from './basic-table/basic-table.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxTablesRoutingModule
  ],
  declarations: [
    BasicTableComponent
  ],
  exports: [
    BasicTableComponent
  ]
})
export class NtxTablesModule { }
