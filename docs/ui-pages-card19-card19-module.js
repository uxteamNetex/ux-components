(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card19-card19-module"],{

/***/ "./src/app/ui-pages/card19/card19-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card19/card19-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card19RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card19RoutingModule", function() { return Card19RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card19/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card19/documentation/documentation.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var Card19RoutingModule = /** @class */ (function () {
    function Card19RoutingModule() {
    }
    Card19RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card19RoutingModule);
    return Card19RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card19/card19.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card19/card19.module.ts ***!
  \**************************************************/
/*! exports provided: Card19Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card19Module", function() { return Card19Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card19_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card19-routing.module */ "./src/app/ui-pages/card19/card19-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card19/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card19/examples/examples.component.ts");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var Card19Module = /** @class */ (function () {
    function Card19Module() {
    }
    Card19Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxCardsModule"],
                _card19_routing_module__WEBPACK_IMPORTED_MODULE_3__["Card19RoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            ],
            declarations: [
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"]
            ]
        })
    ], Card19Module);
    return Card19Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card19/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card19/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-card</span> component provides a flexible and extensible content container with multiple variants and options. A card includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card19 component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add skeleton loader.</li>\r\n      <li>Add disabled state.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card19/card19.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card19/card19.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card19/card19.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 19</p>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card19</span> if you need a canvas with title, subtitle , badge or image and a description.\r\n    </p>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card19/card19.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card19/card19.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card19/card19.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card19/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card19/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxOS9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card19/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card19/documentation/documentation.component.ts ***!
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
        this.code1 = "\n    <div class=\"card19\" (click)=\"onClickEvent()\">\n      <div class=\"card19__badge\">\n        <img \n            *ngIf=\"urlImage; else elseBlockBadge\"\n            class=\"utils--img-cover\"\n            src=\"{{ urlImage }}\"\n            alt=\"{{ altImage }}\">\n        <ng-template #elseBlockBadge>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 0 24 24\" width=\"48\">\n            <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n            <path fill=\"#f9f9f9\" d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z\"/>\n          </svg>\n        </ng-template>\n      </div>\n      <div class=\"card19__info utils--padding-left-16\">\n        <p class=\"utils--margin-0 utils--text-12 utils--uppercase utils--text-grey-700\">\n            <span [matTooltip]=\"subtitle\">{{ subtitle }}</span>\n        </p>\n        <p class=\"utils--margin-top-4 utils--margin-bottom-12 utils--text-18 utils--text-grey-800\">\n          <span [matTooltip]=\"title\">{{ title }}</span>\n        </p>\n        <p class=\"card19__info--description utils--text-14 utils--margin-0 utils--text-grey-600 utils--lineclamp-2\">\n          <span [matTooltip]=\"description\">{{ description }}</span>\n        </p>\n      </div>\n      <div class=\"card19__menu\">\n        <ntx-menu-options></ntx-menu-options>\n      </div>\n    </div>\n  ";
        this.code2 = "\n    import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';\n\n    @Component({\n      selector: 'ntx-card19',\n      templateUrl: './card19.component.html',\n      styleUrls: ['./card19.component.scss']\n    })\n    export class Card19Component implements OnInit {\n    \n      @Input() urlImage: string;\n      @Input() altImage: string = 'alternative text'\n      @Input() subtitle: string = 'subtitle';\n      @Input() title: string = 'title';\n      @Input() description: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odio ratione quod, maiores porro accusamus quo vitae architecto iusto adipisci atque earum, veniam est eius delectus ab voluptatum consectetur hic.';\n    \n      @Output() clickEvent = new EventEmitter();\n    \n      constructor() { }\n    \n      ngOnInit() { }\n    \n      public onClickEvent() {\n        console.log('Click event on card19 component');\n        this.clickEvent.emit();\n      }\n    \n    }\n  ";
        this.code3 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"card19\";\n    \n    .#{$block} {\n      @include card-white(132);\n      font-family: Lato;\n      display: flex;\n      padding: 16px 4px 16px 16px;\n      &__badge {\n        background-color: $color-grey-200;\n        border-radius: 4px;\n        width: 92px;\n        height: 92px;\n        flex: none;\n        svg {\n          display: block;\n          margin: auto;\n          height: 100%;\n        }\n      }\n      &__info {\n        width: calc(100% - 92px - 52px);\n        &--description {\n            line-height: 20px;\n        }\n      }\n      &__menu {\n        width: 52px;\n        flex: none;\n        position: relative;\n        top: -10px;\n      }\n    }  \n  ";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card19/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card19/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card19/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card19/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <div class=\"utils--flex\" *ngFor=\"let item of card19\">\r\n      <ntx-card19\r\n        [badge]=\"item.badge\"\r\n        [BlockBadge]=\"item.BlockBadge\"\r\n        [urlImage]=\"item.urlImage\"\r\n        [altImage]=\"item.altImage\"\r\n        [title]=\"item.title\"\r\n        [subtitle]=\"item.subtitle\"\r\n        [description]=\"item.description\"\r\n        [options]=\"item.options\"\r\n        [disabled]=\"item.disabled\"></ntx-card19>\r\n    </div>\r\n    <div class=\"utils--flex\">\r\n      <div *ngFor=\"let item of card19B\">\r\n        <ntx-card19\r\n          [badge]=\"item.badge\"\r\n          [BlockBadge]=\"item.BlockBadge\"\r\n          [urlImage]=\"item.urlImage\"\r\n          [altImage]=\"item.altImage\"\r\n          [title]=\"item.title\"\r\n          [subtitle]=\"item.subtitle\"\r\n          [description]=\"item.description\"\r\n          [options]=\"item.options\"\r\n          [disabled]=\"item.disabled\"></ntx-card19>\r\n      </div>\r\n    </div>\r\n    <div class=\"utils--flex\">\r\n      <div *ngFor=\"let item of card19C\">\r\n        <ntx-card19\r\n          [badge]=\"item.badge\"\r\n          [BlockBadge]=\"item.BlockBadge\"\r\n          [urlImage]=\"item.urlImage\"\r\n          [altImage]=\"item.altImage\"\r\n          [title]=\"item.title\"\r\n          [subtitle]=\"item.subtitle\"\r\n          [description]=\"item.description\"\r\n          [options]=\"item.options\"\r\n          [disabled]=\"item.disabled\"></ntx-card19>\r\n      </div>\r\n    </div>\r\n    <div class=\"utils--flex\">\r\n      <div *ngFor=\"let item of card19D\">\r\n        <ntx-card19\r\n        [badge]=\"item.badge\"\r\n        [BlockBadge]=\"item.BlockBadge\"\r\n        [urlImage]=\"item.urlImage\"\r\n        [altImage]=\"item.altImage\"\r\n        [title]=\"item.title\"\r\n        [subtitle]=\"item.subtitle\"\r\n        [description]=\"item.description\"\r\n        [options]=\"item.options\"\r\n        [action]=\"item.action\"\r\n        [actionTitle]=\"item.actionTitle\"\r\n        [actionIcon]=\"item.actionIcon\"\r\n        [actionColor]=\"item.actionColor\"\r\n        [disabled]=\"item.disabled\"\r\n        [small]=\"item.small\"></ntx-card19>\r\n      </div>\r\n    </div>\r\n    <div class=\"utils--flex\">\r\n      <div *ngFor=\"let item of card19E\">\r\n        <ntx-card19\r\n        [badge]=\"item.badge\"\r\n        [BlockBadge]=\"item.BlockBadge\"\r\n        [urlImage]=\"item.urlImage\"\r\n        [altImage]=\"item.altImage\"\r\n        [title]=\"item.title\"\r\n        [subtitle]=\"item.subtitle\"\r\n        [description]=\"item.description\"\r\n        [options]=\"item.options\"\r\n        [action]=\"item.action\"\r\n        [actionTitle]=\"item.actionTitle\"\r\n        [actionIcon]=\"item.actionIcon\"\r\n        [actionColor]=\"item.actionColor\"\r\n        [disabled]=\"item.disabled\"\r\n        [small]=\"item.small\"\r\n        [xs]=\"item.xs\"></ntx-card19>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card19/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card19/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".utils--flex > * {\n  flex: 1 1 0px;\n  margin: 8px;\n  min-width: 267px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvY2FyZDE5L2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvc3JjXFxhcHBcXHVpLXBhZ2VzXFxjYXJkMTlcXGV4YW1wbGVzXFxleGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvY2FyZDE5L2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7Q0NBSCIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxOS9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51dGlscy0tZmxleHtcclxuICA+KntcclxuICAgIGZsZXg6IDEgMSAwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIG1pbi13aWR0aDogMjY3cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLnV0aWxzLS1mbGV4ID4gKiB7XG4gIGZsZXg6IDEgMSAwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBtaW4td2lkdGg6IDI2N3B4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui-pages/card19/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card19/examples/examples.component.ts ***!
  \****************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        // @ViewChild('grid') grid: MatGridList;
        // gridByBreakpoint = {
        // 	'ntx.xl': 4,
        // 	'ntx.lg': 3,
        // 	'ntx.md': 2,
        // 	'ntx.sm': 2,
        // 	'ntx.xs': 1
        // };
        this.card19 = [];
        this.card19B = [];
        this.card19C = [];
        this.card19D = [];
        this.card19E = [];
        // // tslint:disable-next-line:use-life-cycle-interface
        // ngAfterContentInit() {
        // 	this.observableMedia.asObservable().subscribe((change: MediaChange) => {
        // 		this.grid.cols = this.gridByBreakpoint[change.mqAlias];
        // 	});
        // }
    }
    // constructor(private observableMedia: ObservableMedia) { }
    ExamplesComponent.prototype.ngOnInit = function () {
        this.card19 = [
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/writting.jpg',
                altImage: 'Project image',
                title: 'Disabled state: Project name that could be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle',
                description: 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
                options: '',
                disabled: true
            }
        ];
        this.card19B = [
            {
                badge: true,
                BlockBadge: false,
                urlImage: '',
                altImage: '',
                title: '',
                subtitle: '',
                description: '',
                options: '',
                disabled: false
            },
            {
                badge: true,
                BlockBadge: true,
                urlImage: '',
                altImage: 'Project image',
                title: 'Project name',
                subtitle: 'Subtitle',
                description: 'Babellas definiebas mei.',
                options: '',
                disabled: false
            },
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/writting.jpg',
                altImage: 'Project image',
                title: 'Project name that could be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle with a very long text to see how it works',
                description: 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
                options: 'true',
                disabled: false
            }
        ];
        this.card19C = [
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/bg-01.png',
                altImage: 'Project image',
                title: 'Project name',
                subtitle: 'Subtitle',
                description: 'Babellas definiebas mei.',
                options: '',
                disabled: false
            },
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/bg-02.png',
                altImage: 'Project image',
                title: 'Project name that could be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle with a very long text to see how it works',
                description: 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
                options: 'true',
                disabled: false
            },
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/bg-03.png',
                altImage: 'Project image',
                title: 'Card name',
                subtitle: '',
                description: 'Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
                options: '',
                disabled: false
            },
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/coffee.jpg',
                altImage: 'Project image',
                title: 'Card name',
                subtitle: '',
                description: 'Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.',
                options: 'true',
                disabled: false
            }
        ];
        this.card19D = [
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/google-meet-logo.svg',
                altImage: 'Zoom logo',
                title: 'Small design: Unirse al aula online de Google Meet',
                subtitle: '',
                description: 'meet.google.com/mej-lood-crd/1234567890',
                options: '',
                action: '',
                disabled: false,
                small: true
            },
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/zoom.png',
                altImage: 'Zoom logo',
                title: 'Small design: Unirse al aula online de Zoom',
                subtitle: '',
                description: 'https://zoom.us/j/8333764940440?pwd=Rpkjgsdkfudugsdougsoducgsdouvg',
                options: '',
                action: 'true',
                actionTitle: 'Close',
                actionIcon: 'icon-cross',
                actionColor: '#666',
                disabled: false,
                small: true
            }
        ];
        this.card19E = [
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/google-meet-logo.svg',
                altImage: 'Zoom logo',
                title: 'XS design: Unirse al aula online de Google Meet',
                subtitle: '',
                description: 'meet.google.com/mej-lood-crd/1234567890',
                options: '',
                action: '',
                disabled: false,
                xs: true
            },
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/microsoft-teams-logo.svg',
                altImage: 'Zoom logo',
                title: 'XS design: Unirse al aula online de Microsoft Teams',
                subtitle: '',
                description: 'https://teams.microsoft.com/team/1234567890',
                options: '',
                action: '',
                disabled: false,
                xs: true
            },
            {
                badge: true,
                BlockBadge: true,
                urlImage: 'assets/images/zoom.png',
                altImage: 'Zoom logo',
                title: 'XS design: Unirse al aula online de Zoom',
                subtitle: '',
                description: 'https://zoom.us/j/8333764940440?pwd=Rpkjgsdkfudugsdougsoducgsdouvg',
                options: '',
                action: 'true',
                actionTitle: 'Close',
                actionIcon: 'icon-cross',
                actionColor: '#666',
                disabled: false,
                xs: true
            }
        ];
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card19/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card19/examples/examples.component.scss")]
        })
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card19-card19-module.js.map