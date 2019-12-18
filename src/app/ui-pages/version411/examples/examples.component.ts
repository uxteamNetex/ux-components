import { Component, OnInit, ViewEncapsulation, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { TabsHeaderService } from 'src/app/shared/services/tabs-header.service';
import { PanelService } from '../../../shared/services/panel.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { EntityDetailPanelComponent } from '../../detail-panel/entity-detail-panel/entity-detail-panel.component';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

export interface PeriodicElement {
  screensize: string;
  containersize: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {screensize: '>1480px', containersize: '1240px'},
  {screensize: '1479px - 1280px', containersize: '900px'},
  {screensize: '1279px - 1024px', containersize: '768px'},
];

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

  apps: any[];

  displayedColumns: string[] = ['screensize', 'containersize'];
  dataSource = ELEMENT_DATA;

  selectedCardIndex: number;

  public panelWidths = [80];

  private entitydetailpanelComponent: ComponentRef<EntityDetailPanelComponent>;

  constructor(
    private tabsHeaderService: TabsHeaderService,
    private panelService: PanelService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.apps = this.dashboardService.getDashboardApps();
  }

  counter(i: number) {
    return new Array(i);
  }

  onRadiobuttonChange(event: MatRadioChange) {
    this.selectedCardIndex = event.value;
  }

  checkIfSelected(i: number) {
    return this.selectedCardIndex === i;
  }

  setPath(value: string) {
    this.tabsHeaderService.setPath(value);
  }

  onButtonClick(width: string) {
    this.panelService.panelWidth(width);
    const data = this.panelService.createData({ width: width });
    const portal = new ComponentPortal(EntityDetailPanelComponent, undefined, data);

    this.entitydetailpanelComponent = this.panelService.attachComponent(
      portal, this.componentFactoryResolver, this.injector);

    this.panelService.open();
  }

}
