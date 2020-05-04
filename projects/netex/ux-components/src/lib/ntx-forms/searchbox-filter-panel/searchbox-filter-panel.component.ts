import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'ntx-searchbox-filter-panel',
  templateUrl: './searchbox-filter-panel.component.html',
  styleUrls: ['./searchbox-filter-panel.component.scss']
})
export class SearchboxFilterPanelComponent implements OnInit {

  constructor() { }

  show: boolean = false;

  // @ViewChild('container') container : ElementRef;
  // @ViewChild('panel') panel: TemplateRef<HTMLElement>;
  // @ViewChild('contentPanelRef') contentPanelRef: TemplateRef<HTMLElement>;

  ngOnInit() {
    // console.log('on init', this.container);
    // console.log('on init', this.container.nativeElement.getBoundingClientRect());
    // console.log('offsetTop', this.container.nativeElement.offsetTop);
    // console.log('offsetLeft', this.container.nativeElement.offsetLeft);
  }

  openFilterPanel(): void {
  //   const dialogRef = this.dialog.open(this.panel, {
  //     panelClass: 'searchbox-filter-panel__panel',
  //     height: '250px',
  //     width: this.container.nativeElement.offsetWidth,
  //     position: {
  //       // top: this.container.nativeElement.offsetTop,
  //       left: this.container.nativeElement.offsetLeft
  //       // left: '187.5px',
  //     },
  //     disableClose: true,
  //     hasBackdrop: false
  //   });
  }

  togglePanel(): void {
    this.show = !this.show;
  }

}
