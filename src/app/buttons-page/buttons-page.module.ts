import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ButtonsPageRoutingModule } from './buttons-page-routing.module';
import { ButtonsPageComponent } from './buttons-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ButtonsPageRoutingModule
  ],
  declarations: [ButtonsPageComponent]
})
export class ButtonsPageModule { }
