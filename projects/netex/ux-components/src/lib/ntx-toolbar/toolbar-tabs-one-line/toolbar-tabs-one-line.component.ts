import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ntx-toolbar-tabs-one-line',
	templateUrl: './toolbar-tabs-one-line.component.html',
	styleUrls: ['./toolbar-tabs-one-line.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ToolbarTabsOneLineComponent implements OnInit {

	@Input() apps: any[];
	@Input() image!: string;
	@Input() imageText!: string;

	constructor() { }

	ngOnInit() {}

  mtp1User = {
    'avatar': 'assets/images/perfil.jpg',
    'fullname': 'Carolina López',
    'username': 'carolina.lopez',
    'companyLogo': 'assets/images/icon-netex.png',
    'companyName': 'Logo netex',
    'link': 'http://www.netexlearning.es',
    'linkLabel': 'Accede a tu cuenta'
  };
  mtp1Options = [
    {
      'label': 'Notificaciones',
      'badge': 29
    },
    {
      'label': 'Novedades'
    },
    {
      'label': 'Manuales'
    },
    {
      'label': 'Netex Community'
    }
  ];

}
