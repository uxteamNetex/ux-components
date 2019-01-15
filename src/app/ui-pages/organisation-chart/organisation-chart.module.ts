import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationChartRoutingModule } from './organisation-chart-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { PanelTreeComponent } from './panel-tree/panel-tree.component';

import { MatIconModule, MatToolbarModule, MatButtonModule, MatDividerModule } from '@angular/material';

import { DragScrollModule } from 'ngx-drag-scroll';

import {
  NtxCardsModule,
  NtxButtonsModule,
  NtxTabsModule
} from '@netex/ux-components';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent, PanelTreeComponent],
  imports: [
    CommonModule,
    OrganisationChartRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    NtxCardsModule,
    NtxButtonsModule,
    NtxTabsModule,
    DragScrollModule
  ],
  entryComponents: [
    PanelTreeComponent
  ]
})
export class OrganisationChartModule { }
