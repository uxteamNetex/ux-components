import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnackbarsDocComponent } from './documentation/snackbars-doc.component';
import { SnackbarsExamplesComponent } from './examples/snackbars-examples.component';

const routes: Routes = [
  {
      path: 'examples',
      component: SnackbarsExamplesComponent
  },
  {
      path: 'documentation',
      component: SnackbarsDocComponent
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
export class SnackbarsRoutingModule {}
