import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxHeadersRoutingModule } from './ntx-headers-routing.module';
import { HeaderSidenavComponent } from './header-sidenav/header-sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule
  ],
  declarations: [
    HeaderSidenavComponent
  ],
  exports: [
    HeaderSidenavComponent
  ]
})
export class NtxHeadersModule { }
