import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';

import { NtxErrorPagesRoutingModule } from './ntx-error-pages-routing.module';
import { Error404Component } from './error404/error404.component';
import { Error403Component } from './error403/error403.component';
import { Error503Component } from './error503/error503.component';
import { Error500Component } from './error500/error500.component';

@NgModule({
  declarations: [Error404Component, Error403Component, Error503Component, Error500Component],
  imports: [
    CommonModule,
    NtxErrorPagesRoutingModule,
    NtxSharedModule,
    NtxButtonsModule
  ],
  exports: [Error403Component, Error404Component, Error500Component, Error503Component]
})
export class NtxErrorPagesModule { }
