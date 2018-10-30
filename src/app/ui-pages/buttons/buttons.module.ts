import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsDocComponent } from './documentation/buttons-doc.component';
import { ButtonsExamplesComponent } from './examples/buttons-examples.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ],
  declarations: [
      ButtonsExamplesComponent,
      ButtonsDocComponent
    ]
})
export class ButtonsModule { }
