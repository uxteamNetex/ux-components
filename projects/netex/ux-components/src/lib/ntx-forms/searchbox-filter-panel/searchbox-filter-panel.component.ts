import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'ntx-searchbox-filter-panel',
  templateUrl: './searchbox-filter-panel.component.html',
  styleUrls: ['./searchbox-filter-panel.component.scss']
})
export class SearchboxFilterPanelComponent implements OnInit {

  value = '';

  constructor() { }

  show: boolean = false;

  ngOnInit() {
  }

  togglePanel(): void {
    this.show = !this.show;
  }

}
