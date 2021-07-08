import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-snackbars-examples',
	templateUrl: './snackbars-examples.component.html',
	styleUrls: ['./snackbars-examples.component.scss']
})
export class SnackbarsExamplesComponent implements OnInit {

	constructor(
		private snackBar: MatSnackBar
	) {}

	ngOnInit() {}

}
