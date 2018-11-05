import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

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
export class PaddingsRoutingModule { }
