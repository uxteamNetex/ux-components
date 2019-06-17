import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  code1 = `
  @Component({
    ...
  })
  export class SimpleDialogComponent implements OnInit {

    ...
    openDialog() {
      const dialogRef = this.dialog.open(SimpleDialogContentComponent, {
        panelClass: 'simpleDialog'
      });
    }
    ...
  `;

  code2 = `
  .simpleDialog {
    ...
  }
  `;

  code3 = `
  @Component({
    ...
  })
  export class ProccessDialogComponent implements OnInit {

    ...
    openDialog() {
      const dialogRef = this.dialog.open(ProccessDialogContentComponent, {
        panelClass: 'proccessDialog'
      });
    }
    ...
  `;

  code4 = `
  .proccessDialog {
    ...
  }
  `;

  code5 = `
  @Component({
    ...
  })
  export class WarningDialogComponent implements OnInit {

    ...
    openDialog() {
      const dialogRef = this.dialog.open(WarningDialogContentComponent, {
        panelClass: 'warningDialog'
      });
    }
    ...
  `;

  code6 = `
  .warningDialog {
    ...
  }
  `;

  constructor() { }

  ngOnInit() { }


}
