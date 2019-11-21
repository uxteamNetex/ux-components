import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus-doc',
  templateUrl: './menus-doc.component.html',
  styleUrls: ['./menus-doc.component.scss']
})
export class MenusDocComponent implements OnInit {

  code1 = `
    <mat-menu #menuOptions="matMenu" [overlapTrigger]="false" class="mat-menu-options mat-menu-toolbar-profile">

      <mat-list class="mat-menu-options__user-info">
        <mat-list-item *ngFor="let text of texts" class="mat-menu-options__user-info--item">
          <div matListAvatar class="mat-menu-options__user-info--logo">
            <img class="utils--vertical-align" src="assets/images/icon-netex.png" alt="Logo netex">
          </div>
          <h4 mat-line class="mat-menu-options__user-info--title">{{text.title}}</h4>
          <p mat-line class="mat-menu-options__user-info--subtitle"> {{text.subtitle}} </p>
          <a matLine href="..." class="mat-menu-options__user-info--link">{{text.link}}</a>
          <div class="mat-menu-options__user-info--image">
            <img class="utils--vertical-align" src="assets/images/perfil.jpg" alt="user image">
          </div>
        </mat-list-item>
      </mat-list>

      <button mat-menu-item class="mat-menu-options__custom-app">
        <span class="mat-menu-options__custom-app--text">Use as administrator</span>
        <div class="mat-menu-options__custom-app--image">
          <img class="utils--vertical-align" src="assets/images/administrator-banner.png" alt="Use as administrator">
        </div>
      </button>

      <button mat-menu-item class="mat-menu-options__menu-item">
        <span class="mat-menu-options__text-item"
              matBadgeOverlap="false"
              [matBadge]="29"
              [matBadgeHidden]="false"
              matBadgeSize="small">Notificaciones</span>
      </button>
      <button mat-menu-item class="mat-menu-options__menu-item">
        <span class="mat-menu-options__text-item">Novedades</span>
      </button>
      <button mat-menu-item class="mat-menu-options__menu-item">
        <span class="mat-menu-options__text-item">Manuales</span>
      </button>
      <button mat-menu-item class="mat-menu-options__menu-item">
        <span class="mat-menu-options__text-item">Netex Community</span>
      </button>

      <mat-divider></mat-divider>

      <button mat-menu-item class="mat-menu-options__menu-item">
        <span class="mat-menu-options__text-item">Salir</span>
      </button>
    </mat-menu>
  `;
  constructor(
  ) { }

  ngOnInit() {
  }
}
