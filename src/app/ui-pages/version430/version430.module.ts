import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatTableModule, MatIconModule, MatGridListModule } from '@angular/material';

import {
	NtxCardsModule,
	NtxButtonsModule,
	NtxListsModule,
	NtxTablesModule
} from '@netex/ux-components';

import { Version430RoutingModule } from './version430-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { NtxToolbarModule, NtxMenusModule, NtxFormsModule, NtxProgressBarModule } from 'projects/netex/ux-components/src/public_api';
import { NtxPaginatorModule } from 'projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.module';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    Version430RoutingModule,
    MatTableModule,
		MatIconModule,
		MatGridListModule,
		MatExpansionModule,
		NtxCardsModule,
		NtxButtonsModule,
		NtxListsModule,
		NtxTablesModule,
		NtxToolbarModule,
		NtxMenusModule,
		NtxFormsModule,
		NtxPaginatorModule,
		NtxProgressBarModule
  ]
})
export class Version430Module { }
