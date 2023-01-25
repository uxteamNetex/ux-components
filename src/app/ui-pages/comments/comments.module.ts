import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
	NtxCommentsModule,
  NtxCardsModule,
  NtxButtonsModule,
  NtxFormsModule
} from '@netex/ux-components';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    NtxCommentsModule,
    NtxCardsModule,
    NtxButtonsModule,
    NtxFormsModule
  ]
})
export class CommentsModule { }
