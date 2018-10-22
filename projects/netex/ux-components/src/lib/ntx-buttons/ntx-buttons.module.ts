import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxButtonsRoutingModule } from './ntx-buttons-routing.module';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { TextButtonComponent } from './text-button/text-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { MiniFabButtonComponent } from './mini-fab-button/mini-fab-button.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxButtonsRoutingModule
  ],
  declarations: [
    RaisedButtonComponent,
    TextButtonComponent,
    IconButtonComponent,
    FabButtonComponent,
    MiniFabButtonComponent
  ],
  exports: [
    RaisedButtonComponent,
    TextButtonComponent,
    IconButtonComponent,
    FabButtonComponent,
    MiniFabButtonComponent
  ]
})
export class NtxButtonsModule { }
