(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card23-card23-module"],{

/***/ "./src/app/ui-pages/card23/card23-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card23/card23-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card23RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card23RoutingModule", function() { return Card23RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card23/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card23/documentation/documentation.component.ts");





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
var Card23RoutingModule = /** @class */ (function () {
    function Card23RoutingModule() {
    }
    Card23RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card23RoutingModule);
    return Card23RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card23/card23.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card23/card23.module.ts ***!
  \**************************************************/
/*! exports provided: Card23Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card23Module", function() { return Card23Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card23_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card23-routing.module */ "./src/app/ui-pages/card23/card23-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/card23/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/card23/examples/examples.component.ts");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var Card23Module = /** @class */ (function () {
    function Card23Module() {
    }
    Card23Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _card23_routing_module__WEBPACK_IMPORTED_MODULE_3__["Card23RoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxCardsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]
            ]
        })
    ], Card23Module);
    return Card23Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card23/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card23/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  documentation works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card23/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card23/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQyMy9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card23/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card23/documentation/documentation.component.ts ***!
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
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card23/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card23/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card23/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card23/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <div class=\"utils--flex\">\r\n      <div class=\"utils--padding-8\">\r\n        <ntx-card23></ntx-card23>\r\n      </div>\r\n    </div>\r\n    <div class=\"utils--flex\">\r\n      <div class=\"utils--padding-8\"><ntx-card23 urlImage =\"assets/images/card23-badge-01.png\" stColor=\"#008189\"></ntx-card23></div>\r\n      <div class=\"utils--padding-8\"><ntx-card23 urlImage =\"assets/images/bg-01.png\" stColor=\"#BC465D\"></ntx-card23></div>\r\n    </div>\r\n    <div class=\"utils--flex\">\r\n      <div class=\"utils--padding-8\"><ntx-card23 urlImage=\"assets/images/bg-02.png\" stColor=\"#80458C\"></ntx-card23></div>\r\n      <div class=\"utils--padding-8\"><ntx-card23 urlImage=\"assets/images/card23-badge-02.png\" stColor=\"#D43900\"></ntx-card23></div>\r\n      <div class=\"utils--padding-8\"><ntx-card23 urlImage=\"assets/images/bg-03.png\" stColor=\"#0070AB\"></ntx-card23></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card23/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card23/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQyMy9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/card23/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card23/examples/examples.component.ts ***!
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
            'ntx.xl': 5,
            'ntx.lg': 4,
            'ntx.md': 3,
            'ntx.sm': 2,
            'ntx.xs': 1
        };
        this.card22 = [
            {
                image: '',
                title: '',
                subtitle: '',
            },
            {
                image: '',
                title: '',
                subtitle: '',
            }
        ];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.card22 = [
                {
                    image: 'assets/images/writting.jpg',
                    title: 'Project name that could be longer than just one line and will be shown with three dots',
                    subtitle: '13 contenidos',
                },
                {
                    image: 'assets/images/background-profile-header.jpg',
                    title: 'Project name',
                    subtitle: '13 contenidos con texto muy largo',
                }
            ];
        }, 5000);
    };
    // tslint:disable-next-line:use-life-cycle-interface
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
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card23/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card23/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card23-card23-module.js.map