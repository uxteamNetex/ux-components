(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-table-evaluation-table-evaluation-module"],{

/***/ "./src/app/ui-pages/table-evaluation/documentation/documentation.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/ui-pages/table-evaluation/documentation/documentation.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Evaluation table</h1>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-evaluation-table</span> a is component based on Angular data-table that can be used to display rows of data. This component is a custom table that have selection options and pagination.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n        The content of the table is being shown in its own .ts file.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Evaluation table v4.3.2</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add <span class=\"documentation-code\">matSortActive</span> and <span class=\"documentation-code\">matSortDisableClear</span> directives to improve sorting.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-tables/evaluation-table/evaluation-table.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/table-evaluation/documentation/documentation.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ui-pages/table-evaluation/documentation/documentation.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3RhYmxlLWV2YWx1YXRpb24vZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/table-evaluation/documentation/documentation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ui-pages/table-evaluation/documentation/documentation.component.ts ***!
  \************************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.code1 = "\n  ...\n\n  <mat-table \n    matSort \n    matSortActive=\"receivers\"\n    matSortDisableClear \n    [dataSource]=\"dataSource\" \n    class=\"table-selectable__table mat-elevation-z8\"> \n  \n    ...\n\n  ";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/table-evaluation/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/table-evaluation/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/table-evaluation/examples/examples.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/table-evaluation/examples/examples.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-evaluation-table></ntx-evaluation-table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/table-evaluation/examples/examples.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/table-evaluation/examples/examples.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3RhYmxlLWV2YWx1YXRpb24vZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/table-evaluation/examples/examples.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/table-evaluation/examples/examples.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/table-evaluation/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/table-evaluation/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/table-evaluation/table-evaluation-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ui-pages/table-evaluation/table-evaluation-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TableEvaluationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEvaluationRoutingModule", function() { return TableEvaluationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/table-evaluation/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/table-evaluation/documentation/documentation.component.ts");





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
var TableEvaluationRoutingModule = /** @class */ (function () {
    function TableEvaluationRoutingModule() {
    }
    TableEvaluationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TableEvaluationRoutingModule);
    return TableEvaluationRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/table-evaluation/table-evaluation.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/table-evaluation/table-evaluation.module.ts ***!
  \**********************************************************************/
/*! exports provided: TableEvaluationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEvaluationModule", function() { return TableEvaluationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _table_evaluation_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-evaluation-routing.module */ "./src/app/ui-pages/table-evaluation/table-evaluation-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/table-evaluation/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/table-evaluation/examples/examples.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var TableEvaluationModule = /** @class */ (function () {
    function TableEvaluationModule() {
    }
    TableEvaluationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _table_evaluation_routing_module__WEBPACK_IMPORTED_MODULE_4__["TableEvaluationRoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ]
        })
    ], TableEvaluationModule);
    return TableEvaluationModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-table-evaluation-table-evaluation-module.js.map