import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PANEL_DATA, PanelService } from '../../../shared/services/panel.service';
import { UserProfileDataInterface } from './user-profile-data.interface';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit, OnDestroy {

  width: string;

  constructor(
    @Inject(PANEL_DATA) private panelData: UserProfileDataInterface,
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
