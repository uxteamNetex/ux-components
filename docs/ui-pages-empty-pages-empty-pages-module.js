(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-empty-pages-empty-pages-module"],{

/***/ "./src/app/ui-pages/empty-pages/documentation/documentation.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/ui-pages/empty-pages/documentation/documentation.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Empty pages</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-empty-page</span> component is used when we want to show the user that the content of the page is empty at that moment.\r\n    </p>\r\n    <p>This component is always composed of the icon representing the content that will be shown on the screen, a title and a description.</p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Empty pages v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Modification of <span class=\"documentation-code\">ntx-empty-page</span> component to let change icon and texts.</li>\r\n      <li>Add the option to add an action button.</li>\r\n      <li>Make the description an optional item.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                ux-components/src/lib/ntx-empty-pages/empty-page/empty-page.component.html\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n          </mat-expansion-panel>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                ux-components/src/lib/ntx-empty-pages/empty-page/empty-page.component.ts\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/empty-pages/documentation/documentation.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/ui-pages/empty-pages/documentation/documentation.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2VtcHR5LXBhZ2VzL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/empty-pages/documentation/documentation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-pages/empty-pages/documentation/documentation.component.ts ***!
  \*******************************************************************************/
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
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/empty-pages/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/empty-pages/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/empty-pages/empty-pages-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui-pages/empty-pages/empty-pages-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: EmptyPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPagesRoutingModule", function() { return EmptyPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/empty-pages/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/empty-pages/documentation/documentation.component.ts");





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
var EmptyPagesRoutingModule = /** @class */ (function () {
    function EmptyPagesRoutingModule() {
    }
    EmptyPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmptyPagesRoutingModule);
    return EmptyPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/empty-pages/empty-pages.module.ts":
/*!************************************************************!*\
  !*** ./src/app/ui-pages/empty-pages/empty-pages.module.ts ***!
  \************************************************************/
/*! exports provided: EmptyPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPagesModule", function() { return EmptyPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _empty_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty-pages-routing.module */ "./src/app/ui-pages/empty-pages/empty-pages-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/empty-pages/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/empty-pages/examples/examples.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");








var EmptyPagesModule = /** @class */ (function () {
    function EmptyPagesModule() {
    }
    EmptyPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _empty_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmptyPagesRoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__["NtxEmptyPagesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
            ]
        })
    ], EmptyPagesModule);
    return EmptyPagesModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/empty-pages/examples/examples.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/empty-pages/examples/examples.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <div class=\"utils--flex utils--vertical-align\">\r\n      <ntx-empty-page [item] =\"emptyPages\"></ntx-empty-page>\r\n      <ntx-empty-page [item] =\"emptyPages2\"></ntx-empty-page>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/empty-pages/examples/examples.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/empty-pages/examples/examples.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2VtcHR5LXBhZ2VzL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/empty-pages/examples/examples.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/empty-pages/examples/examples.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EMPTYPAGES = {
    actions: [
        {
            icon: 'icon-users',
            title: 'Here is the title of the issue',
            description: 'Here is the description of the issue that cant have more than 2 lines of text.',
            button: '',
        }
    ]
};
var EMPTYPAGES2 = {
    actions: [
        {
            icon: 'icon-envelope',
            title: 'Here is the title of the issue',
            description: '',
            button: true,
        }
    ]
};
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.emptyPages = EMPTYPAGES;
        this.emptyPages2 = EMPTYPAGES2;
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/empty-pages/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/empty-pages/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-empty-pages-empty-pages-module.js.map