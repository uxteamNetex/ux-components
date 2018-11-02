import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsDocComponent } from './documentation/tabs-doc.component';
import { TabsExamplesComponent } from './examples/tabs-examples.component';

const routes: Routes = [
  {
      path: 'examples',
      component: TabsExamplesComponent
  },
  {
      path: 'documentation',
      component: TabsDocComponent
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
export class TabsRoutingModule { }
