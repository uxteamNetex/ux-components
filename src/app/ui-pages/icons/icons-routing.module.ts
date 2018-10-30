import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsDocComponent } from './documentation/icons-doc.component';
import { IconsExamplesComponent } from './examples/icons-examples.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: 'examples',
      component: IconsExamplesComponent
  },
  {
      path: 'documentation',
      component: IconsDocComponent
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
export class IconsRoutingModule { }
