import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lists-doc',
	templateUrl: './lists-doc.component.html',
	styleUrls: ['./lists-doc.component.scss']
})
export class ListsDocComponent implements OnInit {

	constructor() { }

	code1 = `
    <mat-list-item *ngFor="let text of texts" class="list-one-line-avatar__item">
      <div matListAvatar class="list-one-line-avatar__item--image">
        <img class="utils--vertical-align" src="assets/images/perfil.jpg" alt="user image">
      </div>
      <p mat-line class="list-one-line-avatar__item--title">{{text.title}}</p>
    </mat-list-item>
  ` ;
	code2 = `
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "list-one-line-avatar";

    .#{$block}{
      &.mat-list-base{
        padding: 0;
        .#{$block}__item{
          height: 48px;
          .mat-list-item-content{
            padding: 0;
            .#{$block}__item--image{
              border-radius: 50%;
              height: 32px;
              overflow: hidden;
              position: relative;
              width: 32px;
              img{
                height: 100%;
              }
            }
            .#{$block}__item--title{
              color: $color-grey-700;
              font-family: Lato;
              font-size: $font-size-14;
            }
          }
        }
      }
    }
  ` ;
	code3 = `
    <mat-list-item *ngFor="let text of texts" class="list-two-lines__item">
      <div matListAvatar class="list-two-lines__item--image">
        <img class="utils--vertical-align" src="assets/images/perfil.jpg" alt="user image">
      </div>
      <h4 mat-line class="list-two-lines__item--title">{{text.title}}</h4>
      <p mat-line class="list-two-lines__item--subtitle"> {{text.subtitle}} </p>
    </mat-list-item>
  ` ;
  code4 = `
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "list-two-lines";

    .#{$block}{
      padding: 0;
      .#{$block}__item{
        .#{$block}__item--image{
          border-radius: 50%;
          height: 40px;
          overflow: hidden;
          position: relative;
          width: 40px;
          img{
            height: 100%;
          }
        }
        .#{$block}__item--title{
          color: $color-grey-800;
          font-family: LatoBold;
          font-size: 16px;
        }
        .#{$block}__item--subtitle{
          color: $color-grey-600;
          font-family: Lato;
        }
      }
    }
  ` ;
  code5 = `
    <mat-list class="list-one-line-options">
    <mat-list-item *ngFor="let text of texts" class="list-one-line-options__item">
      <div matListAvatar class="list-one-line-options__item--image">
        <span class="list-one-line-options__item--initial">L</span>
      </div>
      <div class="list-one-line-options__item--content">
        <h4 mat-line class="list-one-line-options__item--title">{{text.title}}</h4>
        <ntx-progress-bar [color]="'primary'" [value]="'52'"></ntx-progress-bar>
        <div *ngIf="level; else optionsBlock" class="list-one-line-options__item--level">
          <span>{{level}}</span>
        </div>
        <ng-template #optionsBlock>
          <ntx-menu-options></ntx-menu-options>
        </ng-template>
      </div>
    </mat-list-item>
  </mat-list>`;
  code6 = `
  import { Component, OnInit, Input } from '@angular/core';
  import { ViewEncapsulation } from '@angular/core';

  export interface Section {
    title: string;
  }

  @Component({
    selector: 'ntx-list-one-line-options',
    templateUrl: './list-one-line-options.component.html',
    styleUrls: ['./list-one-line-options.component.scss'],
    encapsulation: ViewEncapsulation.None
  })

  export class ListOneLineOptionsComponent implements OnInit {

    @Input() level: string;
    constructor() { }

    texts: Section[] = [
      {
        title: 'List name with a very large name and three dots'
      }
    ];

    ngOnInit() { }
  }`;
	code7 = `
  <p mat-line class="list-two-lines__item--subtitle">
    {{text.subtitle}}
    <a matLine *ngIf="showLink" href="..." class="list-two-lines__item--subtitle-link utils--margin-left-12">{{text.link}}</a>
  </p>
  ` ;
	code8 = `
  .#{$block}__item--subtitle{
    color: $color-grey-600;
    display: flex;
    font-family: Lato;
  }
  ` ;
  code9 = `
    <div class="list1">
    <div class="list1__item" *ngFor="let item of data">
      <div class="list1__item--badge">
        <img 
          *ngIf="item.avatar; else elseBlock"
          src="{{item.avatar}}"
          alt="{{item.label + '&#32;image'}}">
        <ng-template #elseBlock>
          <span 
            [style.background-color]="item.color"
            class="list1__item--alias utils--align-center-text">{{item.label | slice:0:1}}</span>
        </ng-template>
      </div>
      <div class="list1__item--wrapper">
        <div class="text utils--margin-right-24 utils--truncate">
          <span class="utils--text-16 utils--text-grey-800" matTooltip="{{item.label}}">{{item.label}}</span>
        </div>
        <ntx-progress-bar-level 
          value="{{item.progress.value}}"
          class="progress-bar"></ntx-progress-bar-level>
        <span class="level utils--text-16 utils--align-center-text utils--text-grey-800">{{item.progress.level}}</span>
        <ntx-menu-options class="options"></ntx-menu-options>
      </div>
    </div>
</div>
  `;
  code10 = `
    import { Component, OnInit, Input } from '@angular/core';

    export interface Item {
    label: string;
    avatar: string;
    color: string;
    progress: {
      value: number,
      level: string
    };
    }

    @Component({
    selector: 'ntx-list1',
    templateUrl: './list1.component.html',
    styleUrls: ['./list1.component.scss'],
    })

    export class List1Component implements OnInit {

    @Input() data: Item[];

    constructor() { }

    ngOnInit() { }

    }
  `;
  code11 = `
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "list1";

    .#{$block} {
    > * {
      box-sizing: border-box;
    }

    font-family: Lato;

    .#{$block}__item {
      display: flex;
      height: 68px;
      &--badge {
        align-self: center;
        img,span {
          width: 36px;
          height: 36px;
          margin-right: 24px;
        }
        img {
          object-fit: cover;
        }
        span {
          display: block;
          line-height: 36px;
          font-size: 23px;
          color: rgba(255,255,255,0.4);
        }
      }
      &--wrapper {
        flex-basis: calc(100% - 60px);
        max-width: calc(100% - 60px);
        display: flex;
        align-items: center;
        .text {
          flex-basis: 60%;
        }
        .progress-bar {
          flex-basis: calc(40% - 48px - 48px);
        }
        .level,.options {
          flex-basis: 48px;
        }
      }
      &:not(:last-child) .#{$block}__item--wrapper{
        border-bottom: 1px solid $color-grey-200;
      }
    }
    }
  `;
  code12 = `
    <div class="list-one-line">
    <div class="list-one-line__item" *ngFor="let item of data">
      <img 
        *ngIf="item.avatar; else elseBlock"
        src="{{item.avatar}}"
        alt="{{item.label + '&#32;image'}}">
      <ng-template #elseBlock>
        <span 
          [style.background-color]="item.color"
          class="list-one-line__item--alias">{{item.label | slice:0:1}}</span>
      </ng-template>
      <div class="list-one-line__item--text utils--text-grey-800 utils--truncate">
        <span matTooltip="{{item.label}}">{{item.label}}</span>
      </div>
    </div>
    </div>
  `;
  code13 = `
    import { Component, OnInit, Input } from '@angular/core';

    export interface Item {
    label: string;
    avatar: string;
    color: string;
    }

    @Component({
    selector: 'ntx-list-one-line',
    templateUrl: './list-one-line.component.html',
    styleUrls: ['./list-one-line.component.scss'],
    })

    export class ListOneLineComponent implements OnInit {

    @Input() data: Item[];

    constructor() { }

    ngOnInit() { }

    }
  `;
  code14 = `
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "list-one-line";

    .#{$block} {
    font-family: Lato;
    &__item {
      display: flex;
      align-items: center;
      height: 68px;
      img, span {
        width: 36px;
        height: 36px;
        margin-right: 24px;
      }
      img {
        object-fit: cover;
      }
      &--alias {
        line-height: 36px;
        text-align: center;
        font-size: 23px;
        color: rgba(255,255,255,0.4);
      }
      &--text {
        flex-basis: calc(100% - 60px);
        max-width: calc(100% - 60px);
        font-size: 16px;
        height: 100%;
        line-height: 68px;
      }
      &:not(:last-child) .#{$block}__item--text{
        border-bottom: 1px solid $color-grey-200;
      }
    }
    }
  `;
  code15 = `
    <div class="list2">
      <div class="list2__item" *ngFor="let item of data">
        <div class="list2__item--checkbox utils--margin-right-12">
          <ntx-form-checkbox [color]="'primary'" [checked]="item.checked" [hidden]="'true'"></ntx-form-checkbox>
        </div>
        <div class="list2__item--badge">
          <img 
            *ngIf="item.avatar; else elseBlock"
            src="{{item.avatar}}"
            alt="{{item.label + '&#32;image'}}">
          <ng-template #elseBlock>
            <span 
              [style.background-color]="item.color"
              class="list2__item--alias utils--align-center-text">{{item.label | slice:0:1}}</span>
          </ng-template>
        </div>
        <div class="list2__item--wrapper">
          <div class="text utils--margin-right-24 utils--truncate">
            <span class="utils--text-16 utils--text-grey-800" matTooltip="{{item.label}}">{{item.label}}</span>
          </div>
          <div class="progress-bar__container utils--margin-right-24">
            <ntx-progress-bar-level 
              value="{{item.progress.value}}"
              requiredValue="{{item.progress.requiredValue}}"></ntx-progress-bar-level>
            <p *ngIf="item.progress.edited" 
                class="progress-bar__label utils--margin-top-4 utils--margin-bottom-0 utils--text-12">[edited by you]</p>
          </div>
        </div>
      </div>
    </div>
  `;
  code16 = `
    import { Component, OnInit, Input } from '@angular/core';

    export interface Item {
      label: string;
      avatar: string;
      color: string;
      progress: {
        value: number,
        requiredValue: number,
        edited: boolean
      };
      checked: boolean
    }

    @Component({
      selector: 'ntx-list2',
      templateUrl: './list2.component.html',
      styleUrls: ['./list2.component.scss'],
    })

    export class List2Component implements OnInit {

      @Input() data: Item[];

      constructor() { }

      ngOnInit() { }

    }
  `;
  code17 = `
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "list2";
    
    .#{$block} {
      > * {
        box-sizing: border-box;
      }
    
      font-family: Lato;
    
      .#{$block}__item {
        display: flex;
        height: 68px;
        &--checkbox {
          display: flex;
          align-items: center;
        }
        &--badge {
          align-self: center;
          img,span {
            width: 36px;
            height: 36px;
            margin-right: 24px;
          }
          img {
            object-fit: cover;
          }
          span {
            display: block;
            line-height: 36px;
            font-size: 23px;
            color: rgba(255,255,255,0.4);
          }
        }
        &--wrapper {
          flex-basis: calc(100% - 60px);
          max-width: calc(100% - 60px);
          display: flex;
          align-items: center;
          .text {
            flex-basis: 60%;
          }
          .progress-bar__container {
            flex-basis: 40%;
          }
          .progress-bar__label {
            float: right;
            font-family: LatoSemibold;
          }
        }
        &:not(:last-child) .#{$block}__item--wrapper{
          border-bottom: 1px solid $color-grey-200;
        }
      }
    }
  `;
  code18 = `
    <mat-list class="list-multiline-lines">
      <mat-list-item *ngFor="let section of data" class="list-multiline-lines__item">
        <mat-icon matListIcon class="icon-netex {{section.icon}} list-multiline-lines__item--icon"></mat-icon>
        <h4 mat-line class="list-multiline-lines__item--title">{{section.title}}</h4>
        <a *ngFor="let link of section.links" matLine (click)="onClickEvent(link.link)" class="list-multiline-lines__item--subtitle-link">{{link.title}}</a>
      </mat-list-item>
    </mat-list>
  `;
  code19 = `
    import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
    import { ViewEncapsulation } from '@angular/core';

    export interface Section {
      title: string;
      icon: string;
      links?: SectionLink[];
    }
      
    export interface SectionLink {
      title: string;
      link: any;
    }
      
    @Component({
      selector: 'ntx-list-multilines-icon',
      templateUrl: './list-multilines-icon.component.html',
      styleUrls: ['./list-multilines-icon.component.scss'],
      encapsulation: ViewEncapsulation.None
    })
    export class ListMultilinesIconComponent implements OnInit {

      @Input() data: Section[];
      @Output() clickEvent = new EventEmitter();

      constructor() { }

      ngOnInit() {}

      public onClickEvent(link: any) {
        console.log('Click: list-multilines-icon component: ' + link);
        this.clickEvent.emit(link);
      }

    }
  `;
  code20 = `
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "list-multiline-lines";

    .#{$block}{
      padding: 0;
      .#{$block}__item{
        margin-bottom: 60px;
        .mat-list-item-content {
          display: flex;
          align-items: start;
          .#{$block}__item--icon{
            color: $color-grey-600;
            font-size: 36px;
            height: 36px;
            padding: 0;
            width: 36px;
          }
          .#{$block}__item--title{
            color: $color-grey-800;
            font-family: LatoBold;
            font-size: 18px;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .#{$block}__item--subtitle-link{
            color: $color-primary;
            font-size: 16px;
            margin-bottom: 8px;
            text-decoration: none;
            cursor: pointer;
          }
        }
      }
    }  
  `;
  
  ngOnInit() {
	}
}
