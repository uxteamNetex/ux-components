(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-dialogs-dialogs-module"],{

/***/ "./src/app/ui-pages/dialogs/dialogs-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/ui-pages/dialogs/dialogs-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DialogsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsRoutingModule", function() { return DialogsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/dialogs/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/dialogs/documentation/documentation.component.ts");





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
var DialogsRoutingModule = /** @class */ (function () {
    function DialogsRoutingModule() {
    }
    DialogsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DialogsRoutingModule);
    return DialogsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/dialogs/dialogs.module.ts":
/*!****************************************************!*\
  !*** ./src/app/ui-pages/dialogs/dialogs.module.ts ***!
  \****************************************************/
/*! exports provided: DialogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsModule", function() { return DialogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _dialogs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs-routing.module */ "./src/app/ui-pages/dialogs/dialogs-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/dialogs/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/dialogs/examples/examples.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var DialogsModule = /** @class */ (function () {
    function DialogsModule() {
    }
    DialogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxDialogsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxButtonsModule"],
                _dialogs_routing_module__WEBPACK_IMPORTED_MODULE_4__["DialogsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ],
            declarations: [
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]
            ]
        })
    ], DialogsModule);
    return DialogsModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/dialogs/documentation/documentation.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/dialogs/documentation/documentation.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Dialogs</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-dialog is a component that can be used to open modal dialogs. This dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Dialogs types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are three types of nxt-dialog: use <span class=\"documentation-code\">ntx-simple-dialog</span> for dialogs that need a confirmation or inform about something relevant, use <span class=\"documentation-code\">ntx-warning-dialog</span> to inform the user that an error has occurred, and use <span class=\"documentation-code\">ntx-proccess-dialog</span> when a proccess is going to begin.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      Each dialog is composed of two components. The first component contains the button that calls the dialog, and the second component contains the content of the dialog.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Dialogs v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Changes applied in component`s style to avoid using 'inline-table' display property.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                ux-components/src/lib/ntx-dialogs/simple-dialog/simple-dialog.component.scss\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-dialogs/proccess-dialog/proccess-dialog.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Dialogs v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Open dialog by passing configuration object with custom class for the overlay pane.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-dialogs/simple-dialog/simple-dialog.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                ux-components/src/lib/ntx-dialogs/simple-dialog/simple-dialog.component.scss\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <pre class=\"documentation-pre\">\r\n              <code> {{ code2 }}</code>\r\n            </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-dialogs/proccess-dialog/proccess-dialog.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-dialogs/proccess-dialog/proccess-dialog.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code4 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-dialogs/warning-dialog/warning-dialog.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code5 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-dialogs/warning-dialog/warning-dialog.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code6 }}</code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/dialogs/documentation/documentation.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/dialogs/documentation/documentation.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2RpYWxvZ3MvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/dialogs/documentation/documentation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/dialogs/documentation/documentation.component.ts ***!
  \***************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.code1 = "\n  @Component({\n    ...\n  })\n  export class SimpleDialogComponent implements OnInit {\n\n    ...\n    openDialog() {\n      const dialogRef = this.dialog.open(SimpleDialogContentComponent, {\n        panelClass: 'simpleDialog'\n      });\n    }\n    ...\n  ";
        this.code2 = "\n  .simpleDialog {\n    ...\n  }\n  ";
        this.code3 = "\n  @Component({\n    ...\n  })\n  export class ProccessDialogComponent implements OnInit {\n\n    ...\n    openDialog() {\n      const dialogRef = this.dialog.open(ProccessDialogContentComponent, {\n        panelClass: 'proccessDialog'\n      });\n    }\n    ...\n  ";
        this.code4 = "\n  .proccessDialog {\n    ...\n  }\n  ";
        this.code5 = "\n  @Component({\n    ...\n  })\n  export class WarningDialogComponent implements OnInit {\n\n    ...\n    openDialog() {\n      const dialogRef = this.dialog.open(WarningDialogContentComponent, {\n        panelClass: 'warningDialog'\n      });\n    }\n    ...\n  ";
        this.code6 = "\n  .warningDialog {\n    ...\n  }\n  ";
    }
    DocumentationComponent.prototype.ngOnInit = function () { };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/dialogs/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/dialogs/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/dialogs/examples/examples.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/ui-pages/dialogs/examples/examples.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-card-simple title=\"Modales de la aplicación con distintos diseños\" subtitle=\"Click en el botón para abrir cada modal\">\r\n      <ntx-simple-dialog></ntx-simple-dialog>\r\n      <ntx-warning-dialog></ntx-warning-dialog>\r\n      <ntx-proccess-dialog></ntx-proccess-dialog>\r\n      <ntx-profile-dialog [user] =\"user1\"></ntx-profile-dialog>\r\n      <ntx-profile-dialog [user] =\"user2\"></ntx-profile-dialog>\r\n    </ntx-card-simple>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/dialogs/examples/examples.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui-pages/dialogs/examples/examples.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2RpYWxvZ3MvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui-pages/dialogs/examples/examples.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/dialogs/examples/examples.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PROFILEDIALOG1 = {
    background: 'assets/images/background-profile-header.jpg',
    avatar: 'assets/images/perfil.jpg',
    name: 'Bernice Greaves',
    mail: 'berni.graves@netexlearning.com',
    phone: '+34 765432190',
    location: 'A Coruña',
    secondaryButton: 'Cancel',
    primaryButton: 'Go to profile',
};
var PROFILEDIALOG2 = {
    background: 'assets/images/background-profile-header.jpg',
    avatar: 'assets/images/user_female_01.jpg',
    name: 'Emma Fleming',
    mail: '13 de fevereiro 2021 - 12:00',
    phone: 'Ciencias da natureza',
    location: 'Luisa Gómez Seoane',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    action: 'justificante.png',
    actionIcon: 'icon-paperclip',
    labelText: 'Ausente',
    labelColor: 'red',
    secondaryButton: 'Cancel',
};
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.user1 = PROFILEDIALOG1;
        this.user2 = PROFILEDIALOG2;
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/dialogs/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/dialogs/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-dialogs-dialogs-module.js.map