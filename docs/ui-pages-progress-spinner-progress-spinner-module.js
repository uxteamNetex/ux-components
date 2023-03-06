(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-progress-spinner-progress-spinner-module"],{

/***/ "./src/app/ui-pages/progress-spinner/documentation/documentation.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/ui-pages/progress-spinner/documentation/documentation.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Progress spinner</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-progress-spinner is a circular indicator of progress and activity.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      Color attribute can be configured in each progress spinner, just by adding the atribute <span class=\"documentation-code\">[color]</span> in the html tag. In .ts file we have added this variable as strings so it can be configured.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n        By default, the color should be primary color, and can be used by specifying it in color atribute <span class=\"documentation-code\">[color]=\"'primary'\"</span>.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n      The diameter and the stroke's width of the progress spinner are shown by an atribute in the html. The default values must be those established in the component. Feel free to change them if the designer requires it.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/progress-spinner/documentation/documentation.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ui-pages/progress-spinner/documentation/documentation.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3Byb2dyZXNzLXNwaW5uZXIvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/progress-spinner/documentation/documentation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ui-pages/progress-spinner/documentation/documentation.component.ts ***!
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
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/progress-spinner/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/progress-spinner/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/progress-spinner/examples/examples.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/progress-spinner/examples/examples.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-card-simple title=\"{{'Progress spinner' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-progress-spinner>' }}\">\r\n      <ntx-progress-spinner class=\"utils--margin-top-24 utils--margin-bottom-24\" [color]=\"'primary'\" [diameter]=\"60\" [strokeWidth]=\"3\"></ntx-progress-spinner>\r\n    </ntx-card-simple>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/progress-spinner/examples/examples.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/progress-spinner/examples/examples.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3Byb2dyZXNzLXNwaW5uZXIvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/progress-spinner/examples/examples.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/progress-spinner/examples/examples.component.ts ***!
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
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/progress-spinner/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/progress-spinner/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/progress-spinner/progress-spinner-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ui-pages/progress-spinner/progress-spinner-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProgressSpinnerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerRoutingModule", function() { return ProgressSpinnerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/progress-spinner/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/progress-spinner/documentation/documentation.component.ts");





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
var ProgressSpinnerRoutingModule = /** @class */ (function () {
    function ProgressSpinnerRoutingModule() {
    }
    ProgressSpinnerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProgressSpinnerRoutingModule);
    return ProgressSpinnerRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/progress-spinner/progress-spinner.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/progress-spinner/progress-spinner.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProgressSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerModule", function() { return ProgressSpinnerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _progress_spinner_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-spinner-routing.module */ "./src/app/ui-pages/progress-spinner/progress-spinner-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/progress-spinner/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/progress-spinner/examples/examples.component.ts");







var ProgressSpinnerModule = /** @class */ (function () {
    function ProgressSpinnerModule() {
    }
    ProgressSpinnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _progress_spinner_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProgressSpinnerRoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxProgressSpinnerModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxCardsModule"]
            ]
        })
    ], ProgressSpinnerModule);
    return ProgressSpinnerModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-progress-spinner-progress-spinner-module.js.map