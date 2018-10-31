import { Component, OnInit } from '@angular/core';

export interface CardType {
  label: string;
  selector: string;
}

@Component({
  selector: 'app-cards-examples',
  templateUrl: './cards-examples.component.html',
  styleUrls: ['./cards-examples.component.scss']
})
export class CardsExamplesComponent implements OnInit {
  
  cardTypes: CardType[] = [
    { 
      label: "simple",
      selector: "<ntx-card-simple>"
    },
    { 
      label: "con título",
      selector: "<ntx-card-title>"
    }];

  constructor(
  ) { }

  ngOnInit() {
  }
}
