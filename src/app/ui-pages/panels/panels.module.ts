import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelsDocComponent } from './documentation/panels-doc.component';
import { PanelsExamplesComponent } from './examples/panels-examples.component';
import { PanelsRoutingModule } from './panels-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatDividerModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    PanelsRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
      DummyComponent,
      PanelsDocComponent,
      PanelsExamplesComponent
  ],
  entryComponents: [
    DummyComponent
  ]
})
export class PanelsModule { }
