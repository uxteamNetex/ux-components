import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarsDocComponent } from './documentation/toolbars-doc.component';
import { ToolbarsExamplesComponent } from './examples/toolbar-examples.component';

const routes: Routes = [
    {
        path: 'examples',
        component: ToolbarsExamplesComponent
    },
    {
        path: 'documentation',
        component: ToolbarsDocComponent
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
export class ToolbarsRoutingModule {}
