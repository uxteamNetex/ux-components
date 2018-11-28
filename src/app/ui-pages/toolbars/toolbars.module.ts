import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToolbarsDocComponent } from './documentation/toolbars-doc.component';
import { ToolbarsExamplesComponent } from './examples/toolbar-examples.component';
import { ToolbarsRoutingModule } from './toolbars-routing.module';

import {
  NtxToolbarModule,
  NtxMenusModule,
  NtxCardsModule,
  NtxListsModule
} from '@netex/ux-components';
@NgModule({
  imports: [
    CommonModule,
    NtxCardsModule,
    NtxMenusModule,
    NtxListsModule,
    NtxToolbarModule,
    ToolbarsRoutingModule
  ],
  declarations: [
      ToolbarsExamplesComponent,
      ToolbarsDocComponent
    ]
})
export class ToolbarsModule { }
