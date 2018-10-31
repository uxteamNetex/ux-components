import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortalModule } from '@angular/cdk/portal';

import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import {
  NtxSidenavModule,
  NtxToolbarModule,
  NtxButtonsModule,
  NtxMenusModule,
  NtxTabsModule,
  NtxListsModule,
  NtxHeadersModule,
  NtxCardsModule
} from '@netex/ux-components';

import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './header/tabs/tabs.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    AppRoutingModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
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
    NtxCardsModule
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
