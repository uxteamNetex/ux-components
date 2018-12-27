import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PANEL_DATA, PanelService } from '../../../shared/services/panel.service';
import { PanelTabsDataInterface } from './panel-tabs-data.interface';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel-tabs',
  templateUrl: './panel-tabs.component.html',
  styleUrls: ['./panel-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelTabsComponent implements OnInit, OnDestroy {

  width: string;

  constructor(
    @Inject(PANEL_DATA) private panelData: PanelTabsDataInterface,
    private panelService: PanelService
  ) { }

  ngOnInit() {
    this.width = this.panelData.width;
  }

  onCloseSidenav() {
    this.panelService.close();
  }

  ngOnDestroy() {
  }

}
