import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  //@ViewChild('sidenav') sidenavRef: MatSidenav;

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
    
  }

//  ngOnInit() {
//    this.listenOnSidenavOpen();
//    this.listenOnSidenavClose();
//    this.listenOnMatSidenavCloseFinish();
//  }
//
//  listenOnSidenavOpen() {
//    this.sidenavService.open$.subscribe(() => this.sidenavRef.open());
//  }
//
//  listenOnSidenavClose() {
//    this.sidenavService.close$.subscribe(() => this.sidenavRef.close());
//  }
//
//  listenOnMatSidenavCloseFinish() {
//    this.sidenavRef.openedChange.subscribe(
//      (status: boolean) => {
//        if (!status) {
//          this.sidenavService.detachComponent();
//        }
//      }
//    );
//  }

}
