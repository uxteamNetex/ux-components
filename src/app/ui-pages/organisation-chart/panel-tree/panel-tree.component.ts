import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PANEL_DATA, PanelService } from '../../../shared/services/panel.service';
import { PanelTreeDataInterface } from './panel-tree-data.interface';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel-tree',
  templateUrl: './panel-tree.component.html',
  styleUrls: ['./panel-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelTreeComponent implements OnInit, OnDestroy {

  width: string;

  constructor(
    @Inject(PANEL_DATA) private panelData: PanelTreeDataInterface,
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
