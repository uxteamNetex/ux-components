import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxTabsRoutingModule } from './ntx-tabs-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { TabsNavigationComponent } from './tabs-navigation/tabs-navigation.component';
import { TabsDarkComponent } from './tabs-dark/tabs-dark.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxTabsRoutingModule
  ],
  declarations: [
    TabsComponent,
    TabsNavigationComponent,
    TabsDarkComponent
  ],
  exports: [
    TabsComponent,
    TabsNavigationComponent,
    TabsDarkComponent
  ]
})
export class NtxTabsModule { }
