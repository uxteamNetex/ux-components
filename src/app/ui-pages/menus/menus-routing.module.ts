import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusDocComponent } from './documentation/menus-doc.component';
import { MenusExamplesComponent } from './examples/menus-examples.component';


const routes: Routes = [
  {
      path: 'examples',
      component: MenusExamplesComponent
  },
  {
      path: 'documentation',
      component: MenusDocComponent
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
export class MenusRoutingModule { }
