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
import { List2Component } from './list2/list2.component';
import { ListSidemenuComponent } from './list-sidemenu/list-sidemenu.component';
import { NtxFormsModule } from '../ntx-forms/ntx-forms.module';
import { List3Component } from './list3/list3.component';
import { List4Component } from './list4/list4.component';
import { List5Component } from './list5/list5.component';
import { List6Component } from './list6/list6.component';
import { List7Component } from './list7/list7.component';
import { List8Component } from './list8/list8.component';
import { List9Component } from './list9/list9.component';
import { List10Component } from './list10/list10.component';
import { List10DarkComponent } from './list10-dark/list10-dark.component';
import { List11Component } from './list11/list11.component';

@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxProgressBarModule,
		NtxMenusModule,
		NtxListsRoutingModule,
		NtxButtonsModule,
		NtxFormsModule
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
		List1Component,
		List2Component,
		ListSidemenuComponent,
		List3Component,
		List4Component,
		List5Component,
		List6Component,
		List7Component,
		List8Component,
		List9Component,
		List10Component,
		List10DarkComponent,
		List11Component
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
		List1Component,
		List2Component,
		List3Component,
		List4Component,
		List5Component,
		List6Component,
		List7Component,
		List8Component,
		List9Component,
		List10Component,
    List10DarkComponent,
    List11Component,
		ListSidemenuComponent
	]
})
export class NtxListsModule { }
