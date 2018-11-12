import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxDialogsModule,
  NtxCardsModule,
  NtxButtonsModule
} from '@netex/ux-components';

import { DialogsRoutingModule } from './dialogs-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule,
    NtxDialogsModule,
    NtxCardsModule,
    NtxButtonsModule,
    DialogsRoutingModule
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class DialogsModule { }
