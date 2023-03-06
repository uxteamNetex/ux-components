(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-card18-card18-module"],{

/***/ "./src/app/ui-pages/card18/card18-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/card18/card18-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Card18RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card18RoutingModule", function() { return Card18RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card18_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card18/documentation/documentation.component */ "./src/app/ui-pages/card18/documentation/documentation.component.ts");
/* harmony import */ var _card18_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card18/examples/examples.component */ "./src/app/ui-pages/card18/examples/examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _card18_examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _card18_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var Card18RoutingModule = /** @class */ (function () {
    function Card18RoutingModule() {
    }
    Card18RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Card18RoutingModule);
    return Card18RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/card18/card18.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-pages/card18/card18.module.ts ***!
  \**************************************************/
/*! exports provided: Card18Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card18Module", function() { return Card18Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _card18_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card18/documentation/documentation.component */ "./src/app/ui-pages/card18/documentation/documentation.component.ts");
/* harmony import */ var _card18_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card18/examples/examples.component */ "./src/app/ui-pages/card18/examples/examples.component.ts");
/* harmony import */ var _card18_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card18-routing.module */ "./src/app/ui-pages/card18/card18-routing.module.ts");
/* harmony import */ var projects_netex_ux_components_src_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/netex/ux-components/src/public_api */ "./projects/netex/ux-components/src/public_api.ts");









var Card18Module = /** @class */ (function () {
    function Card18Module() {
    }
    Card18Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _card18_routing_module__WEBPACK_IMPORTED_MODULE_7__["Card18RoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                projects_netex_ux_components_src_public_api__WEBPACK_IMPORTED_MODULE_8__["NtxTablesModule"]
            ],
            declarations: [_card18_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _card18_examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]],
        })
    ], Card18Module);
    return Card18Module;
}());



/***/ }),

/***/ "./src/app/ui-pages/card18/documentation/documentation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card18/documentation/documentation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Cards</p>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-card</span> component provides a flexible and extensible content container with multiple variants and options. A card includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card18 component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add skeleton loader.</li>\r\n      <li>Add disabled state.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card18/card18.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card18/card18.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card18/card18.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Card 18</p>\r\n    <p class=\"documentation-text\">\r\n      Use <span class=\"documentation-code\">ntx-card18</span> if you need a canvas with title, subtitle and a progress bar with level marker.\r\n    </p>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card18/card18.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card18/card18.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-cards/card18/card18.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card18/documentation/documentation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-pages/card18/documentation/documentation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxOC9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/card18/documentation/documentation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/card18/documentation/documentation.component.ts ***!
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
        this.code1 = "\n\t\t<div class=\"card18 utils--padding-16\">\n\t\t<div class=\"card18__avatar\">\n\t\t<img \n\t\t\t*ngIf=\"data.avatar; else elseBlock\"\n\t\t\tsrc=\"{{data.avatar}}\"\n\t\t\talt=\"{{data.title + '&#32;image'}}\">\n\t\t<ng-template #elseBlock>\n\t\t\t<span \n\t\t\t[style.background-color]=\"data.color\"\n\t\t\tclass=\"card18__avatar--alias\">{{data.title | slice:0:1}}</span>\n\t\t</ng-template>\n\t\t</div>\n\t\t<div class=\"card18__title utils--truncate\">\n\t\t<span matTooltip=\"{{data.title}}\" class=\"utils--text-18 utils--text-grey-800\">{{data.title}}</span>\n\t\t</div>\n\t\t<div class=\"card18__progress-bar\">\n\t\t<ntx-progress-bar-level value=\"{{data.progress.value}}\" requiredValue=\"{{data.progress.requiredValue}}\"></ntx-progress-bar-level>\n\t\t</div>\n\t\t<div *ngIf=\"data.progress.level\" class=\"card18__level\">\n\t\t<span>{{data.progress.level}}</span>\n\t\t</div>\n\t\t<div class=\"card18__subtitle utils--truncate\">\n\t\t<span matTooltip=\"{{data.subtitle}}\" class=\"utils--text-14 utils--text-grey-600\">{{data.subtitle}}</span>\n\t\t</div>\n\t\t</div>\n\t";
        this.code2 = "\n\t\timport { Component, OnInit, Input } from '@angular/core';\n\n\t\texport interface Data {\n\t\t\tavatar: string;\n\t\t\tprogress: {\n\t\t\tvalue: number,\n\t\t\trequiredValue: number,\n\t\t\tlevel: string\n\t\t};\n\t\t\tcolor: string;\n\t\t\ttitle: string;\n\t\t\tsubtitle: string;\n\t\t}\n\n\t\t@Component({\n\t\tselector: 'ntx-card18',\n\t\ttemplateUrl: './card18.component.html',\n\t\tstyleUrls: ['./card18.component.scss']\n\t\t})\n\t\texport class Card18Component implements OnInit {\n\n\t\t@Input() data: Data;\n\n\t\tconstructor() { }\n\n\t\tngOnInit() {\n\t\t}\n\n\t\t}\n\n\t";
        this.code3 = "\n\t\t@import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n\t\t$block: \"card18\";\n\n\t\t.#{$block} {\n\t\tbackground-color: white;\n\t\tborder-radius: 4px;\n\t\tbox-sizing: border-box;\n\t\tbox-shadow: 0 0 8px 0 rgba(0,0,0,.16);\n\t\tfont-family: Lato;\n\t\twidth: 100%;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 40px 60% 1fr fit-content(40px);\n\t\tgrid-template-rows: 40px 22px;\n\t\tgrid-template-areas: \"avatar title progress-bar level\"\n\t\t\t\t\t\t\t\t\"...... subtitle subtitle subtitle\";\n\t\tgap: 0 16px;\n\t\t.#{$block}__avatar {\n\t\t\tgrid-area: avatar;\n\t\t\timg,span{\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t\timg {\n\t\t\t\tobject-fit: cover;\n\t\t\t}\n\t\t\t&--alias {\n\t\t\t\tdisplay: block;\n\t\t\t\tline-height: 40px;\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-size: 23px;\n\t\t\t\tcolor: rgba(255,255,255,0.4);\n\t\t\t}\n\t\t}\n\t\t.#{$block}__title {\n\t\t\tgrid-area: title;\n\t\t\talign-self: center;\n\t\t}\n\t\t.#{$block}__progress-bar {\n\t\t\tgrid-area: progress-bar;\n\t\t\talign-self: center;\n\t\t}\n\t\t.#{$block}__level {\n\t\t\tgrid-area: level;\n\t\t\tjustify-self: center;\n\t\t\talign-self: center;\n\t\t}\n\t\t.#{$block}__subtitle {\n\t\t\tgrid-area: subtitle;\n\t\t\tfont-family: LatoSemibold;\n\t\t\tfont-style: italic;\n\t\t}\n\t\t}\n\t";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/card18/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/card18/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/card18/examples/examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card18/examples/examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n\r\n  <div class=\"page-container\">\r\n      <ntx-card18 [data]=data6></ntx-card18>\r\n      <ntx-card18 [data]=data5></ntx-card18>\r\n      <ntx-card18 [data]=data1></ntx-card18>\r\n      <ntx-card18 [data]=data2></ntx-card18>\r\n      <ntx-card18 [data]=data3></ntx-card18>\r\n      <ntx-card18 [data]=data4></ntx-card18>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/card18/examples/examples.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/card18/examples/examples.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: flex;\n  flex-direction: column;\n}\n.page-container > * {\n  margin: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvY2FyZDE4L2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvc3JjXFxhcHBcXHVpLXBhZ2VzXFxjYXJkMThcXGV4YW1wbGVzXFxleGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvY2FyZDE4L2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0NDQ0g7QURBRztFQUNJLGFBQUE7Q0NFUCIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NhcmQxOC9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgID4gKiB7XHJcbiAgICAgICAgbWFyZ2luOiAzMnB4O1xyXG4gICAgfVxyXG59IiwiLnBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wYWdlLWNvbnRhaW5lciA+ICoge1xuICBtYXJnaW46IDMycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/ui-pages/card18/examples/examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-pages/card18/examples/examples.component.ts ***!
  \****************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.data1 = {
            avatar: undefined,
            color: '#E7575B',
            title: 'Customer oriented',
            subtitle: '',
            progress: {
                value: 80,
                requiredValue: 50,
                level: '4/5'
            },
            showScore: true,
            disabled: false,
        };
        this.data2 = {
            avatar: 'assets/images/app-catalogue.png',
            color: '#5cce88',
            title: 'Leadership',
            subtitle: 'Europe division > 2019 competencies',
            progress: {
                value: 42,
                requiredValue: 65,
                level: undefined
            },
            showScore: true,
            disabled: false,
        };
        this.data3 = {
            avatar: 'assets/images/background-profile-header.jpg',
            color: '#1D5D93',
            title: 'Critical thinking & problem solving',
            subtitle: '',
            checked: true,
            showScore: true,
            disabled: false,
        };
        this.data4 = {
            avatar: undefined,
            color: '#5cce88',
            title: 'Verbal communication',
            subtitle: 'Europe division > 2019 competencies',
            checked: false,
            showScore: true,
            disabled: false,
        };
        this.data5 = {
            avatar: undefined,
            color: '#E7575B',
            title: 'Customer oriented',
            subtitle: '',
            showScore: true,
            disabled: true,
            progress: {
                value: 80,
                requiredValue: 50,
                level: '4/5'
            }
        };
        this.data6 = {
            avatar: '',
            color: '',
            title: '',
            subtitle: '',
            showScore: false,
            disabled: false,
        };
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/card18/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/card18/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-card18-card18-module.js.map