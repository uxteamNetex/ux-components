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


  code9=`
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
  code10=`
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
  code11=`
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
	ngOnInit() {
	}
}
