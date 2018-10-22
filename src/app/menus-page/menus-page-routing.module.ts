import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusPageComponent } from './menus-page.component';

const routes: Routes = [
  {
    path: '',
    component: MenusPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusPageRoutingModule { }
