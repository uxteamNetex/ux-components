(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card14-card14-module"],{

/***/ "./src/app/ui-pages/card14/card14-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card14/card14-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card14RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card14RoutingModule", function() { return Card14RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card14_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card14/documentation/documentation.component */ "./src/app/ui-pages/card14/documentation/documentation.component.ts");
/* harmony import */ var _card14_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card14/examples/examples.component */ "./src/app/ui-pages/card14/examples/examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _card14_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _card14_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var Card14RoutingModule = /** @class */ (function () {
    function Card14RoutingModule() {
    }
    Card14RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card14RoutingModule);
    return Card14RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card14/card14.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card14/card14.module.ts ***!
  \**************************************************/
/*! exports provided: Card14Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card14Module", function() { return Card14Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card14_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card14/documentation/documentation.component */ "./src/app/ui-pages/card14/documentation/documentation.component.ts");
/* harmony import */ var _card14_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card14/examples/examples.component */ "./src/app/ui-pages/card14/examples/examples.component.ts");
/* harmony import */ var _card14_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card14-routing.module */ "./src/app/ui-pages/card14/card14-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");








var Card14Module = /** @class */ (function () {
    function Card14Module() {
    }
    Card14Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_card14_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"], _card14_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _card14_routing_module__WEBPACK_IMPORTED_MODULE_5__["Card14RoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__["NtxCardsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"]
            ]
        })
    ], Card14Module);
    return Card14Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card14/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card14/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-card</span> component provides a flexible and extensible content container with multiple variants and options. A card includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.\r\n    </p>\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 14</p>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card14</span> whenever you need to show in a card a one line title with a two lines description below, and a check icon with label.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card14 component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Parameterize card content.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card14/card14.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card14/card14.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card14/card14.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card14/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card14/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxNC9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card14/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card14/documentation/documentation.component.ts ***!
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
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card14/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card14/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card14/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card14/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <mat-grid-list #grid rowHeight=\"120px\" gutterSize=\"0\">\r\n\r\n      <mat-grid-tile *ngFor=\"let item of card14\">\r\n        <ntx-card14\r\n          [title]=\"item.title\"\r\n          [subtitle]=\"item.subtitle\"\r\n          [state]=\"item.state\"\r\n          [stateIcon]=\"item.stateIcon\"\r\n          [stateText]=\"item.stateText\"\r\n        ></ntx-card14>\r\n      </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card14/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card14/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ntx-card14 {\n  width: 100%;\n  margin: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvY2FyZDE0L2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvc3JjXFxhcHBcXHVpLXBhZ2VzXFxjYXJkMTRcXGV4YW1wbGVzXFxleGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvY2FyZDE0L2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxNC9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm50eC1jYXJkMTQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn0iLCJudHgtY2FyZDE0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/ui-pages/card14/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card14/examples/examples.component.ts ***!
  \****************************************************************/
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
        this.card14 = [];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        this.card14 = [
            {
                title: '',
                subtitle: '',
                state: '',
                stateIcon: '',
                stateText: '',
            },
            {
                title: 'Disabled state: Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
                state: true,
                stateIcon: 'icon-check',
                stateText: 'Added',
            },
            {
                title: 'Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle',
                state: true,
                stateIcon: 'icon-check',
                stateText: 'Added',
            },
            {
                title: 'Card title',
                subtitle: 'Subtitle',
                state: true,
                stateIcon: 'icon-trash',
                stateText: 'deleted',
            },
            {
                title: 'Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle',
                state: true,
                stateIcon: 'icon-cross',
                stateText: 'failed',
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
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card14/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card14/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card14-card14-module.js.map