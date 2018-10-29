import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '@angular/cdk/portal';

import {
  MatButtonModule, MatToolbarModule, MatDividerModule, MatIconModule
} from '@angular/material';

import {
  NtxSidenavModule,
  NtxToolbarModule,
  NtxButtonsModule,
  NtxMenusModule,
  NtxTabsModule,
  NtxListsModule,
  NtxHeadersModule,
  NtxCardsModule
} from '@netex/ux-components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    PortalModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    NtxSidenavModule,
    NtxToolbarModule,
    NtxButtonsModule,
    NtxMenusModule,
    NtxTabsModule,
    NtxListsModule,
    NtxHeadersModule,
    NtxCardsModule
  ]
})
export class SharedModule { }
