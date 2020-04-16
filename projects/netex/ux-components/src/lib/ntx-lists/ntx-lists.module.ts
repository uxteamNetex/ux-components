import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxListsRoutingModule } from './ntx-lists-routing.module';
import { ListTwoLinesAvatarComponent } from './list-two-lines-avatar/list-two-lines-avatar.component';
import { ListMultilinesIconComponent } from './list-multilines-icon/list-multilines-icon.component';
import { ListOneLineOptionsComponent } from './list-one-line-options/list-one-line-options.component';
import { ListOneLineNavigableComponent } from './list-one-line-navigable/list-one-line-navigable.component';
import { ListHorizontalComponent } from './list-horizontal/list-horizontal.component';
import { ListOneLineAvatarComponent } from './list-one-line-avatar/list-one-line-avatar.component';
import { ListTwoLinesAvatarVerticalComponent } from './list-two-lines-avatar-vertical/list-two-lines-avatar-vertical.component';
import { ListHorizontalIconComponent } from './list-horizontal-icon/list-horizontal-icon.component';

import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';
import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { NtxProgressBarModule } from '../ntx-progress-bar/ntx-progress-bar.module';
import { ListOneLineComponent } from './list-one-line/list-one-line.component';
import { List1Component } from './list1/list1.component';

@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxProgressBarModule,
		NtxMenusModule,
		NtxListsRoutingModule,
		NtxButtonsModule
	],
	declarations: [
		ListTwoLinesAvatarComponent,
		ListMultilinesIconComponent,
		ListOneLineComponent,
		ListOneLineOptionsComponent,
		ListOneLineNavigableComponent,
		ListHorizontalComponent,
		ListOneLineAvatarComponent,
		ListTwoLinesAvatarVerticalComponent,
		ListHorizontalIconComponent,
		List1Component
	],
	exports: [
		ListTwoLinesAvatarComponent,
		ListMultilinesIconComponent,
		ListOneLineComponent,
		ListOneLineOptionsComponent,
		ListOneLineNavigableComponent,
		ListHorizontalComponent,
		ListOneLineAvatarComponent,
		ListTwoLinesAvatarVerticalComponent,
		ListHorizontalIconComponent,
		List1Component
	]
})
export class NtxListsModule { }
