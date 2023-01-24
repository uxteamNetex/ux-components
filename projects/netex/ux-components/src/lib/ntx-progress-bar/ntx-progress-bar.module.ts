import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxProgressBarRoutingModule } from './ntx-progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarLevelComponent } from './progress-bar-level/progress-bar-level.component';
import { ProgressBarDarkComponent } from './progress-bar-dark/progress-bar-dark.component';

@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxProgressBarRoutingModule
	],
	declarations: [
    ProgressBarComponent,
    ProgressBarLevelComponent,
    ProgressBarDarkComponent
  ],
	exports: [
    ProgressBarComponent,
    ProgressBarLevelComponent,
    ProgressBarDarkComponent
  ]
})
export class NtxProgressBarModule { }
