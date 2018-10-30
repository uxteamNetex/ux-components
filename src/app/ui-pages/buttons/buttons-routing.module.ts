import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsDocComponent } from './documentation/buttons-doc.component';
import { ButtonsExamplesComponent } from './examples/buttons-examples.component';

const routes: Routes = [
    {
        path: 'examples',
        component: ButtonsExamplesComponent
    },
    {
        path: 'documentation',
        component: ButtonsDocComponent
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
export class ButtonsRoutingModule {}
