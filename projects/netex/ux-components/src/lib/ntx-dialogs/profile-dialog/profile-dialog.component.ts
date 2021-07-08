import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ProfileDialogContentComponent } from '../profile-dialog-content/profile-dialog-content.component';

@Component({
	selector: 'ntx-profile-dialog',
	templateUrl: './profile-dialog.component.html',
	styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

	@Input() user: any;

	constructor(private dialog: MatDialog) { }

	ngOnInit() {
	}

	openDialog() {
		const dialogRef = this.dialog.open(ProfileDialogContentComponent, {
			autoFocus: false,
			panelClass: 'profileDialog',
			data: this.user
		});
	}
}
