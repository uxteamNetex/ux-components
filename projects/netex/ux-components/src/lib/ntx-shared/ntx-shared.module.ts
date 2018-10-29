import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
   MatButtonModule,
   MatIconModule,
   MatListModule,
   MatSidenavModule,
   MatToolbarModule,
   MatMenuModule,
   MatTabsModule,
   MatBadgeModule,
   MatCardModule
 } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule
  ],
  declarations: [],
  exports: [
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule
  ]
})
export class NtxSharedModule { }
