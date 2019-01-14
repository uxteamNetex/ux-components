import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelsDocComponent } from './documentation/panels-doc.component';
import { PanelsExamplesComponent } from './examples/panels-examples.component';
import { PanelsRoutingModule } from './panels-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { PanelTabsComponent } from './panel-tabs/panel-tabs.component';
import { PanelUserProfileComponent } from './panel-user-profile/panel-user-profile.component';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatDividerModule } from '@angular/material';

import {
  NtxCardsModule,
  NtxButtonsModule,
  NtxTabsModule
} from '@netex/ux-components';



@NgModule({
  imports: [
    CommonModule,
    PanelsRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    NtxCardsModule,
    NtxButtonsModule,
    NtxTabsModule
  ],
  declarations: [
      DummyComponent,
      PanelsDocComponent,
      PanelsExamplesComponent,
      PanelTabsComponent,
      PanelUserProfileComponent
  ],
  entryComponents: [
    DummyComponent,
    PanelTabsComponent,
    PanelUserProfileComponent
  ]
})
export class PanelsModule { }
