import { Component, OnInit } from '@angular/core';

export interface ToolbarType {
  label: string;
  selector: string;
}

@Component({
  selector: 'app-toolbars-examples',
  templateUrl: './toolbars-examples.component.html',
  styleUrls: ['./toolbars-examples.component.scss']
})
export class ToolbarsExamplesComponent implements OnInit {

  toolbarTypes: ToolbarType[] = [
    { 
      label: "simple",
      selector: "<ntx-toolbar>"
    },
    { 
      label: "con pestañas",
      selector: "<ntx-toolbar-tabs>"
    }];
    
  constructor() { }

  ngOnInit() {
  }

}
