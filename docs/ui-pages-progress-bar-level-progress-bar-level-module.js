(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-progress-bar-level-progress-bar-level-module"],{

/***/ "./src/app/ui-pages/progress-bar-level/documentation/documentation.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar-level/documentation/documentation.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Progress bar level</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-progress-bar is a horizontal progress-bar for indicating progress and activity.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      Color attribute can be configured in each progress bar, just by adding the atribute <span class=\"documentation-code\">[color]</span> in the html tag. In .ts file we have added this variable as strings so it can be configured.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n      The primary color can be used by specifying it in color atribute <span class=\"documentation-code\">[color]=\"'primary'\"</span>. For secondary colors, you should use the accent value <span class=\"documentation-code\">[color]=\"'accent'\"</span>.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n      The value of the progress bar is shown by an atribute in the html. Feel free to change that in order to program its current value.\r\n    </p>\r\n\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-progress-bar/progress-bar-level/progress-bar-level.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-progress-bar/progress-bar-level/progress-bar-level.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-progress-bar/progress-bar-level/progress-bar-level.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/progress-bar-level/documentation/documentation.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar-level/documentation/documentation.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3Byb2dyZXNzLWJhci1sZXZlbC9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/progress-bar-level/documentation/documentation.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar-level/documentation/documentation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.code1 = "\n    <div class=\"progress-bar-level\">\n    <div\n      *ngIf=\"requiredValue\"\n      class=\"progress-bar-level__required-value-mark utils--margin-bottom-4\"\n      [style.left]=\"requiredValue + '%'\"\n    ></div>\n    <mat-progress-bar\n      class=\"progress-bar-level__bar\"\n      [ngClass]=\"requiredValue ? value >= requiredValue ? 'success' : 'error' : color\"\n      [value]=\"value\"\n      [mode]=\"mode\"\n    ></mat-progress-bar>\n    </div>\n  ";
        this.code2 = "\n    import { Component, OnInit } from '@angular/core';\n    import { Input } from '@angular/core';\n    import { ViewEncapsulation } from '@angular/core';\n\n    @Component({\n    selector: 'ntx-progress-bar-level',\n    templateUrl: './progress-bar-level.component.html',\n    styleUrls: ['./progress-bar-level.component.scss'],\n    encapsulation: ViewEncapsulation.None\n    })\n    export class ProgressBarLevelComponent implements OnInit {\n\n    @Input() color: string;\n    @Input() value: number;\n    @Input() requiredValue: number;\n    @Input() mode: 'determinate' | 'indeterminate' | 'buffer' | 'query' = 'determinate';\n\n\tconstructor() { }\n\n\tngOnInit() {\n\t}\n}\n  ";
        this.code3 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"progress-bar-level\";\n\n    .#{$block} {\n\n    .#{$block}__required-value-mark {\n      width: 0;\n      position: relative;\n      transform: translateX(-5px);\n      border-width: 5px 5px 0 5px;\n      border-color: $color-grey-400 transparent transparent;\n      border-style: solid;\n      transition: left 0.25s ease-in-out;\n    }\n\n    .#{$block}__bar {\n      &.mat-progress-bar {\n        border-radius: 2px;\n        // height: 4px;\n\n        &.success {\n          .mat-progress-bar-fill:after {\n            background-color: $color-success;\n          }\n        }\n\n        &.error {\n          .mat-progress-bar-fill:after {\n            background-color: $color-error;\n          }\n        }\n\n        .mat-progress-bar-buffer {\n          background-color: $color-grey-200;\n        }\n      }\n    }\n    }\n  ";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/progress-bar-level/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/progress-bar-level/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/progress-bar-level/examples/examples.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar-level/examples/examples.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container utils--padding-left-16 utils--padding-right-16\">\r\n    <ntx-card-simple title=\"{{'Progress bar with level mark' | uppercase }}\" subtitle=\"{{ '<ntx-progress-bar-level [value]=0>' }}\">\r\n      <ntx-progress-bar-level [value]=\"'0'\"></ntx-progress-bar-level>\r\n    </ntx-card-simple>\r\n    <ntx-card-simple title=\"{{'Progress bar with level mark' | uppercase }}\" subtitle=\"{{ '<ntx-progress-bar-level [value]=0 [requiredValue]=50>' }}\">\r\n      <ntx-progress-bar-level [value]=\"'0'\" [requiredValue]=\"'50'\"></ntx-progress-bar-level>\r\n    </ntx-card-simple>\r\n    <ntx-card-simple title=\"{{'Progress bar with level mark' | uppercase }}\" subtitle=\"{{ '<ntx-progress-bar-level [value]=34 [requiredValue]=40>' }}\">\r\n      <ntx-progress-bar-level [value]=\"'34'\" [requiredValue]=\"'40'\"></ntx-progress-bar-level>\r\n    </ntx-card-simple>\r\n    <ntx-card-simple title=\"{{'Progress bar with level mark' | uppercase }}\" subtitle=\"{{ '<ntx-progress-bar-level [value]=80 [requiredValue]=65>' }}\">\r\n      <ntx-progress-bar-level [value]=\"'80'\" [requiredValue]=\"'65'\"></ntx-progress-bar-level>\r\n    </ntx-card-simple>\r\n    <ntx-card-simple title=\"{{'Progress bar with level mark' | uppercase }}\" subtitle=\"{{ '<ntx-progress-bar-level [value]=75>' }}\">\r\n      <ntx-progress-bar-level [value]=\"'75'\" ></ntx-progress-bar-level>\r\n    </ntx-card-simple>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/progress-bar-level/examples/examples.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar-level/examples/examples.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3Byb2dyZXNzLWJhci1sZXZlbC9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/progress-bar-level/examples/examples.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar-level/examples/examples.component.ts ***!
  \****************************************************************************/
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
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/progress-bar-level/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/progress-bar-level/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/progress-bar-level/progress-bar-level-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar-level/progress-bar-level-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProgressBarLevelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarLevelRoutingModule", function() { return ProgressBarLevelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/progress-bar-level/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/progress-bar-level/documentation/documentation.component.ts");





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
var ProgressBarLevelRoutingModule = /** @class */ (function () {
    function ProgressBarLevelRoutingModule() {
    }
    ProgressBarLevelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProgressBarLevelRoutingModule);
    return ProgressBarLevelRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/progress-bar-level/progress-bar-level.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/progress-bar-level/progress-bar-level.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProgressBarLevelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarLevelModule", function() { return ProgressBarLevelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _progress_bar_level_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-bar-level-routing.module */ "./src/app/ui-pages/progress-bar-level/progress-bar-level-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/progress-bar-level/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/progress-bar-level/examples/examples.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var ProgressBarLevelModule = /** @class */ (function () {
    function ProgressBarLevelModule() {
    }
    ProgressBarLevelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxProgressBarModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxCardsModule"],
                _progress_bar_level_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProgressBarLevelRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ],
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]]
        })
    ], ProgressBarLevelModule);
    return ProgressBarLevelModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-progress-bar-level-progress-bar-level-module.js.map