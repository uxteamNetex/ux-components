import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NtxCardsModule,
  NtxMenusModule,
  NtxListsModule
} from '@netex/ux-components';

import { MenusDocComponent } from './documentation/menus-doc.component';
import { MenusExamplesComponent } from './examples/menus-examples.component';
import { MenusRoutingModule } from './menus-routing.module';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NtxCardsModule,
    NtxMenusModule,
    NtxListsModule,
    MenusRoutingModule,
    MatExpansionModule
  ],
  declarations: [
    MenusExamplesComponent,
    MenusDocComponent
  ]
})
export class MenusModule { }
