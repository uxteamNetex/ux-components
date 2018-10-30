import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelsDocComponent } from './documentation/panels-doc.component';
import { PanelsExamplesComponent } from './examples/panels-examples.component';

const routes: Routes = [
    {
        path: 'examples',
        component: PanelsExamplesComponent
    },
    {
        path: 'documentation',
        component: PanelsDocComponent
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
export class PanelsRoutingModule {}
