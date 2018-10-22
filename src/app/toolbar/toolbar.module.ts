import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarRoutingModule
  ],
  declarations: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
