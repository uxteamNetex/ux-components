import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarsDocComponent } from './documentation/avatars-doc.component';
import { AvatarsExamplesComponent } from './examples/avatars-examples.component';

const routes: Routes = [
  {
      path: 'examples',
      component: AvatarsExamplesComponent
  },
  {
      path: 'documentation',
      component: AvatarsDocComponent
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
export class AvatarsRoutingModule {}
