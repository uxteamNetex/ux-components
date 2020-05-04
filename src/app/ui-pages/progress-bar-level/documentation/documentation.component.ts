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
    <div class="progress-bar-level">
    <div
      *ngIf="requiredValue"
      class="progress-bar-level__required-value-mark utils--margin-bottom-4"
      [style.left]="requiredValue + '%'"
    ></div>
    <mat-progress-bar
      class="progress-bar-level__bar"
      [ngClass]="requiredValue ? value >= requiredValue ? 'success' : 'error' : color"
      [value]="value"
      [mode]="mode"
    ></mat-progress-bar>
    </div>
  `;
  code2=`
    import { Component, OnInit } from '@angular/core';
    import { Input } from '@angular/core';
    import { ViewEncapsulation } from '@angular/core';

    @Component({
    selector: 'ntx-progress-bar-level',
    templateUrl: './progress-bar-level.component.html',
    styleUrls: ['./progress-bar-level.component.scss'],
    encapsulation: ViewEncapsulation.None
    })
    export class ProgressBarLevelComponent implements OnInit {

    @Input() color: string;
    @Input() value: number;
    @Input() requiredValue: number;
    @Input() mode: 'determinate' | 'indeterminate' | 'buffer' | 'query' = 'determinate';

	constructor() { }

	ngOnInit() {
	}
}
  `;
  code3=`
    @import "././projects/netex/ux-components/src/styles/app/utils";

    $block: "progress-bar-level";

    .#{$block} {

    .#{$block}__required-value-mark {
      width: 0;
      position: relative;
      transform: translateX(-5px);
      border-width: 5px 5px 0 5px;
      border-color: $color-grey-400 transparent transparent;
      border-style: solid;
      transition: left 0.25s ease-in-out;
    }

    .#{$block}__bar {
      &.mat-progress-bar {
        border-radius: 2px;
        // height: 4px;

        &.success {
          .mat-progress-bar-fill:after {
            background-color: $color-success;
          }
        }

        &.error {
          .mat-progress-bar-fill:after {
            background-color: $color-error;
          }
        }

        .mat-progress-bar-buffer {
          background-color: $color-grey-200;
        }
      }
    }
    }
  `;

}
