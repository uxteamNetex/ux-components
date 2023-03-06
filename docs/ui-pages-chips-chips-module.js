(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-chips-chips-module"],{

/***/ "./src/app/ui-pages/chips/chips-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/chips/chips-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ChipsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsRoutingModule", function() { return ChipsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/chips/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/chips/documentation/documentation.component.ts");





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
var ChipsRoutingModule = /** @class */ (function () {
    function ChipsRoutingModule() {
    }
    ChipsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChipsRoutingModule);
    return ChipsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/chips/chips.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/chips/chips.module.ts ***!
  \************************************************/
/*! exports provided: ChipsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsModule", function() { return ChipsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _chips_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chips-routing.module */ "./src/app/ui-pages/chips/chips-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/chips/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/chips/examples/examples.component.ts");








var ChipsModule = /** @class */ (function () {
    function ChipsModule() {
    }
    ChipsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxChipsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _chips_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChipsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            ],
            declarations: [
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_7__["ExamplesComponent"]
            ]
        })
    ], ChipsModule);
    return ChipsModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/chips/documentation/documentation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/chips/documentation/documentation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chips</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-chip is a component for building lists of strings or objects. The list items are displayed as 'chips'.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chips types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are four types of nxt-chips: use <span class=\"documentation-code\">ntx-image-chip</span> if you need chip with images, use <span class=\"documentation-code\">ntx-category-chip</span> if you need to specify the category of the content, use <span class=\"documentation-code\">ntx-basic-chip</span> for basic chips, and use <span class=\"documentation-code\">ntx-filter-chip</span> for chips that are used like radiobutton an only one of them can be selected.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      Color and disabled attributes can be configured in each type of chip, just by adding the atribute <span class=\"documentation-code\">[color]</span> or <span class=\"documentation-code\">[disabled]</span> in the html tag. In .ts file we have added these variables as strings so they can be configured.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n      In .ts file of each component, we have added an array to repeat x times the items and have a better perception of it's final look&feel. Feel free of configure this file as you wish.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Autocomplete chip v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added tooltip</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/autocomplete-chip/autocomplete-chip.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with image v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/image-chip/image-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with categories v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Make the remove chip button optional.</li>\r\n      <li>Parameterize the number of chips and their content.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/category-chip/category-chip.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/category-chip/category-chip.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/category-chip/category-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Basic chip with image v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Component modified to set separations display correctly.</li>\r\n      <li>Minor css changes</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/basic-image-chip/basic-image-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/image-chip/image-chip.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Basic chip v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Component modified to let show an avatar o icon if necessary.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/basic-chip/basic-chip.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/basic-chip/basic-chip.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/basic-chip/basic-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with image v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/image-chip/image-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with image and subtitle v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/image-subtitle-chip/image-subtitle-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Basic chip v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n      <li>Parameterize the content.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/basic-chip/basic-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with categories v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/category-chip/category-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with filters v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/filter-chip/filter-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/chips/documentation/documentation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/chips/documentation/documentation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NoaXBzL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/chips/documentation/documentation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui-pages/chips/documentation/documentation.component.ts ***!
  \*************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.code1 = "\n    import { ViewEncapsulation } from '@angular/core';\n\n    @Component({\n      selector: 'ntx-basic-image-chip',\n      templateUrl: './basic-image-chip.component.html',\n      styleUrls: ['./basic-image-chip.component.scss'],\n      encapsulation: ViewEncapsulation.None,\n    })\n  ";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/chips/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/chips/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/chips/examples/examples.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/chips/examples/examples.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-card-simple title=\"{{'Chip with image' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-image-chip>' }}\">\r\n      <ntx-image-chip [color]=\"'primary'\"></ntx-image-chip>\r\n      <ntx-image-chip [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-image-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Chip with image and subtitle' | uppercase }}\"\r\n          subtitle=\"{{ '<ntx-image-subtitle-chip>' }}\">\r\n      <ntx-image-subtitle-chip [color]=\"'primary'\"></ntx-image-subtitle-chip>\r\n      <ntx-image-subtitle-chip [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-image-subtitle-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Basic chip' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-basic-chip>' }}\">\r\n      <ntx-basic-chip [chips] =\"chips3\" [color]=\"'color'\" [disabled]=\"'disabled'\"></ntx-basic-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Basic chip with image' | uppercase }}\"\r\n        subtitle=\"{{ '<ntx-basic-image-chip>' }}\">\r\n          <ntx-basic-image-chip [chip] =\"chip\"></ntx-basic-image-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Chip with categories' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-category-chip>' }}\">\r\n      <ntx-category-chip [chips] =\"chips2\" [color]=\"'color'\" [disabled]=\"'disabled'\"></ntx-category-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Chip with filters' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-filter-chip>' }}\">\r\n      <ntx-filter-chip></ntx-filter-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Chip with icon' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-icon-chip>' }}\">\r\n      <ntx-icon-chip [item] =\"item\"></ntx-icon-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Autocomplete chip' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-autocomplete-chip>' }}\">\r\n      <ntx-autocomplete-chip [color]=\"'primary'\"></ntx-autocomplete-chip>\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/chips/examples/examples.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/chips/examples/examples.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NoaXBzL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/chips/examples/examples.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui-pages/chips/examples/examples.component.ts ***!
  \***************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ITEM = {
    actions: [
        {
            label: 'Chip',
            state: 'primary',
            icon: 'icon-archive-solid',
            showIcon: false
        },
        {
            label: 'Chip',
            state: 'accent',
            icon: 'icon-archive-solid',
            showIcon: false
        },
        {
            label: 'Chip',
            state: 'yellow',
            icon: 'icon-archive-solid',
            showIcon: false
        },
        {
            label: 'Chip',
            state: 'green',
            icon: 'icon-archive-solid',
            showIcon: false
        },
        {
            label: 'Completado',
            state: 'green',
            icon: 'icon-check',
            showIcon: true
        },
        {
            label: 'No completado',
            state: 'red',
            icon: 'icon-cross',
            showIcon: true
        }
    ]
};
var CHIP = {
    actions: [
        {
            state: 'primary',
            image: 'assets/images/perfil.jpg',
            label: 'Laura Lopez'
        },
        {
            state: 'accent',
            image: 'assets/images/perfil.jpg',
            label: 'Carlota Ruiz Corredera'
        }
    ]
};
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.item = ITEM;
        this.chip = CHIP;
        this.chips3 = [
            {
                avatar: '',
                icon: '',
                label: 'Mary Joe Wright',
                name: 'UX',
                removable: '',
                color: 'primary',
                disabled: false
            },
            {
                avatar: '',
                icon: 'icon-paperclip',
                label: 'Laura Casariego',
                name: 'UX',
                removable: '',
                color: 'primary',
                disabled: true
            },
            {
                avatar: 'assets/images/perfil.jpg',
                icon: '',
                label: 'John Doe',
                name: 'UX',
                removable: 'true',
                color: 'accent',
                disabled: false
            },
            {
                avatar: 'assets/images/user_female_01.jpg',
                icon: '',
                label: 'Job',
                name: 'Example chip with a very long text',
                removable: 'true',
                color: 'accent',
                disabled: true
            }
        ];
        this.chips2 = [
            {
                label: 'Department',
                name: 'UX',
                removable: '',
                color: 'primary',
                disabled: false
            },
            {
                label: 'Department',
                name: 'UX',
                removable: '',
                color: 'primary',
                disabled: true
            },
            {
                label: 'Department',
                name: 'UX',
                removable: 'true',
                color: 'primary',
                disabled: true
            },
            {
                label: 'Job',
                name: 'Designer',
                removable: '',
                color: 'accent',
                disabled: false
            },
            {
                label: 'Job',
                name: 'Designer',
                removable: '',
                color: 'accent',
                disabled: true
            },
            {
                label: 'Department',
                name: 'Example chip with a very long name',
                removable: 'true',
                color: 'accent',
                disabled: false
            },
        ];
        this.chips = [
            {
                label: 'Mary Joe Wright',
                avatar: ''
            },
            {
                label: 'John Doe',
                avatar: 'assets/images/perfil.jpg'
            },
            {
                label: 'Example chip with a very long name',
                avatar: 'assets/images/user_female_01.jpg'
            }
        ];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/chips/examples/examples.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/chips/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-chips-chips-module.js.map