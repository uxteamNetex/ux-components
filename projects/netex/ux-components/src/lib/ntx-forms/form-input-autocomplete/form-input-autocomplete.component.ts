import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'ntx-form-input-autocomplete',
  templateUrl: './form-input-autocomplete.component.html',
  styleUrls: ['./form-input-autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormInputAutocompleteComponent implements OnInit {
  myControl = new FormControl();
  options: User[] = [
    {name: 'One'},
    {name: 'One by one'},
    {name: 'Two'},
    {name: 'Three'},
    {name: 'Four'},
    {name: 'Five'}
  ];
  filteredOptions: Observable<User[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
