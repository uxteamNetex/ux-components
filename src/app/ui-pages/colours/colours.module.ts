import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MatTableModule } from '@angular/material';

import {
  NtxCardsModule
} from '@netex/ux-components';

import {
  MatGridListModule
} from '@angular/material';

import { ColoursRoutingModule } from './colours-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    ColoursRoutingModule,
    MatTableModule,
    NtxCardsModule,
    MatGridListModule
  ],
  exports: [
    MatGridListModule
  ]
})
export class ColoursModule { }
