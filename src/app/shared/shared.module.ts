import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { PortalModule } from '@angular/cdk/portal';

import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTableModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule
} from '@angular/material';

import {
  NtxSidenavModule,
  NtxToolbarModule,
  NtxButtonsModule,
  NtxMenusModule,
  NtxTabsModule,
  NtxListsModule,
  NtxHeadersModule,
  NtxCardsModule,
  NtxTablesModule,
  NtxChipsModule,
  NtxDialogsModule,
  NtxFormsModule,
  NtxDragAndDropModule,
  NtxProgressBarModule,
  NtxTreesModule,
  NtxLabelsModule,
  NtxErrorPagesModule,
  NtxProgressSpinnerModule,
  NtxEmptyPagesModule
} from '@netex/ux-components';

import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './header/tabs/tabs.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DummyFormComponent } from './dummy-components/dummy-form/dummy-form.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatTabsModule,
    AppRoutingModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatTabsModule,
    PortalModule,
    HeaderComponent,
    SidebarComponent,
    NtxSidenavModule,
    NtxToolbarModule,
    NtxButtonsModule,
    NtxMenusModule,
    NtxTabsModule,
    NtxListsModule,
    NtxHeadersModule,
    NtxCardsModule,
    NtxTablesModule,
    NtxChipsModule,
    NtxDialogsModule,
    NtxFormsModule,
    NtxDragAndDropModule,
    NtxProgressBarModule,
    NtxTreesModule,
    MatGridListModule,
    LayoutModule,
    NtxLabelsModule,
    NtxErrorPagesModule,
    NtxProgressSpinnerModule,
    NtxEmptyPagesModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    TabsComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
