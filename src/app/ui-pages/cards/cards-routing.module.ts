import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsExamplesComponent } from './examples/cards-examples.component';
import { CardsDocComponent } from './documentation/cards-doc.component';

const routes: Routes = [
    {
        path: 'examples',
        component: CardsExamplesComponent
    },
    {
        path: 'documentation',
        component: CardsDocComponent
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
export class CardsRoutingModule {}
