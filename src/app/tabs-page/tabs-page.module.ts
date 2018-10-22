import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { TabsPageComponent } from './tabs-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPageComponent]
})
export class TabsPageModule { }
