import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxButtonsRoutingModule } from './ntx-buttons-routing.module';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { TextButtonComponent } from './text-button/text-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { MiniFabButtonComponent } from './mini-fab-button/mini-fab-button.component';
import { StrokedButtonComponent } from './stroked-button/stroked-button.component';
import { RaisedIconButtonComponent } from './raised-icon-button/raised-icon-button.component';
import { TextIconButtonComponent } from './text-icon-button/text-icon-button.component';
import { StrokedIconButtonComponent } from './stroked-icon-button/stroked-icon-button.component';
import { SquareButtonComponent } from './square-button/square-button.component';
import { FabSpeedDialButtonComponent } from './fab-speed-dial-button/fab-speed-dial-button.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { StrokedToggleButtonComponent } from './stroked-toggle-button/stroked-toggle-button.component';

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
    MiniFabButtonComponent,
    StrokedButtonComponent,
    RaisedIconButtonComponent,
    TextIconButtonComponent,
    StrokedIconButtonComponent,
    SquareButtonComponent,
    FabSpeedDialButtonComponent,
    LinkButtonComponent,
    StrokedToggleButtonComponent
  ],
  exports: [
    RaisedButtonComponent,
    TextButtonComponent,
    IconButtonComponent,
    FabButtonComponent,
    MiniFabButtonComponent,
    StrokedButtonComponent,
    RaisedIconButtonComponent,
    TextIconButtonComponent,
    StrokedIconButtonComponent,
    SquareButtonComponent,
    FabSpeedDialButtonComponent,
    LinkButtonComponent,
    StrokedToggleButtonComponent
  ]
})
export class NtxButtonsModule { }
