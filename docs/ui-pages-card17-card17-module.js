(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card17-card17-module"],{

/***/ "./src/app/ui-pages/card17/card17-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card17/card17-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card17RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card17RoutingModule", function() { return Card17RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card17_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card17/documentation/documentation.component */ "./src/app/ui-pages/card17/documentation/documentation.component.ts");
/* harmony import */ var _card17_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card17/examples/examples.component */ "./src/app/ui-pages/card17/examples/examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _card17_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _card17_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var Card17RoutingModule = /** @class */ (function () {
    function Card17RoutingModule() {
    }
    Card17RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card17RoutingModule);
    return Card17RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card17/card17.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card17/card17.module.ts ***!
  \**************************************************/
/*! exports provided: Card17Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card17Module", function() { return Card17Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _card17_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card17/documentation/documentation.component */ "./src/app/ui-pages/card17/documentation/documentation.component.ts");
/* harmony import */ var _card17_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card17/examples/examples.component */ "./src/app/ui-pages/card17/examples/examples.component.ts");
/* harmony import */ var _card17_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card17-routing.module */ "./src/app/ui-pages/card17/card17-routing.module.ts");
/* harmony import */ var projects_netex_ux_components_src_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/netex/ux-components/src/public_api */ "./projects/netex/ux-components/src/public_api.ts");









var Card17Module = /** @class */ (function () {
    function Card17Module() {
    }
    Card17Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _card17_routing_module__WEBPACK_IMPORTED_MODULE_7__["Card17RoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                projects_netex_ux_components_src_public_api__WEBPACK_IMPORTED_MODULE_8__["NtxTablesModule"]
            ],
            declarations: [_card17_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _card17_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]],
        })
    ], Card17Module);
    return Card17Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card17/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card17/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-card</span> component provides a flexible and extensible content container with multiple variants and options. A card includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card17 component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add skeleton loader.</li>\r\n      <li>Add disabled state.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card17/card17.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card17/card17.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card17/card17.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 17</p>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card17</span> if you need a canvas with title and action button where insert any other components.\r\n    </p>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card17/card17.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card17/card17.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card17/card17.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card17 component v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Parameterize card content with an optional icon and subtitle.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card17/card17.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card17/card17.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card17/card17.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card17/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card17/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxNy9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card17/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card17/documentation/documentation.component.ts ***!
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
        this.code1 = "\n\t<div class=\"wrapper\">\n\t\t<div class=\"header\">\n\t\t\t<div class=\"text utils--text-20 utils--text-grey-800 utils--truncate\">{{data.title}}</div>\n\t\t\t<a routerLink=\".\">\n\t\t\t\t<span class=\"icon-netex utils--text-24\" [ngClass]=\"data.icon\"></span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"content\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t</div>\n\t";
        this.code2 = "\n\timport { Component, OnInit, Input } from '@angular/core';\n\n\t@Component({\n\t\tselector: 'ntx-card17',\n\t\ttemplateUrl: './card17.component.html',\n\t\tstyleUrls: ['./card17.component.scss']\n\t})\n\texport class Card17Component implements OnInit {\n\t\t@Input() data: any;\n\t\tconstructor() { }\n\t\tngOnInit() {}\n\t}";
        this.code3 = "\n\t@import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n\t.wrapper {\n\t\tborder-radius: 4px;\n\t\tbackground-color: white;\n\t\tmin-width: 320px;\n\t\tpadding: 24px;\n\t\tbox-sizing: border-box;\n\t\tbox-shadow: 0 0 8px 0 rgba(0,0,0,.16) ;\n\t\t.header {\n\t\t\tfont-family: LatoBold;\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\tmargin-bottom: 24px;\n\t\t\ta {\n\t\t\t\tmargin-left: auto;\n\t\t\t\tspan.icon-netex{\n\t\t\t\t\tcolor: $color-primary;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card17/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card17/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card17/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card17/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <mat-grid-list #grid rowHeight=\"250px\" gutterSize=\"0\">\r\n\r\n      <mat-grid-tile>\r\n        <ntx-card17 [data] = \"data5\"></ntx-card17>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <ntx-card17 [data] = \"data6\">\r\n          <h6>Lorem ipsum</h6>\r\n          <p>\r\n          Lorem ipsum dolor sit amet consectetur adipiscing elit lacus habitasse,<br/>\r\n          tincidunt euismod eleifend purus conubia at viverra nullam <br/>\r\n          cursus est nisi tortor sociis risus inceptos erat.\r\n          </p>\r\n        </ntx-card17>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <ntx-card17 [data] = \"data1\">\r\n          <h6>Lorem ipsum</h6>\r\n          <p>\r\n          Lorem ipsum dolor sit amet consectetur adipiscing elit lacus habitasse,<br/>\r\n          tincidunt euismod eleifend purus conubia at viverra nullam <br/>\r\n          cursus est nisi tortor sociis risus inceptos erat.\r\n          </p>\r\n        </ntx-card17>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <ntx-card17 [data] = \"data2\">\r\n          <ntx-basic-table [style]=\"'flat'\"></ntx-basic-table>\r\n        </ntx-card17>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <ntx-card17 [data] = \"data3\">\r\n          <p>\r\n          Lorem ipsum dolor sit amet consectetur adipiscing elit lacus habitasse,<br/>\r\n          tincidunt euismod eleifend purus conubia at viverra nullam <br/>\r\n          cursus est nisi tortor sociis risus inceptos erat.\r\n          </p>\r\n        </ntx-card17>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <ntx-card17 [data] = \"data4\">\r\n          <p>\r\n          Lorem ipsum dolor sit amet consectetur adipiscing elit lacus habitasse,<br/>\r\n          tincidunt euismod eleifend purus conubia at viverra nullam <br/>\r\n          cursus est nisi tortor sociis risus inceptos erat.\r\n          </p>\r\n        </ntx-card17>\r\n      </mat-grid-tile>\r\n\r\n  </mat-grid-list>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card17/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card17/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ntx-card17 {\n  width: 554px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvY2FyZDE3L2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvc3JjXFxhcHBcXHVpLXBhZ2VzXFxjYXJkMTdcXGV4YW1wbGVzXFxleGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvY2FyZDE3L2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsYUFBQTtDQ1BEIiwiZmlsZSI6InNyYy9hcHAvdWktcGFnZXMvY2FyZDE3L2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnBhZ2UtY29udGFpbmVyIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgID4gKiB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5udHgtY2FyZDE3IHtcclxuICB3aWR0aDogNTU0cHg7XHJcbn1cclxuIiwibnR4LWNhcmQxNyB7XG4gIHdpZHRoOiA1NTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui-pages/card17/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card17/examples/examples.component.ts ***!
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




var DATA1 = {
    title: 'Título del panel 1',
    showLink: true,
    icon: 'icon-plus-circle',
};
var DATA2 = {
    title: 'Título del panel 2',
    showLink: true,
    icon: 'icon-pencil'
};
var DATA3 = {
    title: 'Título del panel 3',
    iconTitle: 'icon-calendar',
    iconTitleColor: 'utils--text-grey-700',
};
var DATA4 = {
    title: 'Título del panel 4',
    iconTitle: 'icon-reports',
    iconTitleColor: 'utils--text-grey-700',
    showSubtitle: true,
    subtitle: 'Subtítulo',
};
var DATA5 = {
    title: '',
    showSubtitle: true,
    subtitle: '',
};
var DATA6 = {
    title: 'Título del panel 1',
    showLink: true,
    icon: 'icon-plus-circle',
    disabled: true,
};
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent(observableMedia) {
        this.observableMedia = observableMedia;
        this.gridByBreakpoint = {
            'ntx.xl': 1,
            'ntx.lg': 1,
            'ntx.md': 1,
            'ntx.sm': 1,
            'ntx.xs': 1
        };
        this.data1 = DATA1;
        this.data2 = DATA2;
        this.data3 = DATA3;
        this.data4 = DATA4;
        this.data5 = DATA5;
        this.data6 = DATA6;
    }
    ExamplesComponent.prototype.ngOnInit = function () {
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
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card17/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card17/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card17-card17-module.js.map