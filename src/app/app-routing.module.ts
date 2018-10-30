import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'buttons',
    loadChildren: './ui-pages/buttons/buttons.module#ButtonsModule'
  },
  {
    path: 'panels',
    loadChildren: './ui-pages/panels/panels.module#PanelsModule'
  },
  {
    path: 'toolbars',
    loadChildren: './ui-pages/toolbars/toolbars.module#ToolbarsModule'
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

