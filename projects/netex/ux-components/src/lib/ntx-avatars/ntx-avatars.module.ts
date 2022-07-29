import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { SimpleAvatarComponent } from './simple-avatar/simple-avatar.component';
import { SocialAvatarComponent } from './social-avatar/social-avatar.component';
import { SocialAvatarBubbleComponent } from './social-avatar-bubble/social-avatar-bubble.component';


@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule
	],
	declarations: [
		SimpleAvatarComponent,
		SocialAvatarComponent,
		SocialAvatarBubbleComponent
	],
	exports: [
		SimpleAvatarComponent,
		SocialAvatarComponent,
		SocialAvatarBubbleComponent
	]
})
export class NtxAvatarsModule { }
