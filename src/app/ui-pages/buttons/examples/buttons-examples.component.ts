import { Component, OnInit } from '@angular/core';
import { ButtonTypesService } from '../buttonTypes.service';
import { ButtonType } from '../buttonType.interface';
@Component({
  selector: 'app-buttons-examples',
  templateUrl: './buttons-examples.component.html',
  styleUrls: ['./buttons-examples.component.scss']
})
export class ButtonsExamplesComponent implements OnInit {
  
  buttonTypes: ButtonType[];

  constructor(
    private buttonTypesService: ButtonTypesService
  ) { }

  ngOnInit() {
    this.getButtonTypes();
  }

  getButtonTypes():void {
    this.buttonTypesService.getButtonTypes().subscribe(
      result => {
        this.buttonTypes = result;
        console.log(this.buttonTypes);
      }
    )
  }
}
