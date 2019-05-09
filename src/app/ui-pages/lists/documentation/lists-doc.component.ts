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

  ngOnInit() {
  }
}
