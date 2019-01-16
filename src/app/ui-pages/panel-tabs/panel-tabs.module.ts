import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelTabsRoutingModule } from './panel-tabs-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { PanelTabsContentComponent } from './panel-tabs-content/panel-tabs-content.component';

import { MatIconModule, MatToolbarModule, MatButtonModule, MatDividerModule } from '@angular/material';

import {
  NtxCardsModule,
  NtxButtonsModule,
  NtxTabsModule
} from '@netex/ux-components';


@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent, PanelTabsContentComponent],
  imports: [
    CommonModule,
    PanelTabsRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    NtxCardsModule,
    NtxButtonsModule,
    NtxTabsModule,
  ],
  entryComponents: [
    PanelTabsContentComponent
  ]
})
export class PanelTabsModule { }
