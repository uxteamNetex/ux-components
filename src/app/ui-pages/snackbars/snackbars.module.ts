import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SnackbarsRoutingModule } from './snackbars-routing.module';
import { MatExpansionModule } from '@angular/material';

import { SnackbarsExamplesComponent } from './examples/snackbars-examples.component';
import { CustomSnackBarComponent } from './examples/snackbars-examples.component';
import { SnackbarsDocComponent } from './documentation/snackbars-doc.component';
import { NtxCardsModule, NtxSnackbarsModule } from '@netex/ux-components';

@NgModule({
  imports: [
    CommonModule,
    SnackbarsRoutingModule,
    MatExpansionModule,
    NtxCardsModule,
    NtxSnackbarsModule
  ],
  declarations: [
    SnackbarsExamplesComponent,
    CustomSnackBarComponent,
    SnackbarsDocComponent
  ]
})
export class SnackbarsModule { }
