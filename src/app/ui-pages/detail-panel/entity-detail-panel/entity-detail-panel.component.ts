import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PANEL_DATA, PanelService } from '../../../shared/services/panel.service';
import { EntityDetailPanelDataInterface } from './entity-detail-panel-data.interface';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-entity-detail-panel',
  templateUrl: './entity-detail-panel.component.html',
  styleUrls: ['./entity-detail-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntityDetailPanelComponent implements OnInit {

  width: string;

  constructor(
    @Inject(PANEL_DATA) private panelData: EntityDetailPanelDataInterface,
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
