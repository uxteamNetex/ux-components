import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { NtxSnackbarsRoutingModule } from './ntx-snackbars-routing.module';
import { SnackbarDarkComponent } from './snackbar-dark/snackbar-dark.component';


@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxSnackbarsRoutingModule
  ],
  declarations: [
    SnackbarComponent,
    SnackbarDarkComponent
  ],
  exports: [
    SnackbarComponent,
    SnackbarDarkComponent
   ]
})
export class NtxSnackbarsModule { }
