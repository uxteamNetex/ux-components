import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AvatarsRoutingModule } from './avatars-routing.module';
import { AvatarsDocComponent } from './documentation/avatars-doc.component';
import { AvatarsExamplesComponent } from './examples/avatars-examples.component';
import { MatExpansionModule, MatSlideToggleModule } from '@angular/material';

import {
  NtxAvatarsModule,
  NtxButtonsModule,
  NtxCardsModule
} from '@netex/ux-components';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NtxButtonsModule,
    NtxCardsModule,
    NtxAvatarsModule,
    AvatarsRoutingModule,
    MatExpansionModule,
    MatSlideToggleModule,
    FormsModule
  ],
  declarations: [
      AvatarsExamplesComponent,
      AvatarsDocComponent
    ]
})
export class AvatarsModule { }
