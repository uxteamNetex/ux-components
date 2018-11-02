import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NtxCardsModule,
  NtxMenusModule
} from '@netex/ux-components';

import { MenusDocComponent } from './documentation/menus-doc.component';
import { MenusExamplesComponent } from './examples/menus-examples.component';
import { MenusRoutingModule } from './menus-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NtxCardsModule,
    NtxMenusModule,
    MenusRoutingModule
  ],
  declarations: [
    MenusExamplesComponent,
    MenusDocComponent
  ]
})
export class MenusModule { }
