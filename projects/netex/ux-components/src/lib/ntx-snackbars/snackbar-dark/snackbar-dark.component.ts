import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'ntx-snackbar-dark',
  templateUrl: './snackbar-dark.component.html',
  styleUrls: ['./snackbar-dark.component.scss']
})
export class SnackbarDarkComponent implements OnInit {

  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarDarkComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
