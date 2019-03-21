import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxErrorPagesModule
} from '@netex/ux-components';

import { ErrorPage403RoutingModule } from './error-page-403-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    ErrorPage403RoutingModule,
    NtxErrorPagesModule
  ]
})
export class ErrorPage403Module { }
