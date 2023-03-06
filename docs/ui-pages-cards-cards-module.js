(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-cards-cards-module"],{

/***/ "./src/app/ui-pages/cards/cards-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/cards/cards-routing.module.ts ***!
  \********************************************************/
/*! exports provided: CardsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsRoutingModule", function() { return CardsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_cards_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/cards-examples.component */ "./src/app/ui-pages/cards/examples/cards-examples.component.ts");
/* harmony import */ var _documentation_cards_doc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/cards-doc.component */ "./src/app/ui-pages/cards/documentation/cards-doc.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_cards_examples_component__WEBPACK_IMPORTED_MODULE_3__["CardsExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_cards_doc_component__WEBPACK_IMPORTED_MODULE_4__["CardsDocComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var CardsRoutingModule = /** @class */ (function () {
    function CardsRoutingModule() {
    }
    CardsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CardsRoutingModule);
    return CardsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/cards/cards.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/cards/cards.module.ts ***!
  \************************************************/
/*! exports provided: CardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsModule", function() { return CardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _cards_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards-routing.module */ "./src/app/ui-pages/cards/cards-routing.module.ts");
/* harmony import */ var _documentation_cards_doc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentation/cards-doc.component */ "./src/app/ui-pages/cards/documentation/cards-doc.component.ts");
/* harmony import */ var _examples_cards_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/cards-examples.component */ "./src/app/ui-pages/cards/examples/cards-examples.component.ts");







var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxCardsModule"],
                _cards_routing_module__WEBPACK_IMPORTED_MODULE_4__["CardsRoutingModule"]
            ],
            declarations: [
                _documentation_cards_doc_component__WEBPACK_IMPORTED_MODULE_5__["CardsDocComponent"],
                _examples_cards_examples_component__WEBPACK_IMPORTED_MODULE_6__["CardsExamplesComponent"]
            ]
        })
    ], CardsModule);
    return CardsModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/cards/documentation/cards-doc.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/cards/documentation/cards-doc.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-card is a content container for text, photos, and actions in the context of a single subject.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Simple card</h1>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card-simple</span> if you need to include a content inside a card. If you want to specify a title and a subtitle in the card, just add the title and subtitle attributes.\r\n    </p>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/cards/documentation/cards-doc.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/cards/documentation/cards-doc.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmRzL2RvY3VtZW50YXRpb24vY2FyZHMtZG9jLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/cards/documentation/cards-doc.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/cards/documentation/cards-doc.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardsDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsDocComponent", function() { return CardsDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsDocComponent = /** @class */ (function () {
    function CardsDocComponent() {
    }
    CardsDocComponent.prototype.ngOnInit = function () {
    };
    CardsDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards-doc',
            template: __webpack_require__(/*! ./cards-doc.component.html */ "./src/app/ui-pages/cards/documentation/cards-doc.component.html"),
            styles: [__webpack_require__(/*! ./cards-doc.component.scss */ "./src/app/ui-pages/cards/documentation/cards-doc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsDocComponent);
    return CardsDocComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/cards/examples/cards-examples.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/cards/examples/cards-examples.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple title=\"{{'Simple card' | uppercase }}\" subtitle=\"{{ '<ntx-card-simple>' }}\">\r\n      <ntx-card-simple>Content</ntx-card-simple>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Simple card with title and subtitle' | uppercase }}\" subtitle=\"{{ '<ntx-card-simple>' }}\">\r\n      <ntx-card-simple title=\"Title\" subtitle=\"Subtitle\">Content</ntx-card-simple>\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/cards/examples/cards-examples.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/cards/examples/cards-examples.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmRzL2V4YW1wbGVzL2NhcmRzLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/cards/examples/cards-examples.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/cards/examples/cards-examples.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardsExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsExamplesComponent", function() { return CardsExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsExamplesComponent = /** @class */ (function () {
    function CardsExamplesComponent() {
        this.cardTypes = [
            {
                label: "simple",
                selector: "<ntx-card-simple>"
            },
            {
                label: "con título",
                selector: "<ntx-card-title>"
            }
        ];
    }
    CardsExamplesComponent.prototype.ngOnInit = function () {
    };
    CardsExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards-examples',
            template: __webpack_require__(/*! ./cards-examples.component.html */ "./src/app/ui-pages/cards/examples/cards-examples.component.html"),
            styles: [__webpack_require__(/*! ./cards-examples.component.scss */ "./src/app/ui-pages/cards/examples/cards-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsExamplesComponent);
    return CardsExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-cards-cards-module.js.map