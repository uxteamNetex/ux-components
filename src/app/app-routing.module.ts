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
    path: 'card4',
    loadChildren: './ui-pages/card4/card4.module#Card4Module'
  },
  {
    path: 'card7',
    loadChildren: './ui-pages/card7/card7.module#Card7Module'
  },
  {
    path: 'card8',
    loadChildren: './ui-pages/card8/card8.module#Card8Module'
  },
  {
    path: 'card9',
    loadChildren: './ui-pages/card9/card9.module#Card9Module'
  },
  {
    path: 'cards',
    loadChildren: './ui-pages/cards/cards.module#CardsModule'
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
    path: 'drag and drop',
    loadChildren: './ui-pages/drag-and-drop/drag-and-drop.module#DragAndDropModule'
  },
  {
    path: 'form controls',
    loadChildren: './ui-pages/forms/forms.module#FormsModule'
  },
  {
    path: 'panels',
    loadChildren: './ui-pages/panels/panels.module#PanelsModule'
  },
  {
    path: 'progress bar',
    loadChildren: './ui-pages/progress-bar/progress-bar.module#ProgressBarModule'
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

