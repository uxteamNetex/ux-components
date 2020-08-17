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

  code1 = `
    <div class="card19" (click)="onClickEvent()">
      <div class="card19__badge">
        <img 
            *ngIf="urlImage; else elseBlockBadge"
            class="utils--img-cover"
            src="{{ urlImage }}"
            alt="{{ altImage }}">
        <ng-template #elseBlockBadge>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path fill="#f9f9f9" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/>
          </svg>
        </ng-template>
      </div>
      <div class="card19__info utils--padding-left-16">
        <p class="utils--margin-0 utils--text-12 utils--uppercase utils--text-grey-700">
            <span [matTooltip]="subtitle">{{ subtitle }}</span>
        </p>
        <p class="utils--margin-top-4 utils--margin-bottom-12 utils--text-18 utils--text-grey-800">
          <span [matTooltip]="title">{{ title }}</span>
        </p>
        <p class="card19__info--description utils--text-14 utils--margin-0 utils--text-grey-600 utils--lineclamp-2">
          <span [matTooltip]="description">{{ description }}</span>
        </p>
      </div>
      <div class="card19__menu">
        <ntx-menu-options></ntx-menu-options>
      </div>
    </div>
  `;
  code2 = `
    import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

    @Component({
      selector: 'ntx-card19',
      templateUrl: './card19.component.html',
      styleUrls: ['./card19.component.scss']
    })
    export class Card19Component implements OnInit {
    
      @Input() urlImage: string;
      @Input() altImage: string = 'alternative text'
      @Input() subtitle: string = 'subtitle';
      @Input() title: string = 'title';
      @Input() description: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odio ratione quod, maiores porro accusamus quo vitae architecto iusto adipisci atque earum, veniam est eius delectus ab voluptatum consectetur hic.';
    
      @Output() clickEvent = new EventEmitter();
    
      constructor() { }
    
      ngOnInit() { }
    
      public onClickEvent() {
        console.log('Click event on card19 component');
        this.clickEvent.emit();
      }
    
    }
  `;
  code3 = `
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "card19";
    
    .#{$block} {
      @include card-white(132);
      font-family: Lato;
      display: flex;
      padding: 16px 4px 16px 16px;
      &__badge {
        background-color: $color-grey-200;
        border-radius: 4px;
        width: 92px;
        height: 92px;
        flex: none;
        svg {
          display: block;
          margin: auto;
          height: 100%;
        }
      }
      &__info {
        width: calc(100% - 92px - 52px);
        &--description {
            line-height: 20px;
        }
      }
      &__menu {
        width: 52px;
        flex: none;
        position: relative;
        top: -10px;
      }
    }  
  `;

}
