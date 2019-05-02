import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { TabsHeaderService } from 'src/app/shared/services/tabs-header.service';

export interface PeriodicElement {
  screensize: string;
  containersize: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {screensize: '>1480px', containersize: '1240px'},
  {screensize: '1479px - 1280px', containersize: '900px'},
  {screensize: '1279px - 1024px', containersize: '768px'},
];

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

  displayedColumns: string[] = ['screensize', 'containersize'];
  dataSource = ELEMENT_DATA;

  selectedCardIndex: number;

  constructor(
    private tabsHeaderService: TabsHeaderService
  ) { }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i);
  }

  onRadiobuttonChange(event: MatRadioChange) {
    this.selectedCardIndex = event.value;
  }

  checkIfSelected(i: number) {
    return this.selectedCardIndex === i;
  }

  setPath(value: string) {
    this.tabsHeaderService.setPath(value);
  }

}
