import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef  } from '@angular/material';

import { SimpleDialogContentComponent } from '../simple-dialog-content/simple-dialog-content.component';

@Component({
  selector: 'ntx-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss']
})
export class SimpleDialogComponent implements OnInit {

  DialogContentRef: MatDialogRef<SimpleDialogContentComponent>;

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(SimpleDialogContentComponent, {
      panelClass: 'simpleDialog'
    });
  }

  ngOnInit() {
  }

}
