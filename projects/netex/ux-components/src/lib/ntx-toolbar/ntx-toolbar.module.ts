import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class NtxToolbarModule { }
