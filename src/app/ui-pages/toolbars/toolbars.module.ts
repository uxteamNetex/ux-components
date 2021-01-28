import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';

import { ToolbarsDocComponent } from './documentation/toolbars-doc.component';
import { ToolbarsExamplesComponent } from './examples/toolbar-examples.component';
import { ToolbarsRoutingModule } from './toolbars-routing.module';

import {
  NtxToolbarModule,
  NtxMenusModule,
  NtxCardsModule,
  NtxListsModule,
  NtxFormsModule,
  NtxButtonsModule
} from '@netex/ux-components';
import { DummyFormComponent } from 'src/app/shared/dummy-components/dummy-form/dummy-form.component';

@NgModule({
  imports: [
    CommonModule,
    NtxCardsModule,
    NtxMenusModule,
    NtxListsModule,
    NtxToolbarModule,
    ToolbarsRoutingModule,
    NtxFormsModule,
    NtxButtonsModule,
    MatExpansionModule
  ],
  declarations: [
      ToolbarsExamplesComponent,
      ToolbarsDocComponent,
      DummyFormComponent
    ]
})
export class ToolbarsModule { }
