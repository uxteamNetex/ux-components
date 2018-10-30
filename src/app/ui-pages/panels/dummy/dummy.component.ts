import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PANEL_DATA, PanelService } from '../../../shared/services/panel.service';
import { DummyDataInterface } from './dummy-data.interface';

@Component({
  selector: 'app-dummy-component',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit, OnDestroy {

  width: string;

  constructor(
    @Inject(PANEL_DATA) private panelData: DummyDataInterface,
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
