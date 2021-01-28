import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-documentation',
	templateUrl: './documentation.component.html',
	styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

	code1 =`
    import { ViewEncapsulation } from '@angular/core';

    @Component({
      selector: 'ntx-basic-image-chip',
      templateUrl: './basic-image-chip.component.html',
      styleUrls: ['./basic-image-chip.component.scss'],
      encapsulation: ViewEncapsulation.None,
    })
  `;

	constructor() { }

	ngOnInit() {
	}

}
