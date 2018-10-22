import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MenusPageRoutingModule } from './menus-page-routing.module';
import { MenusPageComponent } from './menus-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenusPageRoutingModule
  ],
  declarations: [MenusPageComponent]
})
export class MenusPageModule { }
