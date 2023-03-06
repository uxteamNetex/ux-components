(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card15-card15-module"],{

/***/ "./src/app/ui-pages/card15/card15-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card15/card15-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card15RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card15RoutingModule", function() { return Card15RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card15_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card15/documentation/documentation.component */ "./src/app/ui-pages/card15/documentation/documentation.component.ts");
/* harmony import */ var _card15_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card15/examples/examples.component */ "./src/app/ui-pages/card15/examples/examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _card15_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _card15_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var Card15RoutingModule = /** @class */ (function () {
    function Card15RoutingModule() {
    }
    Card15RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card15RoutingModule);
    return Card15RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card15/card15.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card15/card15.module.ts ***!
  \**************************************************/
/*! exports provided: Card15Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card15Module", function() { return Card15Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _card15_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card15/documentation/documentation.component */ "./src/app/ui-pages/card15/documentation/documentation.component.ts");
/* harmony import */ var _card15_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card15/examples/examples.component */ "./src/app/ui-pages/card15/examples/examples.component.ts");
/* harmony import */ var _card15_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card15-routing.module */ "./src/app/ui-pages/card15/card15-routing.module.ts");








var Card15Module = /** @class */ (function () {
    function Card15Module() {
    }
    Card15Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_card15_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _card15_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _card15_routing_module__WEBPACK_IMPORTED_MODULE_7__["Card15RoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"]
            ]
        })
    ], Card15Module);
    return Card15Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card15/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card15/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-card</span> component provides a flexible and extensible content container with multiple variants and options. A card includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card15 component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add skeleton loader and disabled state.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card15/card15.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card15/card15.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card15/card15.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 15 v4.1.3</p>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card15</span> if you need to show in a card typical user information, a group of actions and a badge.\r\n    </p>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card15/card15.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card15/card15.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card15/card15.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            {{ code3 }}\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card15/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card15/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxNS9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card15/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card15/documentation/documentation.component.ts ***!
  \**************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.code1 = "\n<div class=\"wrapper\">\n  <div class=\"header\" [ngStyle]=\"{'background-image':'url(' + user.background + ')'}\">\n    <div class=\"avatar\" [ngStyle]=\"{'background-image':'url(' + user.avatar + ')'}\"></div>\n    <div *ngIf=\"badge\" class=\"badge utils--text-white\" [ngStyle]=\"{'background-color': badge?.bgColor }\">\n      <div class=\"utils--text-12\">{{badge?.label}}</div>\n      <div class=\"utils--text-32\">{{badge?.value}}</div>\n    </div>\n  </div>\n  <div class=\"content\">\n    <span matTooltip=\"{{user.name}}\">{{user.name}}</span> \n    <span matTooltip=\"{{user.mail}}\">{{user.mail}}</span>\n    <span *ngIf=\"user.phone\" matTooltip=\"{{user.phone}}\">{{user.phone}}</span>\n    <span *ngIf=\"user.location\" matTooltip=\"{{user.location}}\">{{user.location}}</span>\n  </div>\n  <div class=\"actions\" *ngIf=\"actions && actions.length > 0\">\n    <ul>\n      <li \n      *ngFor=\"let action of actions; let i = index\"\n      [ngClass]=\"{'active': selectedIndex === i}\" >\n        <a href=\"javascript:void(0);\" (click)=\"onClickEvent(i)\">{{action.label}}</a>\n      </li>\n    </ul>\n  </div>\n</div>";
        this.code2 = "\nimport { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';\n\n@Component({\n\tselector: 'ntx-card15',\n\ttemplateUrl: './card15.component.html',\n\tstyleUrls: ['./card15.component.scss']\n})\nexport class Card15Component implements OnInit {\n\n\t@Input() user: any;\n\t@Input() badge: any;\n\t@Input() actions: any[];\n\n\t@Output() clickEvent = new EventEmitter();\n\n\tselectedIndex: number;\n\n\tconstructor() { }\n\n\tngOnInit() {\n\t\tthis.selectedIndex = this.actions ? this.actions.findIndex(action => action.active ) : undefined;\n\t}\n\n\tpublic onClickEvent(i) {\n\t\tthis.clickEvent.emit();\n\t\tthis.selectedIndex = i;\n\t}\n\n}";
        this.code3 = "\n.wrapper {\n    border-radius: 4px;\n    font-family: Lato;\n    padding-bottom: 32px;\n    width: 300px;\n    box-shadow: 0 0 8px 0 rgba(0,0,0,.16);\n    background-color: white;\n    .header, .avatar {\n        background-position: center;\n        background-size: cover;\n    }\n    .header{\n        border-top-left-radius: 4px;\n        border-top-right-radius: 4px;\n        height: 130px;\n        background-color: #F2F2F2;\n        .avatar {\n            background-color: #cccccc;\n            border-radius: 75px;\n            height: 150px;\n            margin: 0 auto;\n            position: relative;\n            top: 55px;\n            width: 150px;\n        }\n        .badge {\n            width: 78px;\n            height: 78px;\n            border-radius: 50%;\n            background-color: #999; \n            position: relative;\n            top: -120px;\n            left: 40px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n    }\n    .content{\n        font-size: 14px;\n        padding: 90px 0 0 0;\n        span{\n            display: block;\n            text-align: center;\n            max-width: 212px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            margin: 0 auto 4px;\n            color: #999999;\n            white-space: nowrap;\n            &:first-child {\n                font-size: 24px;\n                font-weight: bold;\n                margin-bottom: 8px;\n                color: #333333;\n            }\n        }\n    }\n    .actions{  \n        margin-top: 40px; \n        ul{\n            list-style-type: none;\n            margin: 0 20px 0 0;\n            padding: 0; \n            li{\n                padding: 0px 20px;\n                line-height: 42px;\n                border-top-right-radius: 21px;\n                border-bottom-right-radius: 21px;\n                color: #666666;\n                &.active {\n                    background-color: #F2F2F2 ;\n                    a{ \n                        color:#1AA9E2 ; \n                        font-family: latoSemibold;\n                    }\n                }\n                a{\n                    color: #666666;\n                    &:link,&:visited,&:hover,&:active {\n                        text-decoration: none;\n                    }                    \n                }\n            }\n        }\n    }\n}";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card15/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card15/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card15/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card15/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout page-layout-card15\">\r\n\r\n  <div class=\"page-container\">\r\n    <ntx-card-simple\r\n      class=\"utils--margin-8\"\r\n      title=\"{{'CARD 15 (skeleton loader)'}}\"\r\n      subtitle=\"{{ '<ntx-card15 [user]=\\'user\\'>' }}\">\r\n        <ntx-card15 [user]=\"user4\"></ntx-card15>\r\n    </ntx-card-simple>\r\n    <ntx-card-simple\r\n      class=\"utils--margin-8\"\r\n      title=\"{{'CARD 15 (variant 01)'}}\"\r\n      subtitle=\"{{ '<ntx-card15 [user]=\\'user\\'>' }}\">\r\n        <ntx-card15 [user]=\"user1\"></ntx-card15>\r\n    </ntx-card-simple>\r\n    <ntx-card-simple\r\n      class=\"utils--margin-8\"\r\n      title=\"{{'CARD 15 (variant 02)'}}\"\r\n      subtitle=\"{{ '<ntx-card15 [badge]=\\'badge\\' [user]=\\'user\\'>' }}\">\r\n        <ntx-card15 [badge]=\"badge2\" [user] =\"user2\"></ntx-card15>\r\n    </ntx-card-simple>\r\n    <ntx-card-simple\r\n      class=\"utils--margin-8\"\r\n      title=\"{{'CARD 15 (variant 03)'}}\"\r\n      subtitle=\"{{ '<ntx-card15 [actions]=\\'actions\\' [badge]=\\'badge\\' [user]=\\'user\\'>' }}\">\r\n        <ntx-card15 [actions]=\"actions3\" [badge]=\"badge3\" [user] =\"user3\"></ntx-card15>\r\n    </ntx-card-simple>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card15/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card15/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-layout.page-layout-card15 .page-container {\n  display: flex;\n  justify-content: space-around;\n}\n.page-layout.page-layout-card15 .page-container ntx-card-simple mat-card {\n  margin-top: 0;\n}\n.page-layout.page-layout-card15 .page-container ntx-card-simple:last-child ntx-card15 {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvY2FyZDE1L2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvc3JjXFxhcHBcXHVpLXBhZ2VzXFxjYXJkMTVcXGV4YW1wbGVzXFxleGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvY2FyZDE1L2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0NDREw7QURHRztFQUNJLGNBQUE7Q0NEUDtBREdHO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0NDRFAiLCJmaWxlIjoic3JjL2FwcC91aS1wYWdlcy9jYXJkMTUvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1sYXlvdXQge1xyXG4gICYucGFnZS1sYXlvdXQtY2FyZDE1e1xyXG4gICAgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgICAucGFnZS1jb250YWluZXIgbnR4LWNhcmQtc2ltcGxlIG1hdC1jYXJke1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAucGFnZS1jb250YWluZXIgbnR4LWNhcmQtc2ltcGxlOmxhc3QtY2hpbGQgbnR4LWNhcmQxNXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGFnZS1sYXlvdXQucGFnZS1sYXlvdXQtY2FyZDE1IC5wYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnBhZ2UtbGF5b3V0LnBhZ2UtbGF5b3V0LWNhcmQxNSAucGFnZS1jb250YWluZXIgbnR4LWNhcmQtc2ltcGxlIG1hdC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5wYWdlLWxheW91dC5wYWdlLWxheW91dC1jYXJkMTUgLnBhZ2UtY29udGFpbmVyIG50eC1jYXJkLXNpbXBsZTpsYXN0LWNoaWxkIG50eC1jYXJkMTUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui-pages/card15/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card15/examples/examples.component.ts ***!
  \****************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var USER4 = {
    background: '',
    avatar: '',
    name: '',
    mail: '',
};
var USER1 = {
    background: 'assets/images/bg-01.png',
    avatar: 'assets/images/user_female_04.jpg',
    name: 'Bernice Greaves',
    mail: 'berni.graves@nydailynews.com',
    disabled: true
};
var USER2 = {
    background: 'assets/images/bg-02.png',
    avatar: 'assets/images/user_male_01.png',
    name: 'Jerry Basile',
    mail: 'jerry.basile@netexlearning.com',
    phone: '+506 222 208 1399',
    location: 'Maleevsk'
};
var USER3 = {
    background: 'assets/images/bg-03.png',
    avatar: 'assets/images/user_female_01.jpg',
    name: 'Suzanne Axtens',
    mail: 'saxtens6@canalblog.com',
    phone: '+55 350 126 9913',
    location: 'Salanegara'
};
var ACTIONS1 = [
    {
        label: 'Profile',
        link: '#',
        active: true
    },
    {
        label: 'Evaluation',
        link: '#',
        active: false
    },
    {
        label: 'Another action',
        link: '#',
        active: false
    }
];
var ACTIONS2 = [
    {
        label: 'Profile',
        link: '#',
        active: true
    },
    {
        label: 'Evaluation',
        link: '#',
        active: false
    },
    {
        label: 'Another action',
        link: '#',
        active: false
    }
];
var ACTIONS3 = [
    {
        label: 'Profile',
        link: '#',
        active: true
    },
    {
        label: 'Evaluation',
        link: '#',
        active: false
    },
    {
        label: 'Another action',
        link: '#',
        active: false
    }
];
var BADGE1 = {
    bgColor: '#1FAE96',
    label: 'TBPi',
    value: '68',
};
var BADGE2 = {
    bgColor: '#d65292',
    label: 'XYZ',
    value: '29',
};
var BADGE3 = {
    bgColor: '#1FAE96',
    label: 'TBPi',
    value: '68',
};
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.user1 = USER1;
        this.actions1 = ACTIONS1;
        this.user2 = USER2;
        this.user3 = USER3;
        this.badge1 = BADGE1;
        this.badge2 = BADGE2;
        this.badge3 = BADGE3;
        this.actions2 = ACTIONS2;
        this.actions3 = ACTIONS3;
        this.user4 = USER4;
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card15/examples/examples.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card15/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card15-card15-module.js.map