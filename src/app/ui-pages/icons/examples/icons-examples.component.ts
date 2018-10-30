import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IconsService } from '../icons.service';

interface Icon {
  className:string;
}

@Component({
  selector: 'app-icons-examples',
  templateUrl: './icons-examples.component.html',
  styleUrls: ['./icons-examples.component.scss']
})
export class IconsExamplesComponent implements OnInit {

  icons: Array<Icon>;
  constructor(
    private iconsService: IconsService
  ) { }

  ngOnInit() {  
    this.getIcons();
  }

  private getIcons():void {
    this.iconsService.getIcons().subscribe(
      result => {
        this.icons = result;
        console.log(this.icons);

      })
  }

}
