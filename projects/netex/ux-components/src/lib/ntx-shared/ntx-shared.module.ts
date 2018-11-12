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
   MatCardModule,
   MatTableModule,
   MatChipsModule,
   MatDialogModule,
   MatInputModule
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
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule
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
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class NtxSharedModule { }
