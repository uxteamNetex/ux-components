import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsExamplesComponent } from './examples/lists-examples.component';
import { ListsDocComponent } from './documentation/lists-doc.component';

const routes: Routes = [
	{
			path: 'examples',
			component: ListsExamplesComponent
	},
	{
			path: 'documentation',
			component: ListsDocComponent
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
export class ListsRoutingModule { }
