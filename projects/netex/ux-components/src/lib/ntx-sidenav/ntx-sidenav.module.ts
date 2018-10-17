import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NtxToolbarModule} from '../ntx-toolbar/ntx-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NtxToolbarModule
  ],
  declarations: [SidenavComponent],
  exports: [
      SidenavComponent
  ]
})
export class NtxSidenavModule { }
