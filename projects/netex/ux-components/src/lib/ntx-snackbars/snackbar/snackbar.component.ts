import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ntx-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  openSnackBarCriticalError(){
    var message = 'There was a critical error. Please, try again.';
    var action = 'CLOSE';
    this.snackBar.open(message, action, {
      panelClass: 'ntx-snackbar-critical-error'
    });
  }
  openSnackBarError(){
    var message = 'There was an error. Please, try again.';
    this.snackBar.open(message, '', {
      panelClass: 'ntx-snackbar-error',
      duration: 5000
    });
  }
  openSnackBarSuccess(){
    var message = 'The process was completed successfully.';
    this.snackBar.open(message, '', {
      panelClass: 'ntx-snackbar-success',
      duration: 5000
    });
  }
  openSnackBarInfo(){
    var message = 'There process will be completed in a few minutes.';
    this.snackBar.open(message, '', {
      panelClass: 'ntx-snackbar-info',
      duration: 5000
    });
  }

}
