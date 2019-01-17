import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

export interface Chip {
  name: string;
}

@Component({
  selector: 'ntx-basic-chip',
  templateUrl: './basic-chip.component.html',
  styleUrls: ['./basic-chip.component.scss']
})
export class BasicChipComponent implements OnInit {

  removable = true;
  @Input() color: string;
  @Input() disabled: string;

  chips: Chip[] = [
    {name: 'Mary Joe Wright'},
    {name: 'John Doe'},
    {name: 'Example chip with a very long name'},
  ];

  remove(chip: Chip): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
