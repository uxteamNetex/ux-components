import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '../../../shared/services/sidenav.service';
import { PanelService } from '../../../shared/services/panel.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('menu') menuRef: MatSidenav;
  @ViewChild('panel') panelRef: MatSidenav;

  public panelWidth: string;
  
  constructor( 
    private sidenavService: SidenavService,
    private panelService: PanelService
  ) {}

  ngOnInit() {
    this.sidenavService.menu = this.menuRef;
    this.getPanelWidth();
    this.listenOnSidenavOpen();
    this.listenOnSidenavClose();
    this.listenOnMatSidenavCloseFinish();
  }

  getPanelWidth() {
    this.panelService.panelWidth$.subscribe((value: string) => {
      this.panelWidth = value;
    })
    console.log('sidenavWidth', this.panelWidth);
  }

  listenOnSidenavOpen() {
    this.panelService.open$.subscribe(() => this.panelRef.open());
  }

  listenOnSidenavClose() {
    this.panelService.close$.subscribe(() => this.panelRef.close());
  }

  listenOnMatSidenavCloseFinish() {
    this.panelRef.openedChange.subscribe(
      (status: boolean) => {
        if (!status) {
          this.panelService.detachComponent();
        }
      }
    );
  }

}
