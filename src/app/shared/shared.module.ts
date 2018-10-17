import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '@angular/cdk/portal';
import {
  NtxMatDummyModule,
  NtxSidenavModule,
  NtxToolbarModule } from '@netex/ux-components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    PortalModule,
    NtxMatDummyModule,
    NtxSidenavModule,
    NtxToolbarModule
  ]
})
export class SharedModule { }
