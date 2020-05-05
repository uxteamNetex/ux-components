import { Component, OnInit, Input, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'ntx-profile-dialog-content',
	templateUrl: './profile-dialog-content.component.html',
	styleUrls: ['./profile-dialog-content.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProfileDialogContentComponent implements OnInit {

	constructor(
		DialogContentRef: MatDialogRef<ProfileDialogContentComponent>,
		@Inject(MAT_DIALOG_DATA) public user: any
	) {}

	ngOnInit() {
	}
}
