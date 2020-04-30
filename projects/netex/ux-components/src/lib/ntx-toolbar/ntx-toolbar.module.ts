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
import { ToolbarSearchboxComponent } from './toolbar-searchbox/toolbar-searchbox.component';
import { NtxFormsModule } from '../ntx-forms/ntx-forms.module';


@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxMenusModule,
		NtxTabsModule,
		NtxFormsModule
	],
	declarations: [
		ToolbarComponent,
		ToolbarLogoComponent,
		ToolbarTabsComponent,
		ToolbarBackComponent,
		ToolbarBackTabsComponent,
		ToolbarSearchboxComponent
	],
	exports: [
		ToolbarComponent,
		ToolbarLogoComponent,
		ToolbarTabsComponent,
		ToolbarBackComponent,
		ToolbarBackTabsComponent,
		ToolbarSearchboxComponent
	]
})
export class NtxToolbarModule { }
