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

  code3 = `
  <button mat-icon-button class="menu-options-button profile-menu" [matMenuTriggerFor]="menuOptions">
    <div class="profile-menu-image">
        <img class="utils--vertical-align" src="assets/images/perfil.jpg" alt="User image">
    </div>
    <span *ngIf="showBadge" class="menu-option-button__badge"
      matBadgeOverlap="false"
      matBadge="2"
      matBadgeHidden="false"
      matBadgeSize="small"
      matBadgePosition="below">
  </span>
  </button>
  ...
    `;

  code4 = `
    import { Component, OnInit, Input } from '@angular/core';
    import { ViewEncapsulation } from '@angular/core';

    export interface Section {
      title: string;
      subtitle: string;
      link: string;
    }

    @Component({
      selector: 'ntx-menu-toolbar-profile',
      templateUrl: './menu-toolbar-profile.component.html',
      styleUrls: ['./menu-toolbar-profile.component.scss'],
      encapsulation: ViewEncapsulation.None
    })

    export class MenuToolbarProfileComponent implements OnInit {

      @Input() showBadge: boolean;

      constructor() { }

      texts: Section[] = [
        {
        title: 'Carolina López',
        subtitle: 'carolina.lopez',
        link: 'Accede a tu cuenta',
        }
      ];

      ngOnInit() { }

      }`;

  code5=`
    <a class="menu-link" [matMenuTriggerFor]="menuOptions">
    <mat-icon class="icon-netex {{icon}} utils--margin-right-12"></mat-icon>
    <span>{{title}}</span>
    </a>
    <mat-menu #menuOptions="matMenu" [overlapTrigger]="false">
    <button mat-menu-item (click)="item.click()" mat-menu-item *ngFor="let item of actions">
      <mat-icon class="mat-icon icon-netex {{item.icon}}"></mat-icon>
      <span class="utils--text-grey-700">{{item.title}}</span>
    </button>
    </mat-menu>
`;    
  code6=`
    import { Component, OnInit, Input } from '@angular/core';

    export class IActionsMenuLinkComponent {
    icon?: string;
    title: string;
    click: Function;
    }

    @Component({
    selector: 'ntx-menu-link',
    templateUrl: './menu-link.component.html',
    styleUrls: ['./menu-link.component.scss']
    })
    export class MenuLinkComponent implements OnInit {

    @Input() title: string;
    @Input() icon: string;
    @Input() actions: IActionsMenuLinkComponent[];

    constructor() { }

    ngOnInit() {
    }
    }
  `;    
  code7=`
    @import "././projects/netex/ux-components/src/styles/app/utils";

    a.menu-link {
      color: $color-primary;
      display: inline-flex;
      align-items: center;
      padding: 8px 0;
      cursor: pointer;
      &:hover {
          color: $color-primary-hover;
      }
    }
  `;    


  code8=`
    <button 
      mat-icon-button 
      class="menu-options-button" 
      color="accent" 
      [matMenuTriggerFor]="menuOptions"
      (click)="$event.stopPropagation()">
        <mat-icon class="icon-netex icon-more-options"></mat-icon>
    </button>
    ...
`;

  code9=`
  <button 
    mat-icon-button 
    class="menu-options-button" 
    color="accent" 
    [matMenuTriggerFor]="menuOptions"
    (click)="$event.stopPropagation()">
     <mat-icon class="icon-netex icon-more-options"></mat-icon>
  </button>
  ...
  `;

constructor() { }

ngOnInit() {}
}
