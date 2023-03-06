(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-tabs-tabs-module"],{

/***/ "./src/app/ui-pages/tabs/documentation/tabs-doc.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/tabs/documentation/tabs-doc.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Tabs</h1>\r\n    <p class=\"documentation-text\">\r\n      organize content into separate views where only one view can be visible at a time. Each tab's label is shown in the tab header and the active tab's label is designated with the animated ink bar.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Tabs types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are two types of tabs: <span class=\"documentation-code\">ntx-tabs</span> which is not tied to any particular router and <span class=\"documentation-code\">ntx-tabs-navigation</span> which is used to switch between views within a single route.\r\n    </p>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/tabs/documentation/tabs-doc.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/tabs/documentation/tabs-doc.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3RhYnMvZG9jdW1lbnRhdGlvbi90YWJzLWRvYy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/tabs/documentation/tabs-doc.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-pages/tabs/documentation/tabs-doc.component.ts ***!
  \*******************************************************************/
/*! exports provided: TabsDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsDocComponent", function() { return TabsDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsDocComponent = /** @class */ (function () {
    function TabsDocComponent() {
    }
    TabsDocComponent.prototype.ngOnInit = function () {
    };
    TabsDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs-doc',
            template: __webpack_require__(/*! ./tabs-doc.component.html */ "./src/app/ui-pages/tabs/documentation/tabs-doc.component.html"),
            styles: [__webpack_require__(/*! ./tabs-doc.component.scss */ "./src/app/ui-pages/tabs/documentation/tabs-doc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsDocComponent);
    return TabsDocComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/tabs/examples/tabs-examples.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/tabs/examples/tabs-examples.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-card-simple\r\n      title=\"{{'Tabs' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-tabs>' }}\">\r\n        <ntx-tabs></ntx-tabs>\r\n    </ntx-card-simple>\r\n    <ntx-card-simple\r\n      title=\"{{'Navigation tabs' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-tabs-navigation>' }}\">\r\n        <ntx-tabs-navigation></ntx-tabs-navigation>\r\n    </ntx-card-simple>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/tabs/examples/tabs-examples.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/tabs/examples/tabs-examples.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3RhYnMvZXhhbXBsZXMvdGFicy1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/tabs/examples/tabs-examples.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-pages/tabs/examples/tabs-examples.component.ts ***!
  \*******************************************************************/
/*! exports provided: TabsExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsExamplesComponent", function() { return TabsExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsExamplesComponent = /** @class */ (function () {
    function TabsExamplesComponent() {
    }
    TabsExamplesComponent.prototype.ngOnInit = function () {
    };
    TabsExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs-examples',
            template: __webpack_require__(/*! ./tabs-examples.component.html */ "./src/app/ui-pages/tabs/examples/tabs-examples.component.html"),
            styles: [__webpack_require__(/*! ./tabs-examples.component.scss */ "./src/app/ui-pages/tabs/examples/tabs-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsExamplesComponent);
    return TabsExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/tabs/tabs-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-pages/tabs/tabs-routing.module.ts ***!
  \******************************************************/
/*! exports provided: TabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRoutingModule", function() { return TabsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documentation_tabs_doc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation/tabs-doc.component */ "./src/app/ui-pages/tabs/documentation/tabs-doc.component.ts");
/* harmony import */ var _examples_tabs_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/tabs-examples.component */ "./src/app/ui-pages/tabs/examples/tabs-examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_tabs_examples_component__WEBPACK_IMPORTED_MODULE_4__["TabsExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_tabs_doc_component__WEBPACK_IMPORTED_MODULE_3__["TabsDocComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/tabs/tabs.module.ts":
/*!**********************************************!*\
  !*** ./src/app/ui-pages/tabs/tabs.module.ts ***!
  \**********************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _examples_tabs_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/tabs-examples.component */ "./src/app/ui-pages/tabs/examples/tabs-examples.component.ts");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/ui-pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _documentation_tabs_doc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/tabs-doc.component */ "./src/app/ui-pages/tabs/documentation/tabs-doc.component.ts");







var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxTabsModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsRoutingModule"]
            ],
            declarations: [
                _examples_tabs_examples_component__WEBPACK_IMPORTED_MODULE_4__["TabsExamplesComponent"],
                _documentation_tabs_doc_component__WEBPACK_IMPORTED_MODULE_6__["TabsDocComponent"]
            ]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-tabs-tabs-module.js.map