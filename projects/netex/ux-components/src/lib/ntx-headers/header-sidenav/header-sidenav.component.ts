import { Component, OnInit } from '@angular/core';
import { NtxSidenavService } from '../../ntx-sidenav/ntx-sidenav.service';

@Component({
  selector: 'ntx-header-sidenav',
  templateUrl: './header-sidenav.component.html',
  styleUrls: ['./header-sidenav.component.scss']
})
export class HeaderSidenavComponent implements OnInit {

  constructor(
    private ntxSidenavService: NtxSidenavService
  ) { }

  ngOnInit() {
  }

  onCloseSidenav(): void {
		this.ntxSidenavService.close();
	}

}