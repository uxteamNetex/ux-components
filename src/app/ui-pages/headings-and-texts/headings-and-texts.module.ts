import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MatTableModule } from '@angular/material';

import {
  NtxCardsModule
} from '@netex/ux-components';

import { HeadingsAndTextsRoutingModule } from './headings-and-texts-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule,
    HeadingsAndTextsRoutingModule,
    MatTableModule,
    NtxCardsModule
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class HeadingsAndTextsModule { }
