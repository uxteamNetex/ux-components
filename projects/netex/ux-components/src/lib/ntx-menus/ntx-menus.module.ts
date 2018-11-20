import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxMenusRoutingModule } from './ntx-menus-routing.module';
import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { MenuToolbarProfileComponent } from './menu-toolbar-profile/menu-toolbar-profile.component';

import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';


@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxMenusRoutingModule,
    NtxButtonsModule
  ],
  declarations: [
    MenuOptionsComponent,
    MenuToolbarProfileComponent
  ],
  exports: [
    MenuOptionsComponent,
    MenuToolbarProfileComponent
  ]
})
export class NtxMenusModule { }
