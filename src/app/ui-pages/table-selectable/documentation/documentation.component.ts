import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-documentation',
	templateUrl: './documentation.component.html',
	styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

	code1 = `
    <mat-toolbar [ngClass]="{'selected': itemsSelected }" class="multi-select-header">

      <div class="multi-select-header__total-items">
        <span>{{ numSelectedItems | i18nPlural: itemPluralMapping }} selected</span>
      </div>

      <span class="multi-select-header__spacer"></span>

      <div class="multi-select-header__options" *ngIf="itemsSelected">
        <ntx-text-button [color]="'white'"></ntx-text-button>
        <ntx-text-button [color]="'white'"></ntx-text-button>
        <ntx-text-button [color]="'white'"></ntx-text-button>
        <ntx-menu-options></ntx-menu-options>
      </div>

    </mat-toolbar>
  `;

	code2 = `
    @Component({
      ...
    })
    export class MultiSelectOptionsComponent implements OnInit, OnChanges {

      itemsSelected: boolean;
      @Input() numSelectedItems: number;

      itemPluralMapping = {
        '=0': '0 items',
        '=1': '1 item' ,
        'other': '# items'
      };
      ...
      ngOnChanges(changes: SimpleChanges) {
        this.itemsSelected = changes.numSelectedItems.currentValue;
      }

    }
  `;

	code3 = `
    <div class="table-selectable__wrapper">

      <!-- Header -->
      <ntx-multi-select-options [numSelectedItems]='selection.selected.length'></ntx-multi-select-options>

      <div class="table-selectable__container">
        <!-- Table -->
        <mat-table [dataSource]="dataSource" matSort class="table-selectable__table mat-elevation-z8">
          <!-- Checkbox Column -->
          <ng-container matColumnDef="select">
              <mat-header-cell *matHeaderCellDef>
                <mat-checkbox (change)="onHeaderCheckboxChange($event)"
                              [checked]="selection.hasValue() && isAllSelected()"
                              [indeterminate]="selection.hasValue() && !isAllSelected()"
                              [color]="'primary'">
                </mat-checkbox>
              </mat-header-cell>
              <mat-cell *matCellDef="let row">
                <mat-checkbox (click)="$event.stopPropagation()"
                              (change)="onRowCheckboxChange($event, row)"
                              [checked]="selection.isSelected(row)"
                              [color]="'primary'">
                </mat-checkbox>
              </mat-cell>
            </ng-container>

          <!-- Column 1 -->
          <ng-container matColumnDef="avatar">
            <mat-header-cell *matHeaderCellDef></mat-header-cell>
            <mat-cell *matCellDef="let element">
              <div class="avatar-img">
                <img mat-card-image [src]="element.avatar" alt="User image">
              </div>
            </mat-cell>
          </ng-container>

          <!-- Column 1 -->
          <ng-container matColumnDef="name">
              <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
              <mat-cell *matCellDef="let element">
                <span class="utils--truncate">
                  {{element.name}}
                </span>
              </mat-cell>
            </ng-container>

          <!-- Column 2 -->
          <ng-container matColumnDef="project">
            <mat-header-cell *matHeaderCellDef mat-sort-header> Project </mat-header-cell>
            <mat-cell *matCellDef="let element">
              <span class="utils--truncate">
                {{element.project}}
              </span>
            </mat-cell>
          </ng-container>

          <!-- Column 3 -->
          <ng-container matColumnDef="type">
            <mat-header-cell *matHeaderCellDef mat-sort-header> Type </mat-header-cell>
            <mat-cell *matCellDef="let element">
              <ntx-label [text]="element.type"></ntx-label>
            </mat-cell>
          </ng-container>

          <!-- Column 4 -->
          <ng-container matColumnDef="modification">
            <mat-header-cell *matHeaderCellDef mat-sort-header> Last modification </mat-header-cell>
            <mat-cell *matCellDef="let element">
              {{element.modification}}
            </mat-cell>
          </ng-container>

          <!-- Column 5 -->
          <ng-container matColumnDef="options" stickyEnd>
            <mat-header-cell *matHeaderCellDef mat-sort-header> </mat-header-cell>
            <mat-cell *matCellDef="let element">
              <ntx-menu-options></ntx-menu-options>
            </mat-cell>
          </ng-container>

          <mat-header-row *matHeaderRowDef="displayedColumns" class="table-selectable__header"></mat-header-row >
          <mat-row *matRowDef="let row; columns: displayedColumns;" class="table-selectable__row" ></mat-row>

        </mat-table>
      </div>

      <!-- Paginator -->
      <mat-paginator class="table-container__paginator" [pageSizeOptions]="[10, 25, 50]" showFirstLastButtons></mat-paginator>

    </div>
  `;

	code4 = `
    @Component({
      ...
    })
    export class SelectableTableComponent implements OnInit {
      ...
      displayedColumns: string[] = ['select', 'avatar', 'name', 'project', 'type', 'modification', 'options'];
      dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      selection = new SelectionModel<PeriodicElement>(true, []);
      ...
      isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
      }

      masterToggle() {
        this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
      }

      onRowCheckboxChange($event, row) {
        return $event ? this.selection.toggle(row) : null;
      }

      onHeaderCheckboxChange($event) {
        return $event ? this.masterToggle() : null;
      }

    }
  `;
	code5 = `
    <!-- Column 1 -->
    <ng-container matColumnDef="avatar">
      <mat-header-cell *matHeaderCellDef></mat-header-cell>
      <mat-cell *matCellDef="let element">
        <div class="avatar-img">
          <img mat-card-image class="utils--vertical-align" [src]="element.avatar" alt="User image">
        </div>
      </mat-cell>
    </ng-container>
  `;

	code6 = `
  <div class="table-container" [ngClass]="{'flat': this.style === 'flat'}">
    <div class="table-selectable__wrapper">
      ...
      <!-- Column 1 -->
      <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
          <mat-cell *matCellDef="let element">
            <span class="utils--truncate">
              {{element.name}}
            </span>
            <mat-icon *ngIf="showIcon" class="icon-netex {{element.icon}} {{element.iconColor}} utils--margin-left-12"></mat-icon>
          </mat-cell>
      </ng-container>
      ...
    </div>
  </div>
  `;

	code7 = `
  <!-- Column 1 -->
  <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
      <mat-cell *matCellDef="let element">
        <span class="utils--truncate" [matTooltip]="element.name">
          {{element.name}}
        </span>
        <mat-icon *ngIf="showIcon" class="icon-netex {{element.icon}} {{element.iconColor}} utils--margin-left-12"></mat-icon>
      </mat-cell>
  </ng-container>

  <!-- Column 2 -->
  <ng-container matColumnDef="project">
    <mat-header-cell *matHeaderCellDef mat-sort-header> Project </mat-header-cell>
    <mat-cell *matCellDef="let element">
      <span class="utils--truncate" [matTooltip]="element.project">
        {{element.project}}
      </span>
    </mat-cell>
  </ng-container>
  `;

	constructor() { }

	ngOnInit() {
	}

}
