import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { SnackbarsModule } from '../snackbars.module';

@Component({
	selector: 'app-snackbars-examples',
	templateUrl: './snackbars-examples.component.html',
	styleUrls: ['./snackbars-examples.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SnackbarsExamplesComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}

/*   message = 'Custom snackbar!';
  panelClass= 'ntx-snackbar-dark_panel--error';

  openSnackBarCustom() {
    this.openSnackBarCustom1(this.message, 'pizza-party');
  }
  openSnackBarCustom1(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackbarsModule, {
      data: message,
      panelClass: panelClass,
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }*/

  openSnackBarNormal(){
    var message = 'Normal snackbar!';
    var action = 'CLOSE';
    this.snackBar.open(message, action, {
      panelClass: 'ntx-snackbar-dark_panel--error',
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {
      duration: 10000,
    });
  }

	ngOnInit() {}

}

@Component({
  selector: 'snackbars-examples-snack',
  templateUrl: './snackbars-examples-snack.component.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class CustomSnackBarComponent {}
