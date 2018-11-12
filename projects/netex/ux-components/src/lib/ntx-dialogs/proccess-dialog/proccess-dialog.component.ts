import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef  } from '@angular/material';

import { ProccessDialogContentComponent } from '../proccess-dialog-content/proccess-dialog-content.component';

@Component({
  selector: 'ntx-proccess-dialog',
  templateUrl: './proccess-dialog.component.html',
  styleUrls: ['./proccess-dialog.component.scss']
})
export class ProccessDialogComponent implements OnInit {

  DialogContentRef: MatDialogRef<ProccessDialogContentComponent>;

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ProccessDialogContentComponent);
  }

  ngOnInit() {
  }

}
