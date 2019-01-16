import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  @ViewChild('grid') grid: MatGridList;
  @ViewChild('grid2') grid2: MatGridList;
  @ViewChild('grid3') grid3: MatGridList;
  @ViewChild('grid4') grid4: MatGridList;
  @ViewChild('grid5') grid5: MatGridList;
  @ViewChild('grid6') grid6: MatGridList;

  gridByBreakpoint = {
    xl: 5,
    lg: 5,
    md: 4,
    sm: 3,
    xs: 2
  };

  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
      this.grid2.cols = this.gridByBreakpoint[change.mqAlias];
      this.grid3.cols = this.gridByBreakpoint[change.mqAlias];
      this.grid4.cols = this.gridByBreakpoint[change.mqAlias];
      this.grid5.cols = this.gridByBreakpoint[change.mqAlias];
      this.grid6.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
