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
	</div>
	<div class="content">
		<span matTooltip="{{user.name}}">{{user.name}}</span> 
		<span matTooltip="{{user.mail}}">{{user.mail}}</span>
		<span matTooltip="{{user.phone}}">{{user.phone}}</span>
		<span matTooltip="{{user.location}}">{{user.location}}</span>
	</div>
	<div class="actions" *ngIf="user.actions.length">
		<ul>
			<li *ngFor="let action of user.actions">
			<a routerLink="{{action.link}}">{{action.label}}</a>
			</li>
		</ul>
	</div>
</div>`
;
code2 = `
import { Component, OnInit, Input } from '@angular/core';
@Component({
	selector: 'ntx-card15',
	templateUrl: './card15.component.html',
	styleUrls: ['./card15.component.scss']
})
export class Card15Component implements OnInit {

	@Input() user: any;

	constructor() { }

	ngOnInit() {
	}

}`;

code3 = `
.wrapper {
    border-radius: 4px;
    font-family: Lato;
    padding-bottom: 32px;
    width: 300px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.16);
    .header, .avatar {
        background-position: center;
        background-size: cover;
    }
    .header{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height: 130px;
        background-color: #F2F2F2;
    }
    .avatar {
        background-color: #cccccc;
        border-radius: 75px;
        height: 150px;
        margin: 0 auto;
        position: relative;
        top: 55px;
        width: 150px;
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
                &:hover {
                    background-color: #F2F2F2 ;
                }
                a{
                    color: #666666;
                    &:link,&:visited,&:hover,&:active {
                        text-decoration: none;
                    }
                    &:active {
                        color:#1AA9E2 ;
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
