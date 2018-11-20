import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxDialogsRoutingModule } from './ntx-dialogs-routing.module';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { SimpleDialogContentComponent } from './simple-dialog-content/simple-dialog-content.component';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { WarningDialogContentComponent } from './warning-dialog-content/warning-dialog-content.component';
import { ProccessDialogComponent } from './proccess-dialog/proccess-dialog.component';
import { ProccessDialogContentComponent } from './proccess-dialog-content/proccess-dialog-content.component';

import { NtxFormsModule } from '../ntx-forms/ntx-forms.module';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxDialogsRoutingModule,
    NtxFormsModule
  ],
  declarations: [
    SimpleDialogComponent,
    SimpleDialogContentComponent,
    WarningDialogComponent,
    WarningDialogContentComponent,
    ProccessDialogComponent,
    ProccessDialogContentComponent
  ],
  entryComponents: [
    SimpleDialogContentComponent,
    WarningDialogContentComponent,
    ProccessDialogContentComponent
  ],
  exports: [
    SimpleDialogComponent,
    SimpleDialogContentComponent,
    WarningDialogComponent,
    WarningDialogContentComponent,
    ProccessDialogComponent,
    ProccessDialogContentComponent
  ]
})
export class NtxDialogsModule { }
