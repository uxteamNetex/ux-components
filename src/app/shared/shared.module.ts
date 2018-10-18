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
  ]
})
export class SharedModule { }
