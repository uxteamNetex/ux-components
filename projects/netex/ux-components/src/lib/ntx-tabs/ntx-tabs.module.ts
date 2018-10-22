import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxTabsRoutingModule } from './ntx-tabs-routing.module';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxTabsRoutingModule
  ],
  declarations: [
    TabsComponent
  ],
  exports: [
    TabsComponent
  ]
})
export class NtxTabsModule { }
