import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { SidenavInsideComponent } from './sidenav-inside/sidenav-inside.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
  ],
  declarations: [
    SidenavContainerComponent,
    SidenavInsideComponent
  ],
  exports: [
    SidenavContainerComponent,
    SidenavInsideComponent
  ]
})
export class NtxSidenavModule { }
