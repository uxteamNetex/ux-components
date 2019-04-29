import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

export interface Chip {
  name: string;
  role: string;
}

@Component({
  selector: 'ntx-image-subtitle-chip',
  templateUrl: './image-subtitle-chip.component.html',
  styleUrls: ['./image-subtitle-chip.component.scss']
})
export class ImageSubtitleChipComponent implements OnInit {

  removable = true;
  @Input() color: string;
  @Input() disabled: string;

  chips: Chip[] = [
    {name: 'Mary Joe Wright', role: 'Web Developer'},
    {name: 'John Doe', role: 'Developer'},
    {name: 'Example chip with a very long name', role: 'Web Developer and Graphic designer'},
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
