import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PANEL_DATA, PanelService } from '../../../shared/services/panel.service';
import { PanelUserProfileDataInterface } from './panel-user-profile-data.interface';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel-user-profile',
  templateUrl: './panel-user-profile.component.html',
  styleUrls: ['./panel-user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelUserProfileComponent implements OnInit, OnDestroy {

  width: string;

  constructor(
    @Inject(PANEL_DATA) private panelData: PanelUserProfileDataInterface,
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
