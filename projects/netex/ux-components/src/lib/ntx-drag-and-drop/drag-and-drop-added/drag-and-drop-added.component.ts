import { Component, Input, OnInit } from '@angular/core';

export interface File {
  name: string
  icon: string
}

@Component({
  selector: 'ntx-drag-and-drop-added',
  templateUrl: './drag-and-drop-added.component.html',
  styleUrls: ['./drag-and-drop-added.component.scss']
})
export class DragAndDropAddedComponent implements OnInit {

  @Input() filesAdded: File[];
  
  constructor() { }

  ngOnInit() {
    console.log('a', this.filesAdded);
  }

}
