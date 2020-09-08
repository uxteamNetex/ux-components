import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DragScrollModule } from 'ngx-drag-scroll';

import { CustomBreakPointsProvider  } from './shared/custom-breakpoints/custom-breakpoints';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		TestPageComponent
	],
	imports: [
		BrowserAnimationsModule,
		HttpClientModule,
		CoreModule,
		SharedModule,
		AppRoutingModule,
		FlexLayoutModule.withConfig({disableDefaultBps: true}),
		DragScrollModule
	],
	providers: [
		CustomBreakPointsProvider,
		{provide: LocationStrategy, useClass: HashLocationStrategy}
	],
	bootstrap: [AppComponent],
	entryComponents: [
	]
})
export class AppModule { }
