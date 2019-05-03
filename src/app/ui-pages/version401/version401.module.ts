import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MatTableModule, MatIconModule, MatGridListModule } from '@angular/material';

import {
  NtxCardsModule,
  NtxChipsModule,
  NtxProgressSpinnerModule,
  NtxTablesModule,
  NtxFormsModule,
  NtxLabelsModule
} from '@netex/ux-components';

import { Version401RoutingModule } from './version401-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    Version401RoutingModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    NtxCardsModule,
    NtxChipsModule,
    NtxProgressSpinnerModule,
    NtxTablesModule,
    NtxFormsModule,
    NtxLabelsModule
  ]
})
export class Version401Module { }
