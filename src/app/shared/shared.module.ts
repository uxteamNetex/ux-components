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
  NtxTabsModule
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
    NtxTabsModule
  ]
})
export class SharedModule { }
