import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxCommentsRoutingModule } from './ntx-comments-routing.module';
import { CommentDarkComponent } from './comment-dark/comment-dark.component';
import { NtxListsModule } from '../ntx-lists/ntx-lists.module';
import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';

@NgModule({
  declarations: [CommentDarkComponent],
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxCommentsRoutingModule,
    NtxListsModule,
    NtxButtonsModule
  ],
  exports: [
    CommentDarkComponent
  ]
})
export class NtxCommentsModule { }
