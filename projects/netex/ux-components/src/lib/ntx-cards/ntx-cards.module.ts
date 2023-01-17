import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { CardSimpleComponent } from './card-simple/card-simple.component';
import { Card1Component } from './card1/card1.component';
import { Card10Component } from './card10/card10.component';
import { Card11Component } from './card11/card11.component';
import { Card12Component } from './card12/card12.component';
import { Card13Component } from './card13/card13.component';
import { Card14Component } from './card14/card14.component';
import { Card15Component } from './card15/card15.component';
import { Card16Component } from './card16/card16.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card7Component } from './card7/card7.component';
import { Card8Component } from './card8/card8.component';
import { Card9Component } from './card9/card9.component';
import { NtxCardsRoutingModule } from './ntx-cards-routing.module';

import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';
import { NtxFormsModule } from '../ntx-forms/ntx-forms.module';
import { NtxListsModule } from '../ntx-lists/ntx-lists.module';
import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { NtxProgressBarModule } from '../ntx-progress-bar/ntx-progress-bar.module';
import { Card17Component } from './card17/card17.component';
import { Card18Component } from './card18/card18.component';
import { Card19Component } from './card19/card19.component';
import { Card20Component } from './card20/card20.component';
import { Card21Component } from './card21/card21.component';
import { Card22Component } from './card22/card22.component';
import { Card23Component } from './card23/card23.component';
import { Card24Component } from './card24/card24.component';
import { Card25Component } from './card25/card25.component';


@NgModule({
	imports: [
		CommonModule,
		NtxSharedModule,
		NtxMenusModule,
		NtxFormsModule,
		NtxButtonsModule,
		NtxListsModule,
		NtxCardsRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		NtxProgressBarModule
	],
	declarations: [
		CardSimpleComponent,
		Card1Component,
		Card2Component,
		Card3Component,
		Card4Component,
		Card5Component,
		Card7Component,
		Card8Component,
		Card9Component,
		Card10Component,
		Card11Component,
		Card12Component,
		Card13Component,
		Card14Component,
		Card15Component,
		Card16Component,
		Card17Component,
		Card18Component,
		Card19Component,
		Card20Component,
		Card21Component,
		Card22Component,
		Card23Component,
		Card24Component,
		Card25Component
	],
	exports: [
		CardSimpleComponent,
		Card1Component,
		Card2Component,
		Card3Component,
		Card4Component,
		Card5Component,
		Card7Component,
		Card8Component,
		Card9Component,
		Card10Component,
		Card11Component,
		Card12Component,
		Card13Component,
		Card14Component,
		Card15Component,
		Card16Component,
		Card17Component,
		Card18Component,
		Card19Component,
		Card20Component,
		Card21Component,
		Card22Component,
		Card23Component,
		Card24Component,
    Card25Component
	]
})
export class NtxCardsModule { }
