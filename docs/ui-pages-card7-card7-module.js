(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card7-card7-module"],{

/***/ "./src/app/ui-pages/card7/card7-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/card7/card7-routing.module.ts ***!
  \********************************************************/
/*! exports provided: Card7RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card7RoutingModule", function() { return Card7RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card7/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card7/documentation/documentation.component.ts");





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
var Card7RoutingModule = /** @class */ (function () {
    function Card7RoutingModule() {
    }
    Card7RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card7RoutingModule);
    return Card7RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card7/card7.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/card7/card7.module.ts ***!
  \************************************************/
/*! exports provided: Card7Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card7Module", function() { return Card7Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card7_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card7-routing.module */ "./src/app/ui-pages/card7/card7-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card7/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card7/examples/examples.component.ts");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var Card7Module = /** @class */ (function () {
    function Card7Module() {
    }
    Card7Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxCardsModule"],
                _card7_routing_module__WEBPACK_IMPORTED_MODULE_3__["Card7RoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ],
            declarations: [
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"]
            ]
        })
    ], Card7Module);
    return Card7Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card7/documentation/documentation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/card7/documentation/documentation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-card</span> component provides a flexible and extensible content container with multiple variants and options. A card includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 7</p>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card7</span> whenever you need to show in a card a one line title with a two lines description below, and a menu that displays list of options.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card7 component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Parameterize card content.</li>\r\n      <li>Add skeleton loader.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card7/card7.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card7/card7.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card7/card7.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card7 v4.0.X</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>One-way data binding from input element's <span class=\"documentation-code\">data</span> property.</li>\r\n      <li>Add new classes <span class=\"documentation-code\">truncate, truncate1, truncate2</span> to add ellipsis.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card7/card7.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card7/card7.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card7/card7.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card7 v4.0.1</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes to display grid of cards correctly.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card7/card7.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card7/documentation/documentation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/card7/documentation/documentation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQ3L2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/card7/documentation/documentation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui-pages/card7/documentation/documentation.component.ts ***!
  \*************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.code1 = "\n  <mat-card class=\"card7\">\n    <mat-card-header class=\"card7__header\">\n      <mat-card-title class=\"card7__title\">\n        <span class=\"utils--truncate1\" [matTooltip]=\"data.title\">{{ data.title }}</span>\n      </mat-card-title>\n      <ntx-menu-options></ntx-menu-options>\n    </mat-card-header>\n    <mat-card-content class=\"card7__content\">\n      <mat-card-subtitle class=\"card7__subtitle\">\n        <span class=\"utils--truncate2\" [matTooltip]=\"data.description\">{{ data.description }}</span>\n      </mat-card-subtitle>\n    </mat-card-content>\n  </mat-card>\n  ";
        this.code2 = "\n  @Component({\n    ...\n  })\n  export class Card7Component implements OnInit {\n\n    data: any = {\n      title: 'Competency title with a very long text',\n      description: 'Description in a few words that could be one or two lines maximum and then three dots'\n    };\n\n    selected: boolean;\n    ...\n  }";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card7/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card7/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card7/examples/examples.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/card7/examples/examples.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <mat-grid-list #grid rowHeight=\"120px\" gutterSize=\"0\">\r\n\r\n      <mat-grid-tile *ngFor=\"let item of card7\">\r\n        <ntx-card7\r\n          [title]=\"item.title\"\r\n          [subtitle]=\"item.subtitle\"\r\n          [options]=\"item.options\"\r\n          [disabled]=\"item.disabled\"\r\n          [selected]=\"item.selected\"\r\n        ></ntx-card7>\r\n      </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card7/examples/examples.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/card7/examples/examples.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ntx-card7 {\n  width: 100%;\n  margin: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvY2FyZDcvZXhhbXBsZXMvQzpcXHByb3llY3Rvc1xcdXgtY29tcG9uZW50cy9zcmNcXGFwcFxcdWktcGFnZXNcXGNhcmQ3XFxleGFtcGxlc1xcZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQ3L2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQ3L2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnR4LWNhcmQ3IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcbiIsIm50eC1jYXJkNyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card7/examples/examples.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui-pages/card7/examples/examples.component.ts ***!
  \***************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent(observableMedia) {
        this.observableMedia = observableMedia;
        this.gridByBreakpoint = {
            'ntx.xl': 4,
            'ntx.lg': 3,
            'ntx.md': 2,
            'ntx.sm': 2,
            'ntx.xs': 1
        };
        this.card7 = [];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        this.card7 = [
            {
                title: '',
                subtitle: '',
                options: '',
            },
            {
                title: 'Disabled state: Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
                options: '',
                disabled: true
            },
            {
                title: 'Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle',
                options: '',
            },
            {
                title: 'Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle',
                options: 'true',
            },
            {
                title: 'Card title',
                subtitle: 'Subtitle',
                options: 'true',
            },
            {
                title: 'Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle',
                options: '',
                selected: true
            }
        ];
    };
    // tslint:disable-next-line:use-life-cycle-interface
    ExamplesComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.observableMedia.asObservable().subscribe(function (change) {
            _this.grid.cols = _this.gridByBreakpoint[change.mqAlias];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridList"])
    ], ExamplesComponent.prototype, "grid", void 0);
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card7/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card7/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card7-card7-module.js.map