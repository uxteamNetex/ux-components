import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { SimpleAvatarComponent } from './simple-avatar/simple-avatar.component';

@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule
	],
	declarations: [
		SimpleAvatarComponent
	],
	exports: [
		SimpleAvatarComponent
	]
})
export class NtxAvatarsModule { }
