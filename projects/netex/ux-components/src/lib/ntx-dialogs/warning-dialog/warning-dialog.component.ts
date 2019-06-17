import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef  } from '@angular/material';

import { WarningDialogContentComponent } from '../warning-dialog-content/warning-dialog-content.component';

@Component({
  selector: 'ntx-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent implements OnInit {

  DialogContentRef: MatDialogRef<WarningDialogContentComponent>;

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(WarningDialogContentComponent, {
      panelClass: 'warningDialog'
    });
  }

  ngOnInit() {
  }

}
