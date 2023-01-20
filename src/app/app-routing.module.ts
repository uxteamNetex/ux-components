import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomePageComponent
	},
	{
		path: 'avatars',
		loadChildren: './ui-pages/avatars/avatars.module#AvatarsModule'
	},
	{
		path: 'buttons',
		loadChildren: './ui-pages/buttons/buttons.module#ButtonsModule'
	},
	{
		path: 'cards-catalog',
		loadChildren: './ui-pages/cards-catalog/cards-catalog.module#CardsCatalogModule'
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
		path: 'card13',
		loadChildren: './ui-pages/card13/card13.module#Card13Module'
	},
	{
		path: 'card14',
		loadChildren: './ui-pages/card14/card14.module#Card14Module'
	},
	{
		path: 'card15',
		loadChildren: './ui-pages/card15/card15.module#Card15Module'
	},
	{
		path: 'card16',
		loadChildren: './ui-pages/card16/card16.module#Card16Module'
	},
	{
		path: 'card17',
		loadChildren: './ui-pages/card17/card17.module#Card17Module'
	},
	{
		path: 'card18',
		loadChildren: './ui-pages/card18/card18.module#Card18Module'
	},
	{
		path: 'card19',
		loadChildren: './ui-pages/card19/card19.module#Card19Module'
	},
	{
		path: 'card20',
		loadChildren: './ui-pages/card20/card20.module#Card20Module'
	},
	{
		path: 'card21',
		loadChildren: './ui-pages/card21/card21.module#Card21Module'
	},
	{
		path: 'card22',
		loadChildren: './ui-pages/card22/card22.module#Card22Module'
	},
	{
		path: 'card23',
		loadChildren: './ui-pages/card23/card23.module#Card23Module'
	},
	{
		path: 'card24',
		loadChildren: './ui-pages/card24/card24.module#Card24Module'
	},
  {
		path: 'card25',
		loadChildren: './ui-pages/card25/card25.module#Card25Module'
	},
  {
		path: 'card26',
		loadChildren: './ui-pages/card26/card26.module#Card26Module'
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
		path: 'colours',
		loadChildren: './ui-pages/colours/colours.module#ColoursModule'
	},
	{
		path: 'detail-panel',
		loadChildren: './ui-pages/detail-panel/detail-panel.module#DetailPanelModule'
	},
	{
		path: 'dialogs',
		loadChildren: './ui-pages/dialogs/dialogs.module#DialogsModule'
	},
	{
		path: 'drag-and-drop',
		loadChildren: './ui-pages/drag-and-drop/drag-and-drop.module#DragAndDropModule'
	},
	{
		path: 'empty-pages',
		loadChildren: './ui-pages/empty-pages/empty-pages.module#EmptyPagesModule'
	},
	{
		path: 'error-page-401',
		loadChildren: './ui-pages/error-page-401/error-page-401.module#ErrorPage401Module'
	},
	{
		path: 'error-page-403',
		loadChildren: './ui-pages/error-page-403/error-page-403.module#ErrorPage403Module'
	},
	{
		path: 'error-page-404',
		loadChildren: './ui-pages/error-page-404/error-page-404.module#ErrorPage404Module'
	},
	{
		path: 'error-page-500',
		loadChildren: './ui-pages/error-page-500/error-page-500.module#ErrorPage500Module'
	},
	{
		path: 'error-page-503',
		loadChildren: './ui-pages/error-page-503/error-page-503.module#ErrorPage503Module'
	},
	{
		path: 'expansion-panels',
		loadChildren: './ui-pages/expansion-panels/expansion-panels.module#ExpansionPanelsModule'
	},
	{
		path: 'form-controls',
		loadChildren: './ui-pages/forms/forms.module#FormsModule'
	},
	{
		path: 'headings-and-texts',
		loadChildren: './ui-pages/headings-and-texts/headings-and-texts.module#HeadingsAndTextsModule'
	},
	{
		path: 'icons',
		loadChildren: './ui-pages/icons/icons.module#IconsModule'
	},
	{
		path: 'images-slider',
		loadChildren: './ui-pages/images-slider/images-slider.module#ImagesSliderModule'
	},
	{
		path: 'labels',
		loadChildren: './ui-pages/labels/labels.module#LabelsModule'
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
		path: 'organisation-chart',
		loadChildren: './ui-pages/organisation-chart/organisation-chart.module#OrganisationChartModule'
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
		path: 'panel-tabs',
		loadChildren: './ui-pages/panel-tabs/panel-tabs.module#PanelTabsModule'
	},
	{
		path: 'paginator',
		loadChildren: './ui-pages/paginator/paginator.module#PaginatorModule'
	},
	{
		path: 'progress-bar',
		loadChildren: './ui-pages/progress-bar/progress-bar.module#ProgressBarModule'
	},
	{
		path: 'progress-bar-level',
		loadChildren: './ui-pages/progress-bar-level/progress-bar-level.module#ProgressBarLevelModule'
	},
	{
		path: 'progress-spinner',
		loadChildren: './ui-pages/progress-spinner/progress-spinner.module#ProgressSpinnerModule'
	},
	{
		path: 'sidenavs',
		loadChildren: './ui-pages/sidenav/sidenav.module#SidenavModule'
	},
	{
		path: 'snackbars',
		loadChildren: './ui-pages/snackbars/snackbars.module#SnackbarsModule'
	},
	{
		path: 'sidenav-filters',
		loadChildren: './ui-pages/sidenav-filters/sidenav-filters.module#SidenavFiltersModule'
	},
	{
		path: 'toolbars',
		loadChildren: './ui-pages/toolbars/toolbars.module#ToolbarsModule'
	},
	{
		path: 'table',
		loadChildren: './ui-pages/table/table.module#TableModule'
	},
	{
		path: 'table-evaluation',
		loadChildren: './ui-pages/table-evaluation/table-evaluation.module#TableEvaluationModule'
	},
	{
		path: 'table-selectable',
		loadChildren: './ui-pages/table-selectable/table-selectable.module#TableSelectableModule'
	},
	{
		path: 'tabs',
		loadChildren: './ui-pages/tabs/tabs.module#TabsModule'
	},
	{
		path: 'test',
		component: TestPageComponent
	},
	{
		path: 'tree',
		loadChildren: './ui-pages/trees/trees.module#TreesModule'
	},
	{
		path: 'tree-check',
		loadChildren: './ui-pages/tree-check/tree-check.module#TreeCheckModule'
	},
	{
		path: 'user-profile-panel',
		loadChildren: './ui-pages/user-profile-panel/user-profile-panel.module#UserProfilePanelModule'
	},
	{
		path: 'version401',
		loadChildren: './ui-pages/version401/version401.module#Version401Module'
	},
	{
		path: 'version410',
		loadChildren: './ui-pages/version410/version410.module#Version410Module'
	},
	{
		path: 'version411',
		loadChildren: './ui-pages/version411/version411.module#Version411Module'
	},
	{
		path: 'version412',
		loadChildren: './ui-pages/version412/version412.module#Version412Module'
	},
	{
		path: 'version413',
		loadChildren: './ui-pages/version413/version413.module#Version413Module'
	},
	{
		path: 'version420',
		loadChildren: './ui-pages/version420/version420.module#Version420Module'
	},
	{
		path: 'version430',
		loadChildren: './ui-pages/version430/version430.module#Version430Module'
	},
	{
		path: 'version431',
		loadChildren: './ui-pages/version431/version431.module#Version431Module'
	},
	{
		path: 'version432',
		loadChildren: './ui-pages/version432/version432.module#Version432Module'
	},
	{
		path: 'version433',
		loadChildren: './ui-pages/version433/version433.module#Version433Module'
	},
	{
		path: 'version440',
		loadChildren: './ui-pages/version440/version440.module#Version440Module'
	},
  {
		path: 'version450',
		loadChildren: './ui-pages/version450/version450.module#Version450Module'
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

