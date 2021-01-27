import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  filesAdded=[
    {
      name: 'pdf_file_with_a_very_long_text.pdf',
      icon: 'icon-file-pdf'
    },
    {
      name: 'zip_file_01',
      icon: 'icon-file-zip'
    },
    {
      name: 'pdf_file_01',
      icon: 'icon-file-pdf'
    },
    {
      name: 'zip_file_02',
      icon: 'icon-file-zip'
    }
  ];

}
