import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { IconsPageRoutingModule } from './icons-page-routing.module';
import { IconsPageComponent } from './icons-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IconsPageRoutingModule
  ],
  declarations: [IconsPageComponent]
})
export class IconsPageModule { }
