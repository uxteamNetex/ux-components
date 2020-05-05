import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code1=`
    <div class="card card--outlined card10">
    <div class="card10__badge">
      <span class="utils--centered utils--text-14 utils--text-grey-700">10</span>
    </div>
    <div class="card10__content">
      <div class="title utils--margin-top-8 utils--text-grey-700">
        <ntx-input-no-label [placeholder]="'Add a text'"></ntx-input-no-label>
      </div>
      <div class="subtitle utils--margin-bottom-20 utils--text-grey-800">
        <ntx-textarea-no-label [placeholder]="'Add a description...'"></ntx-textarea-no-label>
      </div>
      <div class="progress utils--margin-bottom-24">
        <ntx-progress-bar-level value="78"></ntx-progress-bar-level>
      </div>
    </div>
    <div class="card10__close-button">
      <button mat-icon-button class="utils--margin-top-12" (click)="onClose()">
        <span class="icon-netex icon-cross"></span>
      </button>
    </div>
    </div>
  `;
  code2=`
    import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
    import { ViewEncapsulation } from '@angular/core';
    import { FormControl } from '@angular/forms';

    @Component({
    selector: 'ntx-card10',
    templateUrl: './card10.component.html',
    styleUrls: ['./card10.component.scss']
    })
    export class Card10Component implements OnInit {

    @Output() close = new EventEmitter();

    constructor() { }

    ngOnInit() {}

    public onClose() {
      this.close.emit();
    }
    }
  `;
  code3=`
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "card10";

    .#{$block} {
    display: flex;
    .#{$block}__badge{
      width: 92px;
      position: relative;
      font-family: LatoSemibold;
      span {
        @include badge($color-grey-200, 32px);
      }
    }
    .#{$block}__content{
      box-sizing: border-box;
      width: calc(100% - 92px - 32px);
      font-family: Lato;
      .title  {
        font-style: italic;
      }
    }
    .#{$block}__close-button {
      width: 32px;
      button {
        width: 20px;
        height: 20px;
        line-height: 20px;
        &:hover {
          background-color: $icon-button-hover;
        }
      }
    }
    }
  `;

}
