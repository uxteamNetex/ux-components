import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '@angular/cdk/portal';

import {
  MatButtonModule
} from '@angular/material';

import {
  NtxMatDummyModule,
  NtxSidenavModule,
  NtxToolbarModule,
  NtxButtonsModule,
  NtxMenusModule,
  NtxTabsModule,
  NtxListsModule
} from '@netex/ux-components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    PortalModule,
    MatButtonModule,
    NtxMatDummyModule,
    NtxSidenavModule,
    NtxToolbarModule,
    NtxButtonsModule,
    NtxMenusModule,
    NtxTabsModule,
    NtxListsModule
  ]
})
export class SharedModule { }
