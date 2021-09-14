import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const monthNamesAlias = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", 
"Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

export class AppDateAdapter extends NativeDateAdapter {

  parse(value: any): Date | null {

    if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('/');

      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);

      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  format(date: Date, displayFormat: Object): string {
    let day: string = date.getDate().toString();
    let month: string = monthNamesAlias[date.getMonth()];
    let year = date.getFullYear();
    return `${day} de ${month} de ${year}`;
  }
}

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ntx-form-datepicker-range',
  templateUrl: './form-datepicker-range.component.html',
  styleUrls: ['./form-datepicker-range.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter}
  ],
  encapsulation: ViewEncapsulation.None
})
export class FormDatepickerRangeComponent implements OnInit {
  
  hours: Option[] = [];

  constructor() { }

  ngOnInit() {
    //Function to generate list options
    let minFragment: string, hourFragment: string, value: string, viewValue : string;
    for (var i = 0; i < 24; i++) {
      value = ((i<10) ? '0' + i.toString() : i.toString()) + ':00'; 
      if (i < 12 ) {
        viewValue = value + ' am';
      } else {
        viewValue = value + ' pm';
      }
      this.hours.push(
        {
          value: value,
          viewValue: viewValue
        }
      )
    }
  }

}
