(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-drag-and-drop-drag-and-drop-module"],{

/***/ "./src/app/ui-pages/drag-and-drop/documentation/documentation.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/ui-pages/drag-and-drop/documentation/documentation.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Drag and drop</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-drag-and-drop is a component used to upload files by clicking in the grey area or by dragging files and dropping them in the grey area.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      For the moment this component only includes the click upload option.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Drag and drop added v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Modification to let add multiple files and show scroll bar if necessary</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                ux-components/src/lib/ntx-drad-and-drop/drag-and-drop-added/drag-and-drop-added.component.html\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n          </mat-expansion-panel>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                ux-components/src/lib/ntx-drad-and-drop/drag-and-drop-added/drag-and-drop-added.component.ts\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n          </mat-expansion-panel>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                ux-components/src/lib/ntx-drad-and-drop/drag-and-drop-added/drag-and-drop-added.component.scss\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/drag-and-drop/documentation/documentation.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/ui-pages/drag-and-drop/documentation/documentation.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2RyYWctYW5kLWRyb3AvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/drag-and-drop/documentation/documentation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ui-pages/drag-and-drop/documentation/documentation.component.ts ***!
  \*********************************************************************************/
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
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/drag-and-drop/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/drag-and-drop/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/drag-and-drop/drag-and-drop-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui-pages/drag-and-drop/drag-and-drop-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DragAndDropRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropRoutingModule", function() { return DragAndDropRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/drag-and-drop/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/drag-and-drop/documentation/documentation.component.ts");





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
var DragAndDropRoutingModule = /** @class */ (function () {
    function DragAndDropRoutingModule() {
    }
    DragAndDropRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DragAndDropRoutingModule);
    return DragAndDropRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/drag-and-drop/drag-and-drop.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/drag-and-drop/drag-and-drop.module.ts ***!
  \****************************************************************/
/*! exports provided: DragAndDropModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropModule", function() { return DragAndDropModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _drag_and_drop_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drag-and-drop-routing.module */ "./src/app/ui-pages/drag-and-drop/drag-and-drop-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/drag-and-drop/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/drag-and-drop/examples/examples.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var DragAndDropModule = /** @class */ (function () {
    function DragAndDropModule() {
    }
    DragAndDropModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxButtonsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxDragAndDropModule"],
                _drag_and_drop_routing_module__WEBPACK_IMPORTED_MODULE_4__["DragAndDropRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ],
            declarations: [
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]
            ]
        })
    ], DragAndDropModule);
    return DragAndDropModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/drag-and-drop/examples/examples.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/ui-pages/drag-and-drop/examples/examples.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple title=\"{{'Drag and drop' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-drag-and-drop>' }}\">\r\n      <ntx-drag-and-drop></ntx-drag-and-drop>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Drag and drop added' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-drag-and-drop-added>' }}\">\r\n      <ntx-drag-and-drop-added [filesAdded]=\"filesAdded\"></ntx-drag-and-drop-added>\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/drag-and-drop/examples/examples.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/ui-pages/drag-and-drop/examples/examples.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2RyYWctYW5kLWRyb3AvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/drag-and-drop/examples/examples.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/drag-and-drop/examples/examples.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.filesAdded = [
            {
                name: 'pdf_file_with_a_very_long_text_lorem_ipsum dolor.pdf',
                icon: 'icon-file-pdf'
            },
            {
                name: 'zip_file_01',
                icon: 'icon-file-zip'
            },
            {
                name: 'pdf_file_01',
                icon: 'icon-file-pdf'
            },
            {
                name: 'zip_file_02',
                icon: 'icon-file-zip'
            }
        ];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/drag-and-drop/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/drag-and-drop/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-drag-and-drop-drag-and-drop-module.js.map