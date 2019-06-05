import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { VersionxxxRoutingModule } from './versionxxx-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { EntityDetailPanelComponent } from './../detail-panel/entity-detail-panel/entity-detail-panel.component';

import {
  MatTableModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule
} from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';

import {
  NtxCardsModule,
  NtxListsModule,
  NtxFormsModule,
  NtxTreesModule,
  NtxLabelsModule,
  NtxChipsModule,
  NtxButtonsModule,
  NtxTabsModule
} from '@netex/ux-components';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent, EntityDetailPanelComponent],
  imports: [
    CommonModule,
    VersionxxxRoutingModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    NtxCardsModule,
    NtxListsModule,
    NtxFormsModule,
    NtxTreesModule,
    NtxLabelsModule,
    NtxChipsModule,
    NtxButtonsModule,
    NtxTabsModule
  ],
  entryComponents: [
    EntityDetailPanelComponent
  ]
})
export class VersionxxxModule { }
