(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-toolbars-toolbars-module"],{

/***/ "./src/app/shared/dummy-components/dummy-form/dummy-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/dummy-components/dummy-form/dummy-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dummy-form__row\">\r\n  <div class=\"label utils--margin-left-20\">Fechas</div>\r\n  <ntx-form-select></ntx-form-select>\r\n  <ntx-form-datepicker></ntx-form-datepicker>\r\n</div>\r\n<div class=\"dummy-form__row\">\r\n  <div class=\"label utils--margin-left-20\">App</div>\r\n  <ntx-form-input></ntx-form-input>\r\n</div>\r\n<div class=\"dummy-form__actions\">\r\n  <ntx-raised-button color=\"accent\">Acción</ntx-raised-button>\r\n  <ntx-raised-button color=\"primary\">Acción</ntx-raised-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/dummy-components/dummy-form/dummy-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/dummy-components/dummy-form/dummy-form.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dummy-form__row {\n  display: flex;\n}\n.dummy-form__row ntx-form-select,\n.dummy-form__row ntx-form-datepicker,\n.dummy-form__row ntx-form-input {\n  flex-grow: 1;\n  padding: 0 20px;\n}\n.dummy-form__row .label {\n  width: 50px;\n  color: #999;\n}\n.dummy-form__actions {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2R1bW15LWNvbXBvbmVudHMvZHVtbXktZm9ybS9DOlxccHJveWVjdG9zXFx1eC1jb21wb25lbnRzL3NyY1xcYXBwXFxzaGFyZWRcXGR1bW15LWNvbXBvbmVudHNcXGR1bW15LWZvcm1cXGR1bW15LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9kdW1teS1jb21wb25lbnRzL2R1bW15LWZvcm0vZHVtbXktZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7Q0NDSDtBREFHOzs7RUFHSSxhQUFBO0VBQ0EsZ0JBQUE7Q0NFUDtBREFHO0VBQ0ksWUFBQTtFQUNBLFlBQUE7Q0NFUDtBRENEO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0NDRUgiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZHVtbXktY29tcG9uZW50cy9kdW1teS1mb3JtL2R1bW15LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHVtbXktZm9ybV9fcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBudHgtZm9ybS1zZWxlY3QsXHJcbiAgICBudHgtZm9ybS1kYXRlcGlja2VyLFxyXG4gICAgbnR4LWZvcm0taW5wdXQge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG59XHJcbi5kdW1teS1mb3JtX19hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59IiwiLmR1bW15LWZvcm1fX3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZHVtbXktZm9ybV9fcm93IG50eC1mb3JtLXNlbGVjdCxcbi5kdW1teS1mb3JtX19yb3cgbnR4LWZvcm0tZGF0ZXBpY2tlcixcbi5kdW1teS1mb3JtX19yb3cgbnR4LWZvcm0taW5wdXQge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5kdW1teS1mb3JtX19yb3cgLmxhYmVsIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZHVtbXktZm9ybV9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/dummy-components/dummy-form/dummy-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/dummy-components/dummy-form/dummy-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: DummyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyFormComponent", function() { return DummyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DummyFormComponent = /** @class */ (function () {
    function DummyFormComponent() {
    }
    DummyFormComponent.prototype.ngOnInit = function () {
    };
    DummyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dummy-form',
            template: __webpack_require__(/*! ./dummy-form.component.html */ "./src/app/shared/dummy-components/dummy-form/dummy-form.component.html"),
            styles: [__webpack_require__(/*! ./dummy-form.component.scss */ "./src/app/shared/dummy-components/dummy-form/dummy-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DummyFormComponent);
    return DummyFormComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Toolbars</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-toolbar is a component used to place a toolbar in your app.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n      Toolbars are usually used above a content area to display the title of the current page, and show relevant action buttons for that page.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Toolbars types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are various types of nxt-toolbar:\r\n    </p>\r\n    <ul>\r\n      <li><p class=\"documentation-text\"><span class=\"documentation-code\">ntx-toolbar</span> is a basic toolbar.</p></li>\r\n      <li><p class=\"documentation-text\"><span class=\"documentation-code\">ntx-toolbar-searchbox</span>is a toolbar with a searchbox with filter panel.</p></li>\r\n      <li><p class=\"documentation-text\"><span class=\"documentation-code\">ntx-toolbar-back</span>is a toolbar with a return button.</p></li>\r\n      <li><p class=\"documentation-text\"><span class=\"documentation-code\">ntx-toolbar-tabs</span>is a toolbar with a second level of navigation.</p></li>\r\n      <li><p class=\"documentation-text\"><span class=\"documentation-code\">ntx-toolbar-back-tabs</span>is a toolbar with a second level of navigation, a return button and conditionally an action button.</p></li>\r\n    </ul>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n        Keep in mind that each of these components need more components to be complete. This is the case of the options menu of the user profile or the tabs. In ntx-toolbar.module.ts file all modules needed are imported.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Customization</h1>\r\n    <p class=\"documentation-text\">\r\n      Each Netex application has it's corporate color that must be seen in the toolbar. If you need the application to have the Talent Cloud color, you have to put the <span class=\"documentation-code\">theme-talent</span> class in the body, and if you need the application to have the Content Cloud color, you have to put the <span class=\"documentation-code\">theme-content</span> class in the body.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Basic toolbar with search box v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Change some classes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-toolbar/toolbar-searchbox/toolbar-searchbox.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-toolbar/toolbar-searchbox/toolbar-searchbox.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Basic toolbar with search box v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add hover effect on buttons.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-toolbar/toolbar-searchbox/toolbar-searchbox.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3Rvb2xiYXJzL2RvY3VtZW50YXRpb24vdG9vbGJhcnMtZG9jLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.ts ***!
  \***************************************************************************/
/*! exports provided: ToolbarsDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarsDocComponent", function() { return ToolbarsDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarsDocComponent = /** @class */ (function () {
    function ToolbarsDocComponent() {
    }
    ToolbarsDocComponent.prototype.ngOnInit = function () {
    };
    ToolbarsDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbars-doc',
            template: __webpack_require__(/*! ./toolbars-doc.component.html */ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.html"),
            styles: [__webpack_require__(/*! ./toolbars-doc.component.scss */ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarsDocComponent);
    return ToolbarsDocComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/toolbars/examples/toolbar-examples.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/examples/toolbar-examples.component.ts ***!
  \**************************************************************************/
/*! exports provided: ToolbarsExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarsExamplesComponent", function() { return ToolbarsExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");



var ToolbarsExamplesComponent = /** @class */ (function () {
    function ToolbarsExamplesComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.toolbarTypes = [
            {
                label: "back toolbar",
                selector: "<ntx-toolbar-back>"
            },
            {
                label: "toolbar with tabs",
                selector: "<ntx-toolbar-tabs>"
            },
            {
                label: "toolbar back tabs without action button",
                selector: "<ntx-toolbar-back-tabs>"
            },
            {
                label: "toolbar back tabs with action button",
                selector: "<ntx-toolbar-back-tabs action='launch'>"
            },
            {
                label: "toolbar back tabs with another action button",
                selector: "<ntx-toolbar-back-tabs action='finish'>"
            }
        ];
        this.toolbarAlert = [
            {
                bgColor: '#FFEDB1',
                title: 'A plataforma de pagamentos já está aberta e você pode seguir com a compra dos materiais para o ano letivo.',
                link: 'Pagar ahora',
                showLink: true
            }
        ];
    }
    ToolbarsExamplesComponent.prototype.ngOnInit = function () {
        this.apps = this.dashboardService.getDashboardApps();
        this.menuAvatarOptions = [
            {
                id: 1,
                label: 'Suzanne Axtens',
                src: 'assets/images/user_female_01.jpg',
                active: false
            },
            {
                id: 2,
                label: 'Sara Dyhouse',
                src: 'assets/images/user_female_02.jpg',
                active: true
            },
        ];
    };
    ToolbarsExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbars-examples',
            template: __webpack_require__(/*! ./toolbars-examples.component.html */ "./src/app/ui-pages/toolbars/examples/toolbars-examples.component.html"),
            styles: [__webpack_require__(/*! ./toolbars-examples.component.scss */ "./src/app/ui-pages/toolbars/examples/toolbars-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], ToolbarsExamplesComponent);
    return ToolbarsExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/toolbars/examples/toolbars-examples.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/examples/toolbars-examples.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple\r\n      title=\"{{ 'toolbar with tabs one line' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-toolbar-tabs-one-line>' }}\">\r\n        <ntx-toolbar-tabs-one-line imageText=\"Logo Netex Cuadrado\" image=\"../../../assets/images/icon-netex.png\" [apps]=\"apps\"></ntx-toolbar-tabs-one-line>\r\n        <br/>\r\n        <ntx-toolbar-tabs-one-line imageText=\"Logo Netex\" image=\"../../../assets/images/logo-netex-horizontal.svg\" [apps]=\"apps\"></ntx-toolbar-tabs-one-line>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{ 'toolbar alert' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-toolbar-alert>' }}\">\r\n        <ntx-toolbar-alert [items] =\"toolbarAlert\"></ntx-toolbar-alert>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{ 'basic toolbar' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-toolbar>' }}\">\r\n        <ntx-toolbar [apps]=\"apps\"></ntx-toolbar>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'basic toolbar with search box' | uppercase}}\"\r\n      subtitle=\"{{ '<ntx-toolbar-searchbox>' }}\">\r\n      <ntx-toolbar-searchbox label=\"Notificaciones\" src=\"../../../assets/images/notifications.svg\" [apps]=\"apps\">\r\n        <app-dummy-form></app-dummy-form>\r\n      </ntx-toolbar-searchbox>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'basic toolbar with search box' | uppercase}}\"\r\n      subtitle=\"{{ '<ntx-toolbar-searchbox>' }}\">\r\n      <ntx-toolbar-searchbox label=\"Notificaciones\" src=\"../../../assets/images/notifications.svg\" [apps]=\"apps\" [menuAvatarOptions]=\"menuAvatarOptions\"></ntx-toolbar-searchbox>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple *ngFor=\"let type of toolbarTypes\"\r\n      title=\"{{ type.label | uppercase }}\"\r\n      subtitle=\"{{ type.selector }}\">\r\n        <ntx-toolbar-back [apps]=\"apps\" *ngIf=\"type.label==='back toolbar'\"></ntx-toolbar-back>\r\n        <ntx-toolbar-tabs [apps]=\"apps\" *ngIf=\"type.label==='toolbar with tabs'\"></ntx-toolbar-tabs>\r\n        <ntx-toolbar-back-tabs [apps]=\"apps\" *ngIf=\"type.label==='toolbar back tabs without action button'\"></ntx-toolbar-back-tabs>\r\n        <ntx-toolbar-back-tabs [apps]=\"apps\" [action]=\"'launch'\" *ngIf=\"type.label==='toolbar back tabs with action button'\"></ntx-toolbar-back-tabs>\r\n        <ntx-toolbar-back-tabs [apps]=\"apps\" [action]=\"'finish'\" *ngIf=\"type.label==='toolbar back tabs with another action button'\"></ntx-toolbar-back-tabs>\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/toolbars/examples/toolbars-examples.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/examples/toolbars-examples.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3Rvb2xiYXJzL2V4YW1wbGVzL3Rvb2xiYXJzLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/toolbars/toolbars-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/toolbars-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ToolbarsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarsRoutingModule", function() { return ToolbarsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documentation_toolbars_doc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation/toolbars-doc.component */ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.ts");
/* harmony import */ var _examples_toolbar_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/toolbar-examples.component */ "./src/app/ui-pages/toolbars/examples/toolbar-examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_toolbar_examples_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarsExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_toolbars_doc_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarsDocComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var ToolbarsRoutingModule = /** @class */ (function () {
    function ToolbarsRoutingModule() {
    }
    ToolbarsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ToolbarsRoutingModule);
    return ToolbarsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/toolbars/toolbars.module.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-pages/toolbars/toolbars.module.ts ***!
  \******************************************************/
/*! exports provided: ToolbarsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarsModule", function() { return ToolbarsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _documentation_toolbars_doc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/toolbars-doc.component */ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.ts");
/* harmony import */ var _examples_toolbar_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/toolbar-examples.component */ "./src/app/ui-pages/toolbars/examples/toolbar-examples.component.ts");
/* harmony import */ var _toolbars_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbars-routing.module */ "./src/app/ui-pages/toolbars/toolbars-routing.module.ts");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var src_app_shared_dummy_components_dummy_form_dummy_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dummy-components/dummy-form/dummy-form.component */ "./src/app/shared/dummy-components/dummy-form/dummy-form.component.ts");









var ToolbarsModule = /** @class */ (function () {
    function ToolbarsModule() {
    }
    ToolbarsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__["NtxMenusModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__["NtxListsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__["NtxToolbarModule"],
                _toolbars_routing_module__WEBPACK_IMPORTED_MODULE_6__["ToolbarsRoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__["NtxFormsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_7__["NtxButtonsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
            ],
            declarations: [
                _examples_toolbar_examples_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarsExamplesComponent"],
                _documentation_toolbars_doc_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarsDocComponent"],
                src_app_shared_dummy_components_dummy_form_dummy_form_component__WEBPACK_IMPORTED_MODULE_8__["DummyFormComponent"]
            ]
        })
    ], ToolbarsModule);
    return ToolbarsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-toolbars-toolbars-module.js.map