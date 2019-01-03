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
    path: 'card1',
    loadChildren: './ui-pages/card1/card1.module#Card1Module'
  },
  {
    path: 'card2',
    loadChildren: './ui-pages/card2/card2.module#Card2Module'
  },
  {
    path: 'card3',
    loadChildren: './ui-pages/card3/card3.module#Card3Module'
  },
  {
    path: 'card4',
    loadChildren: './ui-pages/card4/card4.module#Card4Module'
  },
  {
    path: 'card5',
    loadChildren: './ui-pages/card5/card5.module#Card5Module'
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
    path: 'card10',
    loadChildren: './ui-pages/card10/card10.module#Card10Module'
  },
  {
    path: 'card11',
    loadChildren: './ui-pages/card11/card11.module#Card11Module'
  },
  {
    path: 'card12',
    loadChildren: './ui-pages/card12/card12.module#Card12Module'
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
    path: 'headings and texts',
    loadChildren: './ui-pages/headings-and-texts/headings-and-texts.module#HeadingsAndTextsModule'
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
    path: 'margins',
    loadChildren: './ui-pages/margins/margins.module#MarginsModule'
  },
  {
    path: 'menus',
    loadChildren: './ui-pages/menus/menus.module#MenusModule'
  },
  {
    path: 'paddings',
    loadChildren: './ui-pages/paddings/paddings.module#PaddingsModule'
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
    path: 'sidenavs',
    loadChildren: './ui-pages/sidenav/sidenav.module#SidenavModule'
  },
  {
    path: 'toolbars',
    loadChildren: './ui-pages/toolbars/toolbars.module#ToolbarsModule'
  },
  {
    path: 'table selectable',
    loadChildren: './ui-pages/table-selectable/table-selectable.module#TableSelectableModule'
  },
  {
    path: 'tabs',
    loadChildren: './ui-pages/tabs/tabs.module#TabsModule'
  },
  {
    path: 'tree',
    loadChildren: './ui-pages/trees/trees.module#TreesModule'
  },
  {
    path: 'tree check',
    loadChildren: './ui-pages/tree-check/tree-check.module#TreeCheckModule'
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

