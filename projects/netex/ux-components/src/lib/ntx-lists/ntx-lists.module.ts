import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxListsRoutingModule } from './ntx-lists-routing.module';
import { ListTwoLinesAvatarComponent } from './list-two-lines-avatar/list-two-lines-avatar.component';
import { ListMultilinesIconComponent } from './list-multilines-icon/list-multilines-icon.component';
import { ListOneLineOptionsComponent } from './list-one-line-options/list-one-line-options.component';

import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { NtxProgressBarModule } from '../ntx-progress-bar/ntx-progress-bar.module';


@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxProgressBarModule,
    NtxMenusModule,
    NtxListsRoutingModule
  ],
  declarations: [
    ListTwoLinesAvatarComponent,
    ListMultilinesIconComponent,
    ListOneLineOptionsComponent
  ],
  exports: [
    ListTwoLinesAvatarComponent,
    ListMultilinesIconComponent,
    ListOneLineOptionsComponent
  ]
})
export class NtxListsModule { }
