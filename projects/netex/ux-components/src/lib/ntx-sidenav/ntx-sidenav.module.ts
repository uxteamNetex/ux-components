import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { SidenavInsideComponent } from './sidenav-inside/sidenav-inside.component';
import { SidenavFiltersComponent } from './sidenav-filters/sidenav-filters.component';

import { NtxListsModule } from '../ntx-lists/ntx-lists.module';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxListsModule
  ],
  declarations: [
    SidenavContainerComponent,
    SidenavInsideComponent,
    SidenavFiltersComponent
  ],
  exports: [
    SidenavContainerComponent,
    SidenavInsideComponent,
    SidenavFiltersComponent
  ]
})
export class NtxSidenavModule { }
