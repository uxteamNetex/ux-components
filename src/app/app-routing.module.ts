import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'toolbar',
    loadChildren: './toolbar/toolbar.module#ToolbarModule'
  },
  {
    path: 'buttons',
    loadChildren: './buttons-page/buttons-page.module#ButtonsPageModule'
  },
  {
    path: 'menus',
    loadChildren: './menus-page/menus-page.module#MenusPageModule'
  },
  {
    path: 'tabs',
    loadChildren: './tabs-page/tabs-page.module#TabsPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
