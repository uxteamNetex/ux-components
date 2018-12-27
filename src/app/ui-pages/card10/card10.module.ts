import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card10RoutingModule } from './card10-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
  NtxCardsModule
} from '@netex/ux-components';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    Card10RoutingModule,
    NtxCardsModule
  ]
})
export class Card10Module { }
