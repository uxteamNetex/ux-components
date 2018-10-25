import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { NtxSidenavService, SIDENAV_DATA } from '@netex/ux-components';
import { DynamicDataInterface } from './dynamic-data.interface';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, OnDestroy {

  private emitterSource = new Subject<string>();

  public emitter$ = this.emitterSource.asObservable();

  constructor(
    @Inject(SIDENAV_DATA) private sidenavData: DynamicDataInterface,
    private sidenavService: NtxSidenavService
  ) { }

  ngOnInit() {
  }

  onCloseSidenav() {
    this.sidenavService.close();
  }

  ngOnDestroy() {
  }

}
