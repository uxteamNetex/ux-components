import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-documentation',
	templateUrl: './documentation.component.html',
	styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

code1 = `
<div class="wrapper">
  <div class="header" [ngStyle]="{'background-image':'url(' + user.background + ')'}">
    <div class="avatar" [ngStyle]="{'background-image':'url(' + user.avatar + ')'}"></div>
    <div *ngIf="badge" class="badge utils--text-white" [ngStyle]="{'background-color': badge?.bgColor }">
      <div class="utils--text-12">{{badge?.label}}</div>
      <div class="utils--text-32">{{badge?.value}}</div>
    </div>
  </div>
  <div class="content">
    <span matTooltip="{{user.name}}">{{user.name}}</span> 
    <span matTooltip="{{user.mail}}">{{user.mail}}</span>
    <span *ngIf="user.phone" matTooltip="{{user.phone}}">{{user.phone}}</span>
    <span *ngIf="user.location" matTooltip="{{user.location}}">{{user.location}}</span>
  </div>
  <div class="actions" *ngIf="actions && actions.length > 0">
    <ul>
      <li 
      *ngFor="let action of actions; let i = index"
      [ngClass]="{'active': selectedIndex === i}" >
        <a href="javascript:void(0);" (click)="onClickEvent(i)">{{action.label}}</a>
      </li>
    </ul>
  </div>
</div>`
;
code2 = `
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ntx-card15',
	templateUrl: './card15.component.html',
	styleUrls: ['./card15.component.scss']
})
export class Card15Component implements OnInit {

	@Input() user: any;
	@Input() badge: any;
	@Input() actions: any[];

	@Output() clickEvent = new EventEmitter();

	selectedIndex: number;

	constructor() { }

	ngOnInit() {
		this.selectedIndex = this.actions ? this.actions.findIndex(action => action.active ) : undefined;
	}

	public onClickEvent(i) {
		this.clickEvent.emit();
		this.selectedIndex = i;
	}

}`;

code3 = `
.wrapper {
    border-radius: 4px;
    font-family: Lato;
    padding-bottom: 32px;
    width: 300px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.16);
    background-color: white;
    .header, .avatar {
        background-position: center;
        background-size: cover;
    }
    .header{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height: 130px;
        background-color: #F2F2F2;
        .avatar {
            background-color: #cccccc;
            border-radius: 75px;
            height: 150px;
            margin: 0 auto;
            position: relative;
            top: 55px;
            width: 150px;
        }
        .badge {
            width: 78px;
            height: 78px;
            border-radius: 50%;
            background-color: #999; 
            position: relative;
            top: -120px;
            left: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    .content{
        font-size: 14px;
        padding: 90px 0 0 0;
        span{
            display: block;
            text-align: center;
            max-width: 212px;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0 auto 4px;
            color: #999999;
            white-space: nowrap;
            &:first-child {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 8px;
                color: #333333;
            }
        }
    }
    .actions{  
        margin-top: 40px; 
        ul{
            list-style-type: none;
            margin: 0 20px 0 0;
            padding: 0; 
            li{
                padding: 0px 20px;
                line-height: 42px;
                border-top-right-radius: 21px;
                border-bottom-right-radius: 21px;
                color: #666666;
                &.active {
                    background-color: #F2F2F2 ;
                    a{ 
                        color:#1AA9E2 ; 
                        font-family: latoSemibold;
                    }
                }
                a{
                    color: #666666;
                    &:link,&:visited,&:hover,&:active {
                        text-decoration: none;
                    }                    
                }
            }
        }
    }
}`;
	constructor() { }

	ngOnInit() {
	}

}
