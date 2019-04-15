import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from '../card14/documentation/documentation.component';
import { ExamplesComponent } from '../card14/examples/examples.component';

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
export class Card14RoutingModule { }
