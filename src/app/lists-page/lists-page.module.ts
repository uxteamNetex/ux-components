import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ListsPageRoutingModule } from './lists-page-routing.module';
import { ListsPageComponent } from './lists-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ListsPageRoutingModule
  ],
  declarations: [ListsPageComponent]
})
export class ListsPageModule { }
