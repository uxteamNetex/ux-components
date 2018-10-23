import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxListsRoutingModule } from './ntx-lists-routing.module';
import { ListTwoLinesAvatarComponent } from './list-two-lines-avatar/list-two-lines-avatar.component';
import { ListMultilinesIconComponent } from './list-multilines-icon/list-multilines-icon.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxListsRoutingModule
  ],
  declarations: [
    ListTwoLinesAvatarComponent,
    ListMultilinesIconComponent
  ],
  exports: [
    ListTwoLinesAvatarComponent,
    ListMultilinesIconComponent
  ]
})
export class NtxListsModule { }
