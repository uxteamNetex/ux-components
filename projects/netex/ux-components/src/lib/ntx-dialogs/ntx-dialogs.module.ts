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
import { NtxLabelsModule } from '../ntx-labels/ntx-labels.module';
import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { ProfileDialogContentComponent } from './profile-dialog-content/profile-dialog-content.component';

@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxDialogsRoutingModule,
		NtxFormsModule,
		NtxLabelsModule,
		NtxButtonsModule
	],
	declarations: [
		SimpleDialogComponent,
		SimpleDialogContentComponent,
		WarningDialogComponent,
		WarningDialogContentComponent,
		ProccessDialogComponent,
		ProccessDialogContentComponent,
		ProfileDialogComponent,
		ProfileDialogContentComponent
	],
	entryComponents: [
		SimpleDialogContentComponent,
		WarningDialogContentComponent,
		ProccessDialogContentComponent,
		ProfileDialogContentComponent
	],
	exports: [
		SimpleDialogComponent,
		SimpleDialogContentComponent,
		WarningDialogComponent,
		WarningDialogContentComponent,
		ProccessDialogComponent,
		ProccessDialogContentComponent,
		ProfileDialogComponent,
		ProfileDialogContentComponent
	]
})
export class NtxDialogsModule { }
