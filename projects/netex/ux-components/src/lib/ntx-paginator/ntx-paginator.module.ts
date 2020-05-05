import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxPaginatorComponent } from './ntx-paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
	declarations: [NtxPaginatorComponent],
	imports: [
		CommonModule,
		MatPaginatorModule
	],
	exports: [
		NtxPaginatorComponent
	]
})
export class NtxPaginatorModule { }
