import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfilePanelRoutingModule } from './user-profile-panel-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { MatIconModule, MatToolbarModule, MatButtonModule, MatDividerModule } from '@angular/material';

import {
  NtxCardsModule,
  NtxButtonsModule,
  NtxTabsModule
} from '@netex/ux-components';


@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserProfilePanelRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    NtxCardsModule,
    NtxButtonsModule,
    NtxTabsModule,
  ],
  entryComponents: [
    UserProfileComponent
  ]
})
export class UserProfilePanelModule { }
