(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card16-card16-module"],{

/***/ "./src/app/ui-pages/card16/card16-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card16/card16-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card16RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card16RoutingModule", function() { return Card16RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card16_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card16/documentation/documentation.component */ "./src/app/ui-pages/card16/documentation/documentation.component.ts");
/* harmony import */ var _card16_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card16/examples/examples.component */ "./src/app/ui-pages/card16/examples/examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _card16_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _card16_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var Card16RoutingModule = /** @class */ (function () {
    function Card16RoutingModule() {
    }
    Card16RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card16RoutingModule);
    return Card16RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card16/card16.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card16/card16.module.ts ***!
  \**************************************************/
/*! exports provided: Card16Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card16Module", function() { return Card16Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _card16_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card16/documentation/documentation.component */ "./src/app/ui-pages/card16/documentation/documentation.component.ts");
/* harmony import */ var _card16_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card16/examples/examples.component */ "./src/app/ui-pages/card16/examples/examples.component.ts");
/* harmony import */ var _card16_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card16-routing.module */ "./src/app/ui-pages/card16/card16-routing.module.ts");








var Card16Module = /** @class */ (function () {
    function Card16Module() {
    }
    Card16Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _card16_routing_module__WEBPACK_IMPORTED_MODULE_7__["Card16RoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
            ],
            declarations: [_card16_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _card16_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]],
        })
    ], Card16Module);
    return Card16Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card16/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card16/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-card</span> component provides a flexible and extensible content container with multiple variants and options. A card includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card16 component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add skeleton loader.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card16/card16.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card16/card16.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card16/card16.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 16</p>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card16</span> if you need to represent in a card a step to follow.\r\n    </p>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card16/card16.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card16/card16.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card16/card16.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card16/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card16/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxNi9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card16/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card16/documentation/documentation.component.ts ***!
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
        this.code1 = "\n\t<div class=\"wrapper utils--text-14 utils--bc-white\" [ngClass]=\"data.state\">\n\t<span class=\"icon-netex icon-check-circle-solid utils--text-28\"></span>\n\t<span class=\"icon-netex icon-editor-circle utils--text-32\"></span>\n\t<div class=\"text utils--text-grey-700 utils--truncate\">{{data.description}}</div>\n\t<div class=\"link utils--truncate\">\n\t\t<a href=\"#\">link</a>\n\t</div>\n\t</div>\n\t";
        this.code2 = "\n\timport { Component, OnInit, Input } from '@angular/core';\n\n\t@Component({\n\t\tselector: 'ntx-card16',\n\t\ttemplateUrl: './card16.component.html',\n\t\tstyleUrls: ['./card16.component.scss']\n\t})\n\texport class Card16Component implements OnInit {\n\n\t\t@Input() data: any;\n\n\t\tconstructor() { }\n\n\t\tngOnInit() {}\n\n\t}";
        this.code3 = "\n\t@import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n\t.wrapper {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\twidth: 620px;\n\t\theight: 60px;\n\t\tborder-radius: 30px;\n\t\tpadding: 0 44px 0 20px;\n\t\tbox-sizing: border-box;\n\t\t&.next {\n\t\t\topacity: 0.6;\n\t\t\tspan.icon-check-circle-solid, .link{\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t\t&.current {\n\t\t\tbox-shadow: 0 3px 6px rgba(0,0,0,.16);\n\t\t\tspan.icon-check-circle-solid {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t\t&.completed {\n\t\t\tspan.icon-editor-circle, .link{\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t\t.icon-check-circle-solid {\n\t\t\tcolor: $color-primary;\n\t\t}\n\t\t.icon-editor-circle {\n\t\t\tcolor: $color-grey-600;\n\t\t}\n\t\t.text{\n\t\t\tpadding: 0 20px;\n\t\t\tfont-family: LatoMedium;\n\t\t}\n\t\t.link {\n\t\t\tmargin-left: auto;\n\t\t\tfont-family: Lato;\n\t\t}\n\t}";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card16/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card16/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card16/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card16/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n\r\n  <div class=\"page-container\">\r\n      <ntx-card16 [data]=\"data\" *ngFor=\"let data of data\"></ntx-card16>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card16/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card16/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.page-container > * {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvY2FyZDE2L2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvc3JjXFxhcHBcXHVpLXBhZ2VzXFxjYXJkMTZcXGV4YW1wbGVzXFxleGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvY2FyZDE2L2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7Q0NDSDtBREFHO0VBQ0ksb0JBQUE7Q0NFUCIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxNi9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICA+ICoge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbn0iLCIucGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2UtY29udGFpbmVyID4gKiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/ui-pages/card16/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card16/examples/examples.component.ts ***!
  \****************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DATA = [
    {
        checked: false,
        description: '',
        state: 'completed'
    },
    {
        checked: true,
        description: 'Add a competency framework and at least one competency',
        state: 'completed'
    },
    {
        check: true,
        description: 'Create a job role and assign it to several people',
        state: 'current',
        link: 'link'
    },
    {
        check: true,
        description: 'Another step to realize',
        state: 'next'
    }
];
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.data = DATA;
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card16/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card16/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card16-card16-module.js.map