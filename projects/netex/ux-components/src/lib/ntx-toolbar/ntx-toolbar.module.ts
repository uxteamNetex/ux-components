import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarLogoComponent } from './toolbar-logo/toolbar-logo.component';
import { ToolbarTabsComponent } from './toolbar-tabs/toolbar-tabs.component';
import { ToolbarBackComponent } from './toolbar-back/toolbar-back.component';
import { ToolbarBackTabsComponent } from './toolbar-back-tabs/toolbar-back-tabs.component';

import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';
import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { NtxTabsModule } from '../ntx-tabs/ntx-tabs.module';
import { ToolbarSearchboxComponent } from './toolbar-searchbox/toolbar-searchbox.component';
import { NtxFormsModule } from '../ntx-forms/ntx-forms.module';
import { ToolbarAlertComponent } from './toolbar-alert/toolbar-alert.component';
import { ToolbarTabsOneLineComponent } from './toolbar-tabs-one-line/toolbar-tabs-one-line.component';
import { MainHeaderAppsComponent } from './main-header-apps/main-header-apps.component';
import { MainHeaderComponent } from './main-header/main-header.component';


@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxButtonsModule,
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
		ToolbarSearchboxComponent,
		ToolbarAlertComponent,
		ToolbarTabsOneLineComponent,
		MainHeaderAppsComponent,
		MainHeaderComponent
	],
	exports: [
		ToolbarComponent,
		ToolbarLogoComponent,
		ToolbarTabsComponent,
		ToolbarBackComponent,
		ToolbarBackTabsComponent,
		ToolbarSearchboxComponent,
		ToolbarAlertComponent,
		ToolbarTabsOneLineComponent,
		MainHeaderAppsComponent,
		MainHeaderComponent
	]
})
export class NtxToolbarModule { }
