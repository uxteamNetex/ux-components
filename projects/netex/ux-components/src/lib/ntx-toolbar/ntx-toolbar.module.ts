import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarLogoComponent } from './toolbar-logo/toolbar-logo.component';
import { ToolbarTabsComponent } from './toolbar-tabs/toolbar-tabs.component';

import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { NtxTabsModule } from '../ntx-tabs/ntx-tabs.module';
import { ToolbarBackComponent } from './toolbar-back/toolbar-back.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxMenusModule,
    NtxTabsModule
  ],
  declarations: [
    ToolbarComponent,
    ToolbarLogoComponent,
    ToolbarTabsComponent,
    ToolbarBackComponent
  ],
  exports: [
    ToolbarComponent,
    ToolbarLogoComponent,
    ToolbarTabsComponent,
    ToolbarBackComponent
  ]
})
export class NtxToolbarModule { }
