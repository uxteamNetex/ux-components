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
    path: 'chips',
    loadChildren: './ui-pages/chips/chips.module#ChipsModule'
  },
  {
    path: 'dialogs',
    loadChildren: './ui-pages/dialogs/dialogs.module#DialogsModule'
  },
  {
    path: 'forms',
    loadChildren: './ui-pages/forms/forms.module#FormsModule'
  },
  {
    path: 'panels',
    loadChildren: './ui-pages/panels/panels.module#PanelsModule'
  },
  {
    path: 'toolbars',
    loadChildren: './ui-pages/toolbars/toolbars.module#ToolbarsModule'
  },
  {
    path: 'icons',
    loadChildren: './ui-pages/icons/icons.module#IconsModule'
  },
  {
    path: 'cards',
    loadChildren: './ui-pages/cards/cards.module#CardsModule'
  },
  {
    path: 'lists',
    loadChildren: './ui-pages/lists/lists.module#ListsModule'
  },
  {
    path: 'tabs',
    loadChildren: './ui-pages/tabs/tabs.module#TabsModule'
  },
  {
    path: 'menus',
    loadChildren: './ui-pages/menus/menus.module#MenusModule'
  },
  {
    path: 'paddings',
    loadChildren: './ui-pages/paddings/paddings.module#PaddingsModule'
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

