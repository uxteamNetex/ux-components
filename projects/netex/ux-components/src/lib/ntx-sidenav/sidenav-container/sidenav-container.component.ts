import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NtxSidenavService } from '../ntx-sidenav.service';

@Component({
  selector: 'ntx-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss']
})
export class SidenavContainerComponent implements OnInit {

  @ViewChild('sidenav') sidenavRef: MatSidenav;

  constructor(
    private sidenavService: NtxSidenavService
  ) { }

  ngOnInit() {
    this.listenOnSidenavOpen();
    this.listenOnSidenavClose();
    this.listenOnMatSidenavCloseFinish();
  }

  listenOnSidenavOpen() {
    this.sidenavService.open$.subscribe(() => this.sidenavRef.open());
  }

  listenOnSidenavClose() {
    this.sidenavService.close$.subscribe(() => this.sidenavRef.close());
  }

  listenOnMatSidenavCloseFinish() {
    this.sidenavRef.openedChange.subscribe(
      (status: boolean) => {
        if (!status) {
          this.sidenavService.detachComponent();
        }
      }
    );
  }
}
