(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-detail-panel-detail-panel-module"],{

/***/ "./src/app/ui-pages/detail-panel/detail-panel-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/detail-panel/detail-panel-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: DetailPanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPanelRoutingModule", function() { return DetailPanelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/detail-panel/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/detail-panel/documentation/documentation.component.ts");





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
var DetailPanelRoutingModule = /** @class */ (function () {
    function DetailPanelRoutingModule() {
    }
    DetailPanelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DetailPanelRoutingModule);
    return DetailPanelRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/detail-panel/detail-panel.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui-pages/detail-panel/detail-panel.module.ts ***!
  \**************************************************************/
/*! exports provided: DetailPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPanelModule", function() { return DetailPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _detail_panel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-panel-routing.module */ "./src/app/ui-pages/detail-panel/detail-panel-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/detail-panel/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/detail-panel/examples/examples.component.ts");
/* harmony import */ var _entity_detail_panel_entity_detail_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entity-detail-panel/entity-detail-panel.component */ "./src/app/ui-pages/detail-panel/entity-detail-panel/entity-detail-panel.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");









var DetailPanelModule = /** @class */ (function () {
    function DetailPanelModule() {
    }
    DetailPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"], _entity_detail_panel_entity_detail_panel_component__WEBPACK_IMPORTED_MODULE_6__["EntityDetailPanelComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _detail_panel_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailPanelRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxButtonsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxTabsModule"],
            ],
            entryComponents: [
                _entity_detail_panel_entity_detail_panel_component__WEBPACK_IMPORTED_MODULE_6__["EntityDetailPanelComponent"]
            ]
        })
    ], DetailPanelModule);
    return DetailPanelModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/detail-panel/documentation/documentation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/ui-pages/detail-panel/documentation/documentation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Detail Panel</h1>\r\n    <p class=\"documentation-text\">\r\n        This component is used to add collapsible side content alongside some primary content, Sidenav floats over the primary content which is covered by a backdrop. <span class=\"documentation-code\">app-entity-detail-panel</span> shows us the detail of an entity in the header of a panel.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Panels widths</h1>\r\n    <p class=\"documentation-text\">\r\n      These panels can be displayed in four different sizes: 100%, 80%, 60% and 40%, depending on the content needed by each panel.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/detail-panel/documentation/documentation.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ui-pages/detail-panel/documentation/documentation.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2RldGFpbC1wYW5lbC9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/detail-panel/documentation/documentation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ui-pages/detail-panel/documentation/documentation.component.ts ***!
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
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/detail-panel/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/detail-panel/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/detail-panel/examples/examples.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ui-pages/detail-panel/examples/examples.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple title=\"Detail panel\" subtitle=\"Click on the button to open the panel\">\r\n      <div class=\"panels__container\">\r\n        <button mat-raised-button *ngFor=\"let width of panelWidths\"\r\n                color=\"primary\"\r\n                class=\"panels__button\"\r\n                (click) = \"onButtonClick(width)\">\r\n                {{ 'Detail panel' | uppercase }}\r\n        </button>\r\n      </div>\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/detail-panel/examples/examples.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/ui-pages/detail-panel/examples/examples.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2RldGFpbC1wYW5lbC9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/detail-panel/examples/examples.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/detail-panel/examples/examples.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/panel.service */ "./src/app/shared/services/panel.service.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _entity_detail_panel_entity_detail_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity-detail-panel/entity-detail-panel.component */ "./src/app/ui-pages/detail-panel/entity-detail-panel/entity-detail-panel.component.ts");





var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent(panelService, componentFactoryResolver, injector) {
        this.panelService = panelService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.panelWidths = [80];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent.prototype.onButtonClick = function (width) {
        this.panelService.panelWidth(width);
        var data = this.panelService.createData({ width: width });
        var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_entity_detail_panel_entity_detail_panel_component__WEBPACK_IMPORTED_MODULE_4__["EntityDetailPanelComponent"], undefined, data);
        this.entitydetailpanelComponent = this.panelService.attachComponent(portal, this.componentFactoryResolver, this.injector);
        this.panelService.open();
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/detail-panel/examples/examples.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/detail-panel/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_panel_service__WEBPACK_IMPORTED_MODULE_2__["PanelService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-detail-panel-detail-panel-module.js.map