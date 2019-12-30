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
code2 = `
    <button mat-icon-button class="dashboard-menu menu-options-button" [matMenuTriggerFor]="menuOptions">
      <mat-icon class="icon-netex icon-dashboard"></mat-icon>
    </button>
    <mat-menu #menuOptions="matMenu" [overlapTrigger]="false" class="dashboard">
      <div class="dashboard__grid" *ngIf="apps.length; else failback">
        <mat-grid-list cols="3" rowHeight="116px">
          <mat-grid-tile *ngFor="let app of apps">
            <a href="{{app.link}}">
              <img src="{{app.icon}}">
              <span class="utils--margin-top-12 utils--text-12 utils--truncate" matTooltip="{{app.name}}">
                {{app.name}}
              </span>
            </a>
          </mat-grid-tile>
        </mat-grid-list>
      </div>
      <ng-template #failback>
        <div class="utils--basic-text utils--align-center-text utils--padding-16">
          <p>
            <mat-icon class="icon-netex icon-warning icon-big utils--text-error"></mat-icon>
          </p>
          <p class="utils--text-grey-900 utils--bold-text">Oups!</p>
          <p class="utils--text-14 utils--text-grey-700">{{failbackMsg}}</p>
        </div>
      </ng-template>
    </mat-menu>`;
constructor() { }

ngOnInit() {}
}
