import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card11RoutingModule } from './card11-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
  NtxCardsModule
} from '@netex/ux-components';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    Card11RoutingModule,
    NtxCardsModule
  ]
})
export class Card11Module { }
