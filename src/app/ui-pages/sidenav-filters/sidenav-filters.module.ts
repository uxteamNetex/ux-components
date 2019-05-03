import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatDividerModule, MatExpansionModule } from '@angular/material';

import {
  NtxSidenavModule,
  NtxCardsModule,
  NtxButtonsModule
} from '@netex/ux-components';

import { SidenavFiltersRoutingModule } from './sidenav-filters-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    SidenavFiltersRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    NtxSidenavModule,
    NtxCardsModule,
    NtxButtonsModule
  ]
})
export class SidenavFiltersModule { }
