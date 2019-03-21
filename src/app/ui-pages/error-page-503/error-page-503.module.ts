import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxErrorPagesModule
} from '@netex/ux-components';

import { ErrorPage503RoutingModule } from './error-page-503-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    ErrorPage503RoutingModule,
    NtxErrorPagesModule
  ]
})
export class ErrorPage503Module { }
