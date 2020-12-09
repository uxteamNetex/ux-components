import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  rbgData_1 = [
    {
      label: 'Option one',
      value: 1,
      checked: true,
      disabled: undefined
    },
    {
      label: 'Option two',
      value: 2,
      checked: undefined,
      disabled: undefined
    },
    {
      label: 'Disabled option',
      value: 3,
      checked: undefined,
      disabled: true
    }
  ];
  rbgData_2 = [
    {
      label: undefined,
      value: 2,
      checked: true,
      disabled: undefined
    }
  ];
  rbgData_3 = [
    {
      label: undefined,
      value: 3,
      checked: undefined,
      disabled: undefined
    }
  ];
  rbgData_4 = [
    {
      label: undefined,
      value: 4,
      checked: undefined,
      disabled: undefined
    }
  ];
  rbgData_5 = [
    {
      label: undefined,
      value: 5,
      checked: undefined,
      disabled: undefined
    }
  ];
  rbgData_6 = [
    {
      label: undefined,
      value: 6,
      checked: true,
      disabled: undefined
    }
  ];
  rbgData_7 = [
    {
      label: undefined,
      value: 7,
      checked: undefined,
      disabled: undefined
    }
  ];

}
