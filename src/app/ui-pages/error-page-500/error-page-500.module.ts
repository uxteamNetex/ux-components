import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxErrorPagesModule
} from '@netex/ux-components';

import { ErrorPage500RoutingModule } from './error-page-500-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    ErrorPage500RoutingModule,
    NtxErrorPagesModule
  ]
})
export class ErrorPage500Module { }
