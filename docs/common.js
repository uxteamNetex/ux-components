(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.html":
/*!*****************************************************************************************!*\
  !*** ./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-paginator [length]=\"length\"\r\n               [pageSize]=\"pageSize\"\r\n               [pageSizeOptions]=\"pageSizeOptions\"\r\n               (page)=\"pageEvent = $event\"\r\n               [ngClass]=\"position\">\r\n</mat-paginator>"

/***/ }),

/***/ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.scss":
/*!*****************************************************************************************!*\
  !*** ./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ntx-paginator mat-paginator.mat-paginator {\n  display: flex;\n  background-color: transparent;\n}\nntx-paginator mat-paginator.mat-paginator.left {\n  justify-content: flex-start;\n}\nntx-paginator mat-paginator.mat-paginator.center {\n  justify-content: center;\n}\nntx-paginator mat-paginator.mat-paginator.right {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25ldGV4L3V4LWNvbXBvbmVudHMvc3JjL2xpYi9udHgtcGFnaW5hdG9yL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvcHJvamVjdHNcXG5ldGV4XFx1eC1jb21wb25lbnRzXFxzcmNcXGxpYlxcbnR4LXBhZ2luYXRvclxcbnR4LXBhZ2luYXRvci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25ldGV4L3V4LWNvbXBvbmVudHMvc3JjL2xpYi9udHgtcGFnaW5hdG9yL250eC1wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7Q0NBUDtBRENPO0VBQ0ksNEJBQUE7Q0NDWDtBRENPO0VBQ0ksd0JBQUE7Q0NDWDtBRENPO0VBQ0ksMEJBQUE7Q0NDWCIsImZpbGUiOiJwcm9qZWN0cy9uZXRleC91eC1jb21wb25lbnRzL3NyYy9saWIvbnR4LXBhZ2luYXRvci9udHgtcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnR4LXBhZ2luYXRvciB7XHJcbiAgICBtYXQtcGFnaW5hdG9yLm1hdC1wYWdpbmF0b3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgJi5sZWZ0IHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNlbnRlciB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnJpZ2h0IHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJudHgtcGFnaW5hdG9yIG1hdC1wYWdpbmF0b3IubWF0LXBhZ2luYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxubnR4LXBhZ2luYXRvciBtYXQtcGFnaW5hdG9yLm1hdC1wYWdpbmF0b3IubGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbm50eC1wYWdpbmF0b3IgbWF0LXBhZ2luYXRvci5tYXQtcGFnaW5hdG9yLmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxubnR4LXBhZ2luYXRvciBtYXQtcGFnaW5hdG9yLm1hdC1wYWdpbmF0b3IucmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */"

/***/ }),

/***/ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.ts":
/*!***************************************************************************************!*\
  !*** ./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NtxPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtxPaginatorComponent", function() { return NtxPaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NtxPaginatorComponent = /** @class */ (function () {
    function NtxPaginatorComponent() {
    }
    NtxPaginatorComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NtxPaginatorComponent.prototype, "length", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NtxPaginatorComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NtxPaginatorComponent.prototype, "pageSizeOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NtxPaginatorComponent.prototype, "position", void 0);
    NtxPaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ntx-paginator',
            template: __webpack_require__(/*! ./ntx-paginator.component.html */ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./ntx-paginator.component.scss */ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NtxPaginatorComponent);
    return NtxPaginatorComponent;
}());



/***/ }),

/***/ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.module.ts":
/*!************************************************************************************!*\
  !*** ./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.module.ts ***!
  \************************************************************************************/
/*! exports provided: NtxPaginatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtxPaginatorModule", function() { return NtxPaginatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ntx_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ntx-paginator.component */ "./projects/netex/ux-components/src/lib/ntx-paginator/ntx-paginator.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");





var NtxPaginatorModule = /** @class */ (function () {
    function NtxPaginatorModule() {
    }
    NtxPaginatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ntx_paginator_component__WEBPACK_IMPORTED_MODULE_3__["NtxPaginatorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"]
            ],
            exports: [
                _ntx_paginator_component__WEBPACK_IMPORTED_MODULE_3__["NtxPaginatorComponent"]
            ]
        })
    ], NtxPaginatorModule);
    return NtxPaginatorModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map