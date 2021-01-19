import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

export interface Chip {
  label: string;
  avatar: string;
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
    {	label: 'Mary Joe Wright',
			avatar: ''
		},
		{
			label: 'John Doe',
			avatar: 'assets/images/perfil.jpg'
		},
		{
			label: 'Example chip with a very long name',
			avatar: 'assets/images/user_female_01.jpg'
		}
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
