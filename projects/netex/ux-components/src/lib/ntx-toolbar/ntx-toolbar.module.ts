import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarLogoComponent } from './toolbar-logo/toolbar-logo.component';
import { ToolbarTabsComponent } from './toolbar-tabs/toolbar-tabs.component';
import { ToolbarBackComponent } from './toolbar-back/toolbar-back.component';
import { ToolbarBackTabsComponent } from './toolbar-back-tabs/toolbar-back-tabs.component';

import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { NtxTabsModule } from '../ntx-tabs/ntx-tabs.module';


@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxMenusModule,
		NtxTabsModule
	],
	declarations: [
		ToolbarComponent,
		ToolbarLogoComponent,
		ToolbarTabsComponent,
		ToolbarBackComponent,
		ToolbarBackTabsComponent
	],
	exports: [
		ToolbarComponent,
		ToolbarLogoComponent,
		ToolbarTabsComponent,
		ToolbarBackComponent,
		ToolbarBackTabsComponent
	]
})
export class NtxToolbarModule { }
