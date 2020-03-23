import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ProfileDialogContentComponent } from '../profile-dialog-content/profile-dialog-content.component';

const USER = {
	background: 'assets/images/background-profile-header.jpg',
	avatar: 'assets/images/perfil.jpg',
	name : 'Bernice Greaves',
	mail : 'berni.graves@netexlearning.com',
	phone : '+34 765432190',
	location : 'A Coruña',
	actions: [
		{
			label: 'Profile',
			link: '#'
		},
		{
			label: 'Evaluation',
			link: '#'
		},
		{
			label: 'Another action',
			link: '#'
		}
	]
};

@Component({
	selector: 'ntx-profile-dialog',
	templateUrl: './profile-dialog.component.html',
	styleUrls: ['./profile-dialog.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProfileDialogComponent implements OnInit {

	user = USER;

	constructor(private dialog: MatDialog) { }

	ngOnInit() {
	}

	openDialog() {
		const dialogRef = this.dialog.open(ProfileDialogContentComponent, {
			panelClass: 'profileDialog',
			data: this.user
		});
	}
}
