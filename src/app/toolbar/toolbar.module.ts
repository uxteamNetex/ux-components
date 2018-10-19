import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    ToolbarRoutingModule
  ],
  declarations: [ToolbarComponent]
})
export class ToolbarModule { }
