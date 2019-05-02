import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  code1 = `
  <mat-card class="card2">
    <div class="card2__wrapper-image">
      <img mat-card-image class="card2__image" src="assets/images/writting.jpg" alt="Card image">
    </div>
    <mat-card-content>
      ...
    </mat-card-content>
  </mat-card>`;
  code2 = ``;
  code3 = ``;

  constructor() { }

  ngOnInit() {
  }

}
