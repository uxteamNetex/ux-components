import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxErrorPagesModule
} from '@netex/ux-components';

import { ErrorPage404RoutingModule } from './error-page-404-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    ErrorPage404RoutingModule,
    NtxErrorPagesModule
  ]
})
export class ErrorPage404Module { }
