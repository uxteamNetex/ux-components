(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card13-card13-module"],{

/***/ "./src/app/ui-pages/card13/card13-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card13/card13-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card13RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card13RoutingModule", function() { return Card13RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card13/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card13/examples/examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var Card13RoutingModule = /** @class */ (function () {
    function Card13RoutingModule() {
    }
    Card13RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card13RoutingModule);
    return Card13RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card13/card13.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card13/card13.module.ts ***!
  \**************************************************/
/*! exports provided: Card13Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card13Module", function() { return Card13Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card13_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card13-routing.module */ "./src/app/ui-pages/card13/card13-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card13/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card13/examples/examples.component.ts");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var Card13Module = /** @class */ (function () {
    function Card13Module() {
    }
    Card13Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _card13_routing_module__WEBPACK_IMPORTED_MODULE_3__["Card13RoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxCardsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]
            ]
        })
    ], Card13Module);
    return Card13Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card13/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card13/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</p>\r\n    <p class=\"documentation-text\">\r\n      ntx-card is a content container for text, photos, and actions in the context of a single subject.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 13</p>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card13</span> if you need a selectable card with title, description and a select to choose an option.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</p>\r\n    <p class=\"documentation-text\">\r\n      In .ts file of each component, we have added a click event to show the style of the cards when they are selected.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card13 component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Parameterize card content.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card13/card13.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card13/card13.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card13/card13.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card13 v4.0.1</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>One-way data binding from input element's <span class=\"documentation-code\">data</span> property.</li>\r\n      <li>Bind <span class=\"documentation-code\">ngClass</span> directive to element's <span class=\"documentation-code\">selected</span> property.</li>\r\n      <li>Use <span class=\"documentation-code\">ntx-form-checkbox-circle</span> with new event binding.</li>\r\n      <li>Simplifying html structure to avoid css overstyling and let better use of white space.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card13/card13.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card13/card13.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card13/card13.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card13/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card13/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxMy9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card13/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card13/documentation/documentation.component.ts ***!
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
        this.code1 = "\n  <mat-card class=\"card13\"\n          [ngClass]=\"{'card-selected': selected}\">\n    <mat-card-header class=\"card13__header\">\n      <mat-card-title class=\"card13__title\">\n          <span class=\"utils--truncate1\" [matTooltip]=\"data.title\">{{ data.title }}</span>\n      </mat-card-title>\n      <ntx-form-checkbox-circle class=\"card13__header--check\"\n            [color]=\"'primary'\"\n            (checkboxChange)=\"onCardCheckboxChange($event)\"\n            [hidden]=\"'true'\"></ntx-form-checkbox-circle>\n    </mat-card-header>\n    <mat-card-content class=\"card13__content\">\n      <mat-card-subtitle class=\"card13__subtitle\">\n        <span class=\"utils--truncate2\" [matTooltip]=\"data.description\">{{ data.description }}</span>\n      </mat-card-subtitle>\n      <ntx-form-select-thin></ntx-form-select-thin>\n    </mat-card-content>\n  </mat-card>";
        this.code2 = "\n  @Component({\n    ...\n  })\n  export class Card13Component implements OnInit {\n\n    data: Data = {\n      title: 'Competency title with a very long text',\n      description: 'Description in a few words that could be one or two lines maximum and then three dots'\n    };\n\n    selected: boolean;\n    ...\n    onCardCheckboxChange(event: MatCheckboxChange) {\n      this.selected = event.checked;\n    }\n\n  }";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card13/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card13/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card13/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card13/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <mat-grid-list #grid rowHeight=\"166px\" gutterSize=\"0\">\r\n\r\n      <mat-grid-tile *ngFor=\"let item of card13\">\r\n        <ntx-card13\r\n          [title]=\"item.title\"\r\n          [subtitle]=\"item.subtitle\"\r\n          [checkbox]=\"item.checkbox\"\r\n          [select]=\"item.select\"\r\n          [disabled]=\"item.disabled\"\r\n          [selected]=\"item.selected\"\r\n        ></ntx-card13>\r\n      </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card13/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card13/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ntx-card13 {\n  width: 100%;\n  margin: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvY2FyZDEzL2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvc3JjXFxhcHBcXHVpLXBhZ2VzXFxjYXJkMTNcXGV4YW1wbGVzXFxleGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvY2FyZDEzL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7Q0NSRCIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxMy9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5ncmlkLXRpbGUtY2FyZDEzIHtcclxuLy8gICBudHgtY2FyZDEzIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuLy8gICAmLm1hdC1ncmlkLXRpbGUgLm1hdC1maWd1cmUge1xyXG4vLyAgICAgbWFyZ2luOiAwIDhweDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbm50eC1jYXJkMTMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuIiwibnR4LWNhcmQxMyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card13/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card13/examples/examples.component.ts ***!
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
        this.card13 = [];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        this.card13 = [
            {
                title: '',
                subtitle: '',
                checkbox: '',
                select: '',
            },
            {
                title: 'Disabled state: Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
                checkbox: 'true',
                select: 'true',
                disabled: true
            },
            {
                title: 'Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle',
                checkbox: '',
                select: 'true',
            },
            {
                title: 'Card title that could not be longer than just one line and will be shown with three dots',
                subtitle: 'Subtitle with a very long text in two lines and three dots to see how it looks like in the card',
                checkbox: 'true',
                select: 'true',
            },
            {
                title: 'Card title',
                subtitle: 'Subtitle',
                checkbox: 'true',
                select: 'true',
            }
        ];
    };
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
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card13/examples/examples.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card13/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card13-card13-module.js.map