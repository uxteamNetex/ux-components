import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
  ],
  declarations: [SidenavContainerComponent],
  exports: [
      SidenavContainerComponent
  ]
})
export class NtxSidenavModule { }
