import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NtxCardsModule,
  NtxTabsModule
} from '@netex/ux-components';

import { SharedModule } from '../../shared/shared.module';
import { TabsExamplesComponent } from './examples/tabs-examples.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsDocComponent } from './documentation/tabs-doc.component';

@NgModule({
  imports: [
    CommonModule,
    NtxCardsModule,
    NtxTabsModule,
    TabsRoutingModule
  ],
  declarations: [
    TabsExamplesComponent,
    TabsDocComponent
  ]
})
export class TabsModule { }
