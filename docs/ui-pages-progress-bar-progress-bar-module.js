(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-progress-bar-progress-bar-module"],{

/***/ "./src/app/ui-pages/progress-bar/documentation/documentation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar/documentation/documentation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Progress bar</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-progress-bar is a horizontal progress-bar for indicating progress and activity.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      Color attribute can be configured in each progress bar, just by adding the atribute <span class=\"documentation-code\">[color]</span> in the html tag. In .ts file we have added this variable as strings so it can be configured.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n      The primary color can be used by specifying it in color atribute <span class=\"documentation-code\">[color]=\"'primary'\"</span>. For secondary colors, you should use the accent value <span class=\"documentation-code\">[color]=\"'accent'\"</span>.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n      The value of the progress bar is shown by an atribute in the html. Feel free to change that in order to program its current value.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Progress bar v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>We modified css styles in <span class=\"documentation-code\">ntx-progress-bar</span> to remove width limitation.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-progress-bar/progress-bar/progress-bar.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/progress-bar/documentation/documentation.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar/documentation/documentation.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3Byb2dyZXNzLWJhci9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/progress-bar/documentation/documentation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar/documentation/documentation.component.ts ***!
  \********************************************************************************/
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
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/progress-bar/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/progress-bar/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/progress-bar/examples/examples.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar/examples/examples.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container utils--padding-left-16 utils--padding-right-16\">\r\n\r\n    <ntx-card-simple title=\"{{'Progress bar' | uppercase }}\" subtitle=\"{{ '<ntx-progress-bar>' }}\">\r\n      <ntx-progress-bar class=\"utils--margin-top-24 utils--margin-bottom-24\" [color]=\"'primary'\" [value]=\"'0'\"></ntx-progress-bar>\r\n      <ntx-progress-bar class=\"utils--margin-top-24 utils--margin-bottom-24\" [color]=\"'primary'\" [value]=\"'52'\"></ntx-progress-bar>\r\n      <ntx-progress-bar class=\"utils--margin-top-24 utils--margin-bottom-24\" [color]=\"'success'\" [value]=\"'78'\"></ntx-progress-bar>\r\n      <ntx-progress-bar class=\"utils--margin-top-24 utils--margin-bottom-24\" [color]=\"'error'\" [value]=\"'34'\"></ntx-progress-bar>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Progress bar dark' | uppercase }}\" subtitle=\"{{ '<ntx-progress-bar-dark>' }}\" class=\"black-bg\">\r\n      <ntx-progress-bar-dark class=\"utils--margin-top-24 utils--margin-bottom-24\" color=\"primary\" [value]=\"'0'\"></ntx-progress-bar-dark>\r\n      <ntx-progress-bar-dark class=\"utils--margin-top-24 utils--margin-bottom-24\" color=\"primary\" [value]=\"'52'\"></ntx-progress-bar-dark>\r\n      <ntx-progress-bar-dark class=\"utils--margin-top-24 utils--margin-bottom-24\" color=\"success\" [value]=\"'78'\"></ntx-progress-bar-dark>\r\n      <ntx-progress-bar-dark class=\"utils--margin-top-24 utils--margin-bottom-24\" color=\"error\" [value]=\"'34'\" [requiredValue]=\"'65'\"></ntx-progress-bar-dark>\r\n      <ntx-progress-bar-dark class=\"utils--margin-top-24 utils--margin-bottom-24\" color=\"green-lime\" [value]=\"'64'\" [requiredValue]=\"'35'\"></ntx-progress-bar-dark>\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/progress-bar/examples/examples.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar/examples/examples.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ntx-progress-bar, ntx-progress-bar-dark {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvcHJvZ3Jlc3MtYmFyL2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvc3JjXFxhcHBcXHVpLXBhZ2VzXFxwcm9ncmVzcy1iYXJcXGV4YW1wbGVzXFxleGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvcHJvZ3Jlc3MtYmFyL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtDQ0RIIiwiZmlsZSI6InNyYy9hcHAvdWktcGFnZXMvcHJvZ3Jlc3MtYmFyL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5udHgtcHJvZ3Jlc3MtYmFyLCBudHgtcHJvZ3Jlc3MtYmFyLWRhcmt7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iLCJudHgtcHJvZ3Jlc3MtYmFyLCBudHgtcHJvZ3Jlc3MtYmFyLWRhcmsge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui-pages/progress-bar/examples/examples.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar/examples/examples.component.ts ***!
  \**********************************************************************/
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
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/progress-bar/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/progress-bar/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/progress-bar/progress-bar-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar/progress-bar-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProgressBarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarRoutingModule", function() { return ProgressBarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/progress-bar/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/progress-bar/documentation/documentation.component.ts");





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
var ProgressBarRoutingModule = /** @class */ (function () {
    function ProgressBarRoutingModule() {
    }
    ProgressBarRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProgressBarRoutingModule);
    return ProgressBarRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/progress-bar/progress-bar.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar/progress-bar.module.ts ***!
  \**************************************************************/
/*! exports provided: ProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function() { return ProgressBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-bar-routing.module */ "./src/app/ui-pages/progress-bar/progress-bar-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/progress-bar/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/progress-bar/examples/examples.component.ts");








var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxProgressBarModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgressBarRoutingModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
            ],
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_7__["ExamplesComponent"]]
        })
    ], ProgressBarModule);
    return ProgressBarModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-progress-bar-progress-bar-module.js.map