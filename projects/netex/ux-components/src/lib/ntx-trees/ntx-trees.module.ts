import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxTreesRoutingModule } from './ntx-trees-routing.module';
import { TreeComponent } from './tree/tree.component';
import { TreeWithChecksComponent } from './tree-with-checks/tree-with-checks.component';

import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';

@NgModule({
  imports: [
    CommonModule,
    NtxTreesRoutingModule,
    NtxSharedModule,
    NtxMenusModule
  ],
  declarations: [TreeComponent, TreeWithChecksComponent],
  exports: [TreeComponent, TreeWithChecksComponent]
})
export class NtxTreesModule { }
