(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-paginator-paginator-module"],{

/***/ "./src/app/ui-pages/paginator/documentation/documentation.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-pages/paginator/documentation/documentation.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Paginator</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-paginator</span> component provides pagination component that can be used with tables and/or grid of elements like cards.\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/paginator/documentation/documentation.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-pages/paginator/documentation/documentation.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3BhZ2luYXRvci9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/paginator/documentation/documentation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/paginator/documentation/documentation.component.ts ***!
  \*****************************************************************************/
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
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/paginator/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/paginator/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/paginator/examples/examples.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/paginator/examples/examples.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Paginator with default position' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-paginator>' }}\">\r\n        <ntx-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></ntx-paginator>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Paginator with centered position' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-paginator>' }}\">\r\n        <ntx-paginator  position=\"center\" [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></ntx-paginator>\r\n    </ntx-card-simple>\r\n    <ntx-card-simple\r\n\r\n      title=\"{{'Paginator with right position' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-paginator>' }}\">\r\n        <ntx-paginator position=\"right\" [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></ntx-paginator>\r\n    </ntx-card-simple>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/paginator/examples/examples.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/paginator/examples/examples.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3BhZ2luYXRvci9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/paginator/examples/examples.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-pages/paginator/examples/examples.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");



var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent(observableMedia) {
        this.observableMedia = observableMedia;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ExamplesComponent.prototype.ngOnInit = function () { };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/paginator/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/paginator/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/paginator/paginator-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/paginator/paginator-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PaginatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorRoutingModule", function() { return PaginatorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/paginator/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/paginator/documentation/documentation.component.ts");





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
var PaginatorRoutingModule = /** @class */ (function () {
    function PaginatorRoutingModule() {
    }
    PaginatorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PaginatorRoutingModule);
    return PaginatorRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/paginator/paginator.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/paginator/paginator.module.ts ***!
  \********************************************************/
/*! exports provided: PaginatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorModule", function() { return PaginatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _paginator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginator-routing.module */ "./src/app/ui-pages/paginator/paginator-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/paginator/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/paginator/examples/examples.component.ts");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var projects_netex_ux_components_src_lib_ntx_paginator_ntx_paginator_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.module */ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.module.ts");








var PaginatorModule = /** @class */ (function () {
    function PaginatorModule() {
    }
    PaginatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _paginator_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaginatorRoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxCardsModule"],
                projects_netex_ux_components_src_lib_ntx_paginator_ntx_paginator_module__WEBPACK_IMPORTED_MODULE_7__["NtxPaginatorModule"]
            ],
            exports: []
        })
    ], PaginatorModule);
    return PaginatorModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-paginator-paginator-module.js.map