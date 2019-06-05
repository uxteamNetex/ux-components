import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPanelRoutingModule } from './detail-panel-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { EntityDetailPanelComponent } from './entity-detail-panel/entity-detail-panel.component';

import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule
} from '@angular/material';

import {
  NtxCardsModule,
  NtxButtonsModule,
  NtxTabsModule
} from '@netex/ux-components';


@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent, EntityDetailPanelComponent],
  imports: [
    CommonModule,
    DetailPanelRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    NtxCardsModule,
    NtxButtonsModule,
    NtxTabsModule,
  ],
  entryComponents: [
    EntityDetailPanelComponent
  ]
})
export class DetailPanelModule { }
