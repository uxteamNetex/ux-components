import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PANEL_DATA, PanelService } from '../../../shared/services/panel.service';
import { PanelTabsContentDataInterface } from './panel-tabs-content-data.interface';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel-tabs-content',
  templateUrl: './panel-tabs-content.component.html',
  styleUrls: ['./panel-tabs-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelTabsContentComponent implements OnInit, OnDestroy {

  width: string;

  constructor(
    @Inject(PANEL_DATA) private panelData: PanelTabsContentDataInterface,
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
