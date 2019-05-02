import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  code1 = `
  <div class="card11">
    <mat-radio-button class="radiobutton-group__radiobutton"
                      [color]="'primary'"
                      [value]="value"
                      (change)="onChangeRadiobutton($event)"
                      [ngClass]="{'check-selected':selected}">
    </mat-radio-button>
    <mat-card class="card11__card">
      <mat-card-header>
        <div class="card11__number">
          <span>{{ data.rank }}</span>
        </div>
        <div class="card11__content">
          <mat-card-title class="card11__title">
            <span class="utils--truncate1" [matTooltip]="data.title">{{ data.title }}</span>
          </mat-card-title>
          <mat-card-subtitle class="card11__subtitle">
            <span class="utils--truncate2" [matTooltip]="data.description">{{ data.description}}</span>
          </mat-card-subtitle>
          <ntx-progress-bar [color]="'primary'" [value]="'52'"></ntx-progress-bar>
        </div>
      </mat-card-header>
    </mat-card>
  </div>`;

  code2 = `
  @Component({
    ...
  })
  export class Card11Component implements OnInit {

    data: any = {
      title: 'Card title lorem ipsum dolor sit amet consectetuer adipiscing',
      description: 'Card subtitle lorem ipsum dolor sit amet consectetuer lorem ipsum dolor sit amet consectetuer',
      rank: '6'
    };

    @Input() color: string;
    @Input() value: number;
    @Input() selected: boolean;
    @Output() radiobuttonChange = new EventEmitter<MatRadioChange>();
    ...
    onChangeRadiobutton(event: MatRadioChange) {
      this.radiobuttonChange.emit(event);
    }

  }`;

  constructor() { }

  ngOnInit() {
  }

}
