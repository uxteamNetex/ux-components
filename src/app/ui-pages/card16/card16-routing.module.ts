import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from '../card16/documentation/documentation.component';
import { ExamplesComponent } from '../card16/examples/examples.component';

const routes: Routes = [
	{
		path: 'examples',
		component: ExamplesComponent
	},
	{
		path: 'documentation',
		component: DocumentationComponent
	},
	{
		path: '',
		redirectTo: 'examples',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Card16RoutingModule { }
