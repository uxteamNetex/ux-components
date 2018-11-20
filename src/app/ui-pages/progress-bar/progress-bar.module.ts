import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxProgressBarModule,
  NtxCardsModule
} from '@netex/ux-components';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule,
    NtxProgressBarModule,
    NtxCardsModule,
    ProgressBarRoutingModule
  ],
  declarations: [DocumentationComponent, ExamplesComponent]
})
export class ProgressBarModule { }
