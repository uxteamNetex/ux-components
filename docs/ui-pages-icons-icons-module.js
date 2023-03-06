(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-icons-icons-module"],{

/***/ "./src/app/ui-pages/icons/documentation/icons-doc.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/icons/documentation/icons-doc.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Icons</h1>\r\n    <p class=\"documentation-text\">\r\n      mat-icon directive makes it easier to use vector-based icons in your app.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Icon font</h1>\r\n    <p class=\"documentation-text\">\r\n      Netex has built it's own icon font that allow us to use a font where the glyphs in the font are our icons instead of text. Every single icon in your app has to use this font.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      To use this font, you need to add <span class=\"documentation-code\">icon-netex</span> class and also you have to add the name of the icon you need, for example <span class=\"documentation-code\">icon-heart</span>. Therefore, you can use specific classes that make you easier to change icon sizes: <span class=\"documentation-code\">icon-small</span>, <span class=\"documentation-code\">icon-medium</span> or <span class=\"documentation-code\">icon-big</span>. Your element classes will be something like this: <span class=\"documentation-code\">class=\"icon-netex icon-heart icon-medium\"</span>.\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/icons/documentation/icons-doc.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/icons/documentation/icons-doc.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2ljb25zL2RvY3VtZW50YXRpb24vaWNvbnMtZG9jLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/icons/documentation/icons-doc.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/icons/documentation/icons-doc.component.ts ***!
  \*********************************************************************/
/*! exports provided: IconsDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsDocComponent", function() { return IconsDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconsDocComponent = /** @class */ (function () {
    function IconsDocComponent() {
    }
    IconsDocComponent.prototype.ngOnInit = function () {
    };
    IconsDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icons-doc',
            template: __webpack_require__(/*! ./icons-doc.component.html */ "./src/app/ui-pages/icons/documentation/icons-doc.component.html"),
            styles: [__webpack_require__(/*! ./icons-doc.component.scss */ "./src/app/ui-pages/icons/documentation/icons-doc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconsDocComponent);
    return IconsDocComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/icons/examples/icons-examples.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/icons/examples/icons-examples.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple\r\n      title=\"Iconos de la aplicación\">\r\n      <div class=\"icons-container\">\r\n        <div class=\"icon-container\" *ngFor=\"let icon of icons\">\r\n          <mat-icon class=\"icon-netex {{icon.className}} icon-big utils--text-grey-600\"></mat-icon>\r\n          <label>{{icon.className}}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"icons-container\">\r\n          <p>Iconos con varios colores:</p>\r\n      </div>\r\n      <div class=\"icons-container\">\r\n        <div class=\"icon-container\">\r\n            <mat-icon class=\"icon-netex icon-badge-locked icon-big utils--text-grey-600\">\r\n              <span class=\"path1\"></span>\r\n              <span class=\"path2\"></span>\r\n            </mat-icon>\r\n            <label>icon-badge-locked</label>\r\n          </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-loading icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n            <span class=\"path4\"></span>\r\n            <span class=\"path5\"></span>\r\n            <span class=\"path6\"></span>\r\n            <span class=\"path7\"></span>\r\n            <span class=\"path8\"></span>\r\n            <span class=\"path9\"></span>\r\n            <span class=\"path10\"></span>\r\n            <span class=\"path11\"></span>\r\n          </mat-icon>\r\n          <label>icon-loading</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-catalonia icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n            <span class=\"path4\"></span>\r\n            <span class=\"path5\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-catalonia</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-china icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n            <span class=\"path4\"></span>\r\n            <span class=\"path5\"></span>\r\n            <span class=\"path6\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-china</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-czech-republic icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n            <span class=\"path4\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-czech-republic</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-greece icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n            <span class=\"path4\"></span>\r\n            <span class=\"path5\"></span>\r\n            <span class=\"path6\"></span>\r\n            <span class=\"path7\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-greece</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-poland icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-poland</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-portugal icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-portugal</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-france icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-france</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-galicia icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-galicia</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-germany icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-germany</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-holland icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-holland</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-hungary icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-hungary</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-indonesia icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-indonesia</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-italy icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-italy</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-romania icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-romania</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-russia icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n            <span class=\"path4\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-russia</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-slovakia icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n            <span class=\"path4\"></span>\r\n            <span class=\"path5\"></span>\r\n            <span class=\"path6\"></span>\r\n            <span class=\"path7\"></span>\r\n            <span class=\"path8\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-slovakia</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-spain icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-spain</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-turkey icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-turkey</label>\r\n        </div>\r\n        <div class=\"icon-container\">\r\n          <mat-icon class=\"icon-netex icon-flag-unitedkingdom icon-big utils--text-grey-600\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n            <span class=\"path4\"></span>\r\n            <span class=\"path5\"></span>\r\n            <span class=\"path6\"></span>\r\n            <span class=\"path7\"></span>\r\n          </mat-icon>\r\n          <label>icon-flag-unitedkingdom</label>\r\n        </div>\r\n      </div>\r\n\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/icons/examples/icons-examples.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/icons/examples/icons-examples.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.icons-container .icon-container {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 0 calc(12% - 16px);\n  flex-direction: column;\n  margin: 40px 16px;\n  max-width: calc(12% - 16px);\n  min-width: calc(12% - 16px);\n  position: relative;\n}\n.icons-container .icon-container .mat-icon {\n  display: list-item;\n  overflow: hidden;\n}\n.icons-container .icon-container label {\n  font-size: 14px;\n  margin-top: 12px;\n  word-break: break-word;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvaWNvbnMvZXhhbXBsZXMvQzpcXHByb3llY3Rvc1xcdXgtY29tcG9uZW50cy9zcmNcXGFwcFxcdWktcGFnZXNcXGljb25zXFxleGFtcGxlc1xcaWNvbnMtZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLXBhZ2VzL2ljb25zL2V4YW1wbGVzL2ljb25zLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0NDQ0Q7QURBQztFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0NDRUg7QURERztFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7Q0NHTDtBRERHO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7Q0NHTCIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2ljb25zL2V4YW1wbGVzL2ljb25zLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25zLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAuaWNvbi1jb250YWluZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxIDAgY2FsYygxMiUgLSAxNnB4KTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDQwcHggMTZweDtcclxuICAgIG1heC13aWR0aDogY2FsYygxMiUgLSAxNnB4KTtcclxuICAgIG1pbi13aWR0aDogY2FsYygxMiUgLSAxNnB4KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaWNvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmljb25zLWNvbnRhaW5lciAuaWNvbi1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDAgY2FsYygxMiUgLSAxNnB4KTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA0MHB4IDE2cHg7XG4gIG1heC13aWR0aDogY2FsYygxMiUgLSAxNnB4KTtcbiAgbWluLXdpZHRoOiBjYWxjKDEyJSAtIDE2cHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaWNvbnMtY29udGFpbmVyIC5pY29uLWNvbnRhaW5lciAubWF0LWljb24ge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaWNvbnMtY29udGFpbmVyIC5pY29uLWNvbnRhaW5lciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ui-pages/icons/examples/icons-examples.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/icons/examples/icons-examples.component.ts ***!
  \*********************************************************************/
/*! exports provided: IconsExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsExamplesComponent", function() { return IconsExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons.service */ "./src/app/ui-pages/icons/icons.service.ts");



var IconsExamplesComponent = /** @class */ (function () {
    function IconsExamplesComponent(iconsService) {
        this.iconsService = iconsService;
    }
    IconsExamplesComponent.prototype.ngOnInit = function () {
        this.getIcons();
    };
    IconsExamplesComponent.prototype.getIcons = function () {
        var _this = this;
        this.iconsService.getIcons().subscribe(function (result) {
            _this.icons = result;
        });
    };
    IconsExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icons-examples',
            template: __webpack_require__(/*! ./icons-examples.component.html */ "./src/app/ui-pages/icons/examples/icons-examples.component.html"),
            styles: [__webpack_require__(/*! ./icons-examples.component.scss */ "./src/app/ui-pages/icons/examples/icons-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_icons_service__WEBPACK_IMPORTED_MODULE_2__["IconsService"]])
    ], IconsExamplesComponent);
    return IconsExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/icons/icons-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/icons/icons-routing.module.ts ***!
  \********************************************************/
/*! exports provided: IconsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsRoutingModule", function() { return IconsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _documentation_icons_doc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentation/icons-doc.component */ "./src/app/ui-pages/icons/documentation/icons-doc.component.ts");
/* harmony import */ var _examples_icons_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/icons-examples.component */ "./src/app/ui-pages/icons/examples/icons-examples.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    {
        path: 'examples',
        component: _examples_icons_examples_component__WEBPACK_IMPORTED_MODULE_3__["IconsExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_icons_doc_component__WEBPACK_IMPORTED_MODULE_2__["IconsDocComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var IconsRoutingModule = /** @class */ (function () {
    function IconsRoutingModule() {
    }
    IconsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], IconsRoutingModule);
    return IconsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/icons/icons.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/icons/icons.module.ts ***!
  \************************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons-routing.module */ "./src/app/ui-pages/icons/icons-routing.module.ts");
/* harmony import */ var _examples_icons_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/icons-examples.component */ "./src/app/ui-pages/icons/examples/icons-examples.component.ts");
/* harmony import */ var _documentation_icons_doc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentation/icons-doc.component */ "./src/app/ui-pages/icons/documentation/icons-doc.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");









var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__["IconsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxCardsModule"]
            ],
            declarations: [
                _examples_icons_examples_component__WEBPACK_IMPORTED_MODULE_4__["IconsExamplesComponent"],
                _documentation_icons_doc_component__WEBPACK_IMPORTED_MODULE_5__["IconsDocComponent"]
            ]
        })
    ], IconsModule);
    return IconsModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/icons/icons.service.ts":
/*!*************************************************!*\
  !*** ./src/app/ui-pages/icons/icons.service.ts ***!
  \*************************************************/
/*! exports provided: IconsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsService", function() { return IconsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");




var IconsService = /** @class */ (function () {
    function IconsService(http) {
        this.http = http;
        this.url = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].resourcesPath + 'icons.json';
    }
    IconsService.prototype.getIcons = function () {
        return this.http.get(this.url);
    };
    IconsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IconsService);
    return IconsService;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-icons-icons-module.js.map