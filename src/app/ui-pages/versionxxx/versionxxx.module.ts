import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MatTableModule, MatIconModule, MatGridListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

import {
  NtxCardsModule,
  NtxListsModule,
  NtxFormsModule,
  NtxTreesModule,
  NtxLabelsModule,
  NtxChipsModule
} from '@netex/ux-components';

import { VersionxxxRoutingModule } from './versionxxx-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    VersionxxxRoutingModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    NtxCardsModule,
    NtxListsModule,
    NtxFormsModule,
    NtxTreesModule,
    NtxLabelsModule,
    NtxChipsModule
  ]
})
export class VersionxxxModule { }
