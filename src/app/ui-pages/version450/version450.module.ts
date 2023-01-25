import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatIconModule, MatGridListModule } from '@angular/material';

import { Version450RoutingModule } from './version450-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import {
	NtxCardsModule,
  NtxButtonsModule,
  NtxFormsModule,
  NtxProgressBarModule,
  NtxListsModule,
  NtxCommentsModule
} from '@netex/ux-components';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    Version450RoutingModule,
    MatIconModule,
		MatGridListModule,
		MatExpansionModule,
    NtxCardsModule,
    NtxButtonsModule,
    NtxFormsModule,
    NtxProgressBarModule,
    NtxListsModule,
    NtxCommentsModule
  ]
})
export class Version450Module { }
