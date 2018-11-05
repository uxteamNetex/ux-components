import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NtxCardsModule,
  NtxListsModule
} from '@netex/ux-components';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsDocComponent } from './documentation/lists-doc.component';
import { ListsExamplesComponent } from './examples/lists-examples.component';


@NgModule({
  imports: [
    CommonModule,
    ListsRoutingModule,
    NtxCardsModule,
    NtxListsModule
  ],
  declarations: [
    ListsExamplesComponent,
    ListsDocComponent
  ]
})
export class ListsModule { }
