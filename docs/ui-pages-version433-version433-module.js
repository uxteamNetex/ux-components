(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-version433-version433-module"],{

/***/ "./src/app/ui-pages/version433/documentation/documentation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/ui-pages/version433/documentation/documentation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  documentation works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/version433/documentation/documentation.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/ui-pages/version433/documentation/documentation.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3ZlcnNpb240MzMvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/version433/documentation/documentation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ui-pages/version433/documentation/documentation.component.ts ***!
  \******************************************************************************/
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
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/version433/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/version433/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/version433/examples/examples.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/version433/examples/examples.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-card-simple class=\"whatsnew\">\r\n\r\n      <div class=\"whatsnew__header\">\r\n        <div class=\"whatsnew__header--texts\">\r\n          <h1 class=\"whatsnew__header--title\">Release v4.3.3: New components and bug fixing</h1>\r\n          <p class=\"whatsnew__header--subtitle\">8 Julio 2021</p>\r\n        </div>\r\n        <img class=\"whatsnew__header--image\" src=\"assets/images/rocket-5.png\" alt=\"rocket image\">\r\n      </div>\r\n\r\n      <div class=\"whatsnew__content\">\r\n        <div class=\"whatsnew__announcement\">\r\n          <p class=\"whatsnew__announcement--text\">What’s new section is our monthly update that highlights recent product improvements we’ve made so you can easily stay up to date on what’s new.</p>\r\n        </div>\r\n\r\n        <h2 class=\"whatsnew__separation\">\r\n          <span class=\"whatsnew__separation--text\">What’s new</span>\r\n        </h2>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>New icons</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">With this update we have a new batch of icons. For this, several css files have been touched, which you must update to see the icons correctly:</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see all the icon in this <a class=\"\" mat-list-item routerLink=\"/icons/examples\" (click)=\"setPath('icons')\">link</a></p>\r\n          <ul class=\"whatsnew__content-block--points\">\r\n            <li>ux-components/src/styles/fonts/styles.scss</li>\r\n            <li>ux-components/src/styles/fonts/variables.scss</li>\r\n            <li>ux-components/src/assets/fonts/icons/netex.eot</li>\r\n            <li>ux-components/src/assets/fonts/icons/netex.svg</li>\r\n            <li>ux-components/src/assets/fonts/icons/netex.ttf</li>\r\n            <li>ux-components/src/assets/fonts/icons/netex.woff</li>\r\n          </ul>\r\n          <div class=\"icons-container\">\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-arrow-right-solid icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-arrow-right-solid</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-backpack icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-backpack</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-chat-bubble-question icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-chat-bubble-question</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-evaluation-solid icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-evaluation-solid</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-reply-all-solid icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-reply-all-solid</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-reply-solid icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-reply-solid</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-see-more-dots icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-see-more-dots</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-send-solid icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-send-solid</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-user-export icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-user-export</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-user-hat icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-user-hat</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-user-check icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-user-check</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-timeline icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-timeline</label>\r\n            </div>\r\n            <div class=\"icon-container\">\r\n              <mat-icon class=\"icon-netex icon-coin-star icon-big utils--text-grey-600\"></mat-icon>\r\n              <label>icon-coin-star</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Expansion panels component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added <span class=\"documentation-code\">Expansion panels</span> component.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/expansion-panels/examples\" (click)=\"setPath('expansion-panels')\">link</a></p>\r\n          <ntx-expansion-panels [data]=\"panelEmpty\" iconArrow=\"arrow-hidden\">\r\n            <ng-template let-rowDetail #header>\r\n              <span>{{rowDetail.header}}</span>\r\n            </ng-template>\r\n            <ng-template let-rowDetail #body>\r\n              <span>{{rowDetail.body}}</span>\r\n            </ng-template>\r\n          </ntx-expansion-panels>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>List10 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added <span class=\"documentation-code\">list10</span> component.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/lists/examples\" (click)=\"setPath('lists')\">link</a></p>\r\n          <div class=\"utils--flex\">\r\n            <ntx-list10 title=\"Originalidad\" [items]=list10></ntx-list10>\r\n            <ntx-list10 [items]=list10b></ntx-list10>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Toolbar alert component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added <span class=\"documentation-code\">toolbar-alert</span> component.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/toolbars/examples\" (click)=\"setPath('toolbars')\">link</a></p>\r\n          <ntx-toolbar-alert [items] =\"toolbarAlert\"></ntx-toolbar-alert>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>List8 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added <span class=\"documentation-code\">list8</span> component.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/lists/examples\" (click)=\"setPath('lists')\">link</a></p>\r\n          <ntx-list8 [items]=list8></ntx-list8>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>List9 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added <span class=\"documentation-code\">list9</span> component.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/lists/examples\" (click)=\"setPath('lists')\">link</a></p>\r\n          <ntx-list9 [items]=list9></ntx-list9>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Card20 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added <span class=\"documentation-code\">card20</span> component.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/card20/examples\" (click)=\"setPath('card20')\">link</a></p>\r\n          <div style=\"display: flex;justify-content: space-between;\">\r\n            <div style=\"width:45%\" *ngFor=\"let item of card20\">\r\n              <ntx-card20\r\n                [showLink]=\"item.showLink\"\r\n                [link]=\"item.link\"\r\n                [image]=\"item.image\"\r\n                [title]=\"item.title\"\r\n                [subtitle]=\"item.subtitle\"\r\n                ></ntx-card20>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Label round component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added <span class=\"documentation-code\">ntx-label-round</span> component.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/labels/examples\" (click)=\"setPath('labels')\">link</a></p>\r\n          <div class=\"utils--flex\">\r\n            <ntx-label-round [labels]=labelRound></ntx-label-round>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>New avatar's menu component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added <span class=\"documentation-code\">ntx-menu-avatar</span> component.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/menus/examples\" (click)=\"setPath('menus')\">link</a></p>\r\n          <div class=\"utils--flex\">\r\n            <ntx-menu-avatar [options]=\"menuAvatarOptions\"></ntx-menu-avatar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Rectangular button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added <span class=\"documentation-code\">ntx-rectangular-button</span> component.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/buttons/examples\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <div class=\"utils--flex\">\r\n            <ntx-rectangular-button icon=\"icon-file\" text=\"action\"></ntx-rectangular-button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>New list6 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added a new list component, <span class=\"documentation-code\">ntx-list6</span>.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/lists/examples\" (click)=\"setPath('lists')\">link</a></p>\r\n          <ntx-list6 [items]=list6></ntx-list6>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>New list7 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have added a new list component, <span class=\"documentation-code\">ntx-list7</span>.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can see the component in this <a class=\"\" mat-list-item routerLink=\"/lists/examples\" (click)=\"setPath('lists')\">link</a></p>\r\n          <ntx-list7 [items]=list7></ntx-list7>\r\n        </div>\r\n\r\n        <h2 class=\"whatsnew__separation\">\r\n          <span class=\"whatsnew__separation--text\">Bug fixing</span>\r\n        </h2>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Progress bar component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-progress-bar</span> component and there have been changes in css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/progress-bar/documentation\" (click)=\"setPath('progress-bar')\">link</a></p>\r\n          <ntx-progress-bar class=\"utils--margin-top-24 utils--margin-bottom-24\" [color]=\"'primary'\" [value]=\"'52'\"></ntx-progress-bar>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>List sidemenu component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-list-sidemenu</span> component and there have been changes in css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/lists/documentation\" (click)=\"setPath('lists')\">link</a></p>\r\n          <ntx-list-sidemenu [user] =\"user\"></ntx-list-sidemenu>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Profile dialog component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-profile-dialog</span> component and there have been changes in html, css and ts files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/dialogs/documentation\" (click)=\"setPath('dialogs')\">link</a></p>\r\n          <ntx-profile-dialog [user] =\"user2\"></ntx-profile-dialog>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Two lines list with avatar component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-list-two-lines-avatar</span> component and there have been changes in html, css and ts files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/lists/documentation\" (click)=\"setPath('lists')\">link</a></p>\r\n          <ntx-list-two-lines-avatar [data] =\"data\"></ntx-list-two-lines-avatar>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Card1 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-card1</span> component and we have added a skeleton loader. For these changes some files (html, css and ts) have been modified. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/card1/documentation\" (click)=\"setPath('card1')\">link</a></p>\r\n          <div style=\"display: flex;justify-content: space-between;\">\r\n            <div style=\"width:45%\" *ngFor=\"let item of card1\">\r\n              <ntx-card1\r\n                [image]=\"item.image\"\r\n                [initials]=\"item.initials\"\r\n                [title]=\"item.title\"\r\n                [subtitle]=\"item.subtitle\"\r\n                [options]=\"item.options\"\r\n              ></ntx-card1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Card2 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-card2</span> component and we have added a skeleton loader. For these changes some files (html, css and ts) have been modified. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/card2/documentation\" (click)=\"setPath('card2')\">link</a></p>\r\n          <div style=\"display: flex;justify-content: space-between;\">\r\n            <div style=\"width:30%\" *ngFor=\"let item of card2\">\r\n              <ntx-card2\r\n                [image]=\"item.image\"\r\n                [title]=\"item.title\"\r\n                [options]=\"item.options\"\r\n              ></ntx-card2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Card3 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-card3</span> component and there have been changes in html, css and ts files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/card3/documentation\" (click)=\"setPath('cards')\">link</a></p>\r\n          <div style=\"display: flex;justify-content: space-between;\">\r\n            <div style=\"width:45%\" *ngFor=\"let item of card3\">\r\n              <ntx-card3\r\n                [image]=\"item.image\"\r\n                [initials]=\"item.initials\"\r\n                [badgeColor]=\"item.badgeColor\"\r\n                [title]=\"item.title\"\r\n                [subtitle]=\"item.subtitle\"\r\n                [subtitle2]=\"item.subtitle2\"\r\n                [subtitle3]=\"item.subtitle3\"\r\n                [subtitle3Color]=\"item.subtitle3Color\"\r\n                [options]=\"item.options\"\r\n                ></ntx-card3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Card4 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-card4</span> component and we have added a skeleton loader. For these changes some files (html, css and ts) have been modified. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/card4/documentation\" (click)=\"setPath('card4')\">link</a></p>\r\n          <div style=\"display: flex;justify-content: space-between;\">\r\n            <div style=\"width:45%\" *ngFor=\"let item of card4\">\r\n              <ntx-card4\r\n                [image]=\"item.image\"\r\n                [initials]=\"item.initials\"\r\n                [badgeColor]=\"item.badgeColor\"\r\n                [title]=\"item.title\"\r\n                [subtitle]=\"item.subtitle\"\r\n                [options]=\"item.options\"\r\n              ></ntx-card4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Card17 component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-card17</span> component and we have added an optional icon and subtitle. For these changes some files (html, css and ts) have been modified. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/card17/documentation\" (click)=\"setPath('card17')\">link</a></p>\r\n          <ntx-card17 [data] = \"data4\">\r\n            <p>\r\n            Lorem ipsum dolor sit amet consectetur adipiscing elit lacus habitasse,<br/>\r\n            tincidunt euismod eleifend purus conubia at viverra nullam <br/>\r\n            cursus est nisi tortor sociis risus inceptos erat.\r\n            </p>\r\n          </ntx-card17>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Empty pages component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-empty-page</span> component and there have been changes in the html and ts file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('empty-pages')\">link</a></p>\r\n          <div class=\"utils--flex\">\r\n            <ntx-empty-page [item] =\"emptyPages\"></ntx-empty-page>\r\n            <ntx-empty-page [item] =\"emptyPages2\"></ntx-empty-page>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>User toolbar options component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-menu-toolbar-profile</span> component and there have been changes in the html, css and ts file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">These changes will affect all the components that use this component, such as toolbars. You will have to update it in these components too.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/menus/documentation\" (click)=\"setPath('menus')\">link</a></p>\r\n          <div style=\"display:flex\">\r\n            <ntx-menu-toolbar-profile [user]=\"mtp1User\" [options]=\"mtp1Options\"></ntx-menu-toolbar-profile>\r\n            <ntx-menu-toolbar-profile [user]=\"mtp2User\" [mainOption]=\"mtp2MainOption\" [options]=\"mtp2Options\"></ntx-menu-toolbar-profile>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Square button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-square-button</span> component and there have been changes in the html and ts file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-square-button text = \"Add\" iconName = \"icon-plus-circle\"></ntx-square-button>\r\n          <ntx-square-button text = \"Like\" iconName = \"icon-heart\"></ntx-square-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Mini fab button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-mini-fab-button</span> component and there have been changes in the html and ts file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-mini-fab-button text = \"Add\" iconName = \"icon-plus\" [color]=\"'primary'\"></ntx-mini-fab-button>\r\n          <ntx-mini-fab-button text = \"Like\" iconName = \"icon-heart\" [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-mini-fab-button>\r\n          <ntx-mini-fab-button text = \"Download\" iconName = \"icon-download\" [color]=\"'accent'\"></ntx-mini-fab-button>\r\n          <ntx-mini-fab-button text = \"Cloud\" iconName = \"icon-cloud\" [color]=\"'accent'\" [disabled]=\"'true'\"></ntx-mini-fab-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Fab button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-fab-button</span> component and there have been changes in the html and ts file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-fab-button text = \"Add\" iconName = \"icon-plus\" [color]=\"'primary'\"></ntx-fab-button>\r\n          <ntx-fab-button text = \"Like\" iconName = \"icon-heart\" [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-fab-button>\r\n          <ntx-fab-button text = \"Download\" iconName = \"icon-download\" [color]=\"'accent'\"></ntx-fab-button>\r\n          <ntx-fab-button text = \"Cloud\" iconName = \"icon-cloud\" [color]=\"'accent'\" [disabled]=\"'true'\"></ntx-fab-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Raised icon button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-raised-icon-button</span> component and there have been changes in the html, css and ts file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-raised-icon-button [item] =\"raisedIconButton\"></ntx-raised-icon-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Raised button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-raised-button</span> component and there have been changes in the html and css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-raised-button [color]=\"'primary'\">Botón</ntx-raised-button>\r\n          <ntx-raised-button [color]=\"'primary'\" [disabled]=\"'true'\">Link</ntx-raised-button>\r\n          <ntx-raised-button [color]=\"'accent'\">Acción</ntx-raised-button>\r\n          <ntx-raised-button [color]=\"'accent'\" [disabled]=\"'true'\">Acción</ntx-raised-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Text button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-text-button</span> component and there have been changes in the html and css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-text-button [color]=\"'primary'\">Botón</ntx-text-button>\r\n          <ntx-text-button [color]=\"'primary'\" [disabled]=\"'true'\">Link</ntx-text-button>\r\n          <ntx-text-button [color]=\"'accent'\">Acción</ntx-text-button>\r\n          <ntx-text-button [color]=\"'accent'\" [disabled]=\"'true'\">Acción</ntx-text-button>\r\n          <ntx-text-button [color]=\"'white'\">Acción</ntx-text-button>\r\n          <ntx-text-button [color]=\"'white'\" [disabled]=\"'true'\">Acción</ntx-text-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Text icon button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-text-icon-button</span> component and there have been changes in the html, css and ts file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-text-icon-button [item] =\"textIconButton\"></ntx-text-icon-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Stroked icon button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-stroked-icon-button</span> component and there have been changes in the html, css and ts file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-stroked-icon-button [item] =\"strokedIconButton\"></ntx-stroked-icon-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Chip with categories component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-category-chip</span> component and there have been changes in html, css and ts files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/chips/documentation\" (click)=\"setPath('chips')\">link</a></p>\r\n          <ntx-category-chip [chips] =\"chips2\" [color]=\"'color'\" [disabled]=\"'disabled'\"></ntx-category-chip>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Searchbox with filter panel component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-searchbox-filter-panel</span> component and there have been changes in html and ts files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/form-controls/documentation\" (click)=\"setPath('form-controls')\">link</a></p>\r\n          <ntx-searchbox-filter-panel></ntx-searchbox-filter-panel>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Link button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-link-button</span> component and there have been changes in the css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-link-button iconLeft=\"icon-paperclip\">action</ntx-link-button>\r\n          <span class=\"utils--margin-left-24\"></span>\r\n          <ntx-link-button iconRight=\"icon-paperclip\">action</ntx-link-button>\r\n          <span class=\"utils--margin-left-24\"></span>\r\n          <ntx-link-button iconLeft=\"icon-funnel-solid\">action</ntx-link-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Menu options simple component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-menu-options-simple</span> component and there have been changes in the css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/menus/documentation\" (click)=\"setPath('menu')\">link</a></p>\r\n          <div style=\"display:flex\">\r\n            <ntx-menu-options-simple [icon]=\"menuOptionsSimple.icon\" [actions]=\"menuOptionsSimple.actions\"></ntx-menu-options-simple>\r\n            <ntx-menu-options-simple [icon]=\"menuOptionsSimpleIcon.icon\" [actions]=\"menuOptionsSimpleIcon.actions\"></ntx-menu-options-simple>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Menu options component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-menu-options</span> component and there have been changes html, css and ts files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">These changes will affect all the components that use this component, such as cards, tables... You will have to update it in these components too.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('menu')\">link</a></p>\r\n          <div style=\"display:flex\">\r\n            <ntx-menu-options [icon]=\"menuOptions.icon\" [actions]=\"menuOptions.actions\"></ntx-menu-options>\r\n            <ntx-menu-options [icon]=\"menuOptionsAdvanced.icon\" [actions]=\"menuOptionsAdvanced.actions\"></ntx-menu-options>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Basic toolbar with search box component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-toolbar-searchbox</span> component and there have been changes in the css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/toolbars/documentation\" (click)=\"setPath('toolbars')\">link</a></p>\r\n          <ntx-toolbar-searchbox label=\"Notificaciones\" src=\"../../../assets/images/notifications.svg\" [apps]=\"apps\"></ntx-toolbar-searchbox>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Datepicker component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-form-datepicker</span> component and there have been changes in the css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/form-controls/documentation\" (click)=\"setPath('form-controls')\">link</a></p>\r\n          <ntx-form-datepicker></ntx-form-datepicker>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Icon toggle buttons component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-stroked-toggle-button</span> component and there have been changes in the css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-stroked-toggle-button></ntx-stroked-toggle-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Basic chip with image component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-basic-image-chip</span> component and there have been changes in css and ts files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/chips/documentation\" (click)=\"setPath('chips')\">link</a></p>\r\n          <ntx-basic-image-chip [chip] =\"chip\"></ntx-basic-image-chip>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Basic chip component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-basic-chip</span> component and there have been changes in html, ts and css files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/chips/documentation\" (click)=\"setPath('chips')\">link</a></p>\r\n          <ntx-basic-chip [color]=\"'primary'\"></ntx-basic-chip>\r\n          <ntx-basic-chip [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-basic-chip>\r\n          <ntx-basic-chip [color]=\"'accent'\"></ntx-basic-chip>\r\n          <ntx-basic-chip [color]=\"'accent'\"  [disabled]=\"'true'\"></ntx-basic-chip>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Drag and drop added component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-drag-and-drop-added</span> component and there have been changes in html, ts and css files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/drag-and-drop/documentation\" (click)=\"setPath('drag-and-drop')\">link</a></p>\r\n          <ntx-drag-and-drop-added [filesAdded]=\"filesAdded\"></ntx-drag-and-drop-added>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Checkboxes component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-form-checkbox</span> and <span class=\"documentation-code\">ntx-form-checkbox-circle</span>components and there have been changes in the css file. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/form-controls/documentation\" (click)=\"setPath('form-controls')\">link</a></p>\r\n          <ntx-form-checkbox [color]=\"'primary'\" [checked]=\"'true'\" [label]=\"'I´m a checkbox'\"></ntx-form-checkbox>\r\n          <ntx-form-checkbox [color]=\"'primary'\" [disabled]=\"'true'\"[label]=\"'I´m a checkbox'\"></ntx-form-checkbox>\r\n          <ntx-form-checkbox [color]=\"'primary'\" [checked]=\"'true'\"></ntx-form-checkbox>\r\n          <ntx-form-checkbox [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-form-checkbox>\r\n          <ntx-form-checkbox-circle [color]=\"'primary'\" [checked]=\"'true'\" [label]=\"'I´m a checkbox'\"></ntx-form-checkbox-circle>\r\n          <ntx-form-checkbox-circle [color]=\"'primary'\" [disabled]=\"'true'\" [label]=\"'I´m a checkbox'\"></ntx-form-checkbox-circle>\r\n          <ntx-form-checkbox-circle [color]=\"'primary'\" [checked]=\"'true'\"></ntx-form-checkbox-circle>\r\n          <ntx-form-checkbox-circle [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-form-checkbox-circle>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Radio button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-form-radiobutton</span> component and there have been changes in html, ts and css files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/form-controls/documentation\" (click)=\"setPath('form-controls')\">link</a></p>\r\n          <div class=\"\">\r\n            <div class=\"utils--basic-text utils--margin-bottom-16 utils--margin-top-16\">example 01</div>\r\n            <ntx-form-radiobutton color=\"grey\" radioGroupName=\"group_1\" [data]=\"rbgData_1\"></ntx-form-radiobutton>\r\n            <div class=\"utils--basic-text utils--margin-bottom-16 utils--margin-top-16\">example 02</div>\r\n            <ntx-form-radiobutton color=\"orange\" radioGroupName=\"group_2\" [data]=\"rbgData_1\"></ntx-form-radiobutton>\r\n            <div class=\"utils--basic-text utils--margin-bottom-16 utils--margin-top-16\">example 03</div>\r\n            <ntx-form-radiobutton color=\"red\" radioGroupName=\"group_3\" [data]=\"rbgData_1\"></ntx-form-radiobutton>\r\n            <div class=\"utils--basic-text utils--margin-bottom-16 utils--margin-top-16\">example 04</div>\r\n            <ntx-form-radiobutton color=\"blue\" radioGroupName=\"group_4\" [data]=\"rbgData_1\"></ntx-form-radiobutton>\r\n            <div class=\"utils--basic-text utils--margin-bottom-16 utils--margin-top-16\">example 05</div>\r\n            <ntx-form-radiobutton color=\"lightblue\" radioGroupName=\"group_5\" [data]=\"rbgData_1\"></ntx-form-radiobutton>\r\n            <div class=\"utils--basic-text utils--margin-bottom-16 utils--margin-top-16\">example 06</div>\r\n            <ntx-form-radiobutton style=\"margin-left: 18px;\" color=\"grey\" labelPosition=\"before\" radioGroupName=\"group_6\" [data]=\"rbgData_1\"></ntx-form-radiobutton>\r\n            <div class=\"utils--basic-text utils--margin-bottom-16 utils--margin-top-16\">example 07</div>\r\n            <table class=\"radiobutton-example-table\">\r\n              <tr>\r\n                <th>name</th>\r\n                <th>present</th>\r\n                <th>delay</th>\r\n                <th>absence</th>\r\n                <th>excused absence</th>\r\n              </tr>\r\n              <tr>\r\n                <td>John Doe</td>\r\n                <td><ntx-form-radiobutton color=\"blue\" radioGroupName=\"group_7\" [data]=\"rbgData_2\"></ntx-form-radiobutton></td>\r\n                <td><ntx-form-radiobutton color=\"lightblue\" radioGroupName=\"group_7\" [data]=\"rbgData_3\"></ntx-form-radiobutton></td>\r\n                <td><ntx-form-radiobutton color=\"red\" radioGroupName=\"group_7\" [data]=\"rbgData_4\"></ntx-form-radiobutton></td>\r\n                <td><ntx-form-radiobutton color=\"grey\" radioGroupName=\"group_7\" [data]=\"rbgData_5\"></ntx-form-radiobutton></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Amanda Mattersoon</td>\r\n                <td><ntx-form-radiobutton color=\"blue\" radioGroupName=\"group_8\" [data]=\"rbgData_7\"></ntx-form-radiobutton></td>\r\n                <td><ntx-form-radiobutton color=\"lightblue\" radioGroupName=\"group_8\" [data]=\"rbgData_3\"></ntx-form-radiobutton></td>\r\n                <td><ntx-form-radiobutton color=\"red\" radioGroupName=\"group_8\" [data]=\"rbgData_6\"></ntx-form-radiobutton></td>\r\n                <td><ntx-form-radiobutton color=\"grey\" radioGroupName=\"group_8\" [data]=\"rbgData_5\"></ntx-form-radiobutton></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Raised round button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-raised-round-button</span> component and there have been changes in html, ts and css files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <div class=\"utils--flex\">\r\n            <ntx-raised-round-button icon=\"icon-pencil\" text=\"action\" color=\"primary\"></ntx-raised-round-button>\r\n            <div class=\"utils--margin-left-12\"></div>\r\n            <ntx-raised-round-button text=\"action\" color=\"primary\"></ntx-raised-round-button>\r\n            <div class=\"utils--margin-left-12\"></div>\r\n            <ntx-raised-round-button icon=\"icon-pencil\" color=\"primary\"></ntx-raised-round-button>\r\n            <div class=\"utils--margin-left-12\"></div>\r\n            <ntx-raised-round-button text=\"action\" color=\"primary\" disabled=\"true\"></ntx-raised-round-button>\r\n            <div class=\"utils--margin-left-12\"></div>\r\n            <ntx-raised-round-button icon=\"icon-plus\" text=\"action\" color=\"violet\"></ntx-raised-round-button>\r\n            <div class=\"utils--margin-left-12\"></div>\r\n            <ntx-raised-round-button icon=\"icon-send\" text=\"action\" color=\"green\"></ntx-raised-round-button>\r\n            <div class=\"utils--margin-left-12\"></div>\r\n            <ntx-raised-round-button icon=\"icon-home\" text=\"action\" color=\"accent\"></ntx-raised-round-button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Icon button component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-icon-button</span> component and there have been changes in html, ts and css files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/buttons/documentation\" (click)=\"setPath('buttons')\">link</a></p>\r\n          <ntx-icon-button text = \"Let's talk\" iconName = \"icon-chat-bubble\" [color]=\"'primary'\"></ntx-icon-button>\r\n          <ntx-icon-button text = \"Link\" iconName = \"icon-editor-linker-option\" [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-icon-button>\r\n          <ntx-icon-button text = \"Download\" iconName = \"icon-download\" [color]=\"'accent'\"></ntx-icon-button>\r\n          <ntx-icon-button text = \"Cloud\" iconName = \"icon-cloud\" [color]=\"'accent'\" [disabled]=\"'true'\"></ntx-icon-button>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Label component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-label</span> component and there have been changes in html, ts and css files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/labels/documentation\" (click)=\"setPath('labels')\">link</a></p>\r\n          <ntx-label text=\"justificada\"></ntx-label>\r\n          <ntx-label text=\"bloqueado\" color=\"black\"></ntx-label>\r\n          <ntx-label text=\"inactivo\" color=\"orange\"></ntx-label>\r\n          <ntx-label text=\"ausente\" color=\"red\"></ntx-label>\r\n          <ntx-label text=\"presente\" color=\"blue\"></ntx-label>\r\n          <ntx-label text=\"retraso\" color=\"lightblue\"></ntx-label>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Basic table component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-basic-table</span> component and there have been changes in html and css files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/table/documentation\" (click)=\"setPath('table')\">link</a></p>\r\n          <ntx-basic-table [tableData]=\"tableData\"></ntx-basic-table>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Selectable table component</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version we have modified <span class=\"documentation-code\">ntx-selectable-table</span> component and there have been changes in html, css and ts files. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/table-selectable/documentation\" (click)=\"setPath('table-selectable')\">link</a></p>\r\n          <ntx-selectable-table></ntx-selectable-table>\r\n        </div>\r\n\r\n        <div class=\"whatsnew__content-block\">\r\n          <h4>Dialogs</h4>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">In this version, bugs have been fixed in the <span class=\"documentation-code\">ntx-simple-dialog</span> and <span class=\"documentation-code\">ntx-proccess-dialog</span> component and css changes have been affected. You will have to update the new changes so that this component looks correctly.</p>\r\n          <p class=\"whatsnew__content-block--text utils--text-18\">You can check changes and files afected in this <a class=\"\" mat-list-item routerLink=\"/dialogs/documentation\" (click)=\"setPath('dialogs')\">link</a></p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </ntx-card-simple>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/version433/examples/examples.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/ui-pages/version433/examples/examples.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #333;\n  font-family: latoLight;\n  font-size: 42px;\n  line-height: 52px;\n  margin: 0;\n}\n\nh2 {\n  color: #333;\n  font-family: latoLight;\n  font-size: 36px;\n  line-height: 44px;\n  margin: 0;\n}\n\nh3 {\n  color: #333;\n  font-family: lato;\n  font-size: 28px;\n  line-height: 36px;\n  margin: 0;\n}\n\nh4 {\n  color: #333;\n  font-family: latoBold;\n  font-size: 24px;\n  line-height: 30px;\n  margin: 0;\n}\n\nh5 {\n  color: #333;\n  font-family: latoBold;\n  font-size: 18px;\n  line-height: 24px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.card {\n  background-color: white;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.card--outlined {\n  border: 2px solid #DDD;\n}\n\n.utils--title-large {\n  color: #333;\n  font-family: latoBold;\n  font-size: 20px;\n  line-height: 26px;\n  margin: 0;\n}\n\n.utils--title-medium {\n  color: #333;\n  font-family: latoBold;\n  font-size: 18px;\n  line-height: 22px;\n  margin: 0;\n}\n\n.utils--title-small {\n  color: #333;\n  font-family: latoBold;\n  font-size: 16px;\n  line-height: 20px;\n  margin: 0;\n}\n\n.utils--row-title {\n  color: #666;\n  font-family: latoSemibold;\n  font-size: 18px;\n  line-height: 20px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.utils--section-title {\n  color: #333;\n  font-family: latoBold;\n  font-size: 12px;\n  line-height: 15px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.utils--section-title-grey {\n  color: #999;\n  font-family: lato;\n  font-size: 14px;\n  line-height: 17px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.utils--panel-section-title {\n  color: #333;\n  font-family: LatoSemibold;\n  font-size: 16px;\n  line-height: 22px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.utils--basic-text {\n  color: #999;\n  font-family: lato;\n  font-size: 14px;\n  line-height: 18px;\n  margin: 0;\n}\n\n.utils--uppercase {\n  text-transform: uppercase;\n}\n\n.utils--truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.utils--truncate1 {\n  display: -webkit-box;\n  overflow: hidden;\n  word-break: break-word;\n  -webkit-line-clamp: 1;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n}\n\n.utils--truncate2 {\n  display: -webkit-box;\n  max-width: max-content;\n  overflow: hidden;\n  word-break: break-word;\n  -webkit-line-clamp: 2;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n}\n\n.utils--truncate3 {\n  display: -webkit-box;\n  max-width: max-content;\n  overflow: hidden;\n  word-break: break-word;\n  -webkit-line-clamp: 3;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n}\n\n.utils--vertical-align {\n  left: 50%;\n  margin-right: -50% !important;\n  padding: 0 !important;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n}\n\n.utils--horizontal-align {\n  left: 50%;\n  margin-right: -50% !important;\n  padding: 0;\n  position: absolute;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n}\n\n.utils--align-center-text {\n  text-align: center;\n}\n\n.utils--centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.utils--lineclamp-1 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-lines: 1;\n}\n\n.utils--lineclamp-2 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  /* autoprefixer: off */\n}\n\n.utils--img-cover {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.utils--flex-center {\n  align-items: center !important;\n  display: flex !important;\n  justify-content: center !important;\n}\n\n.utils--flex {\n  display: flex !important;\n}\n\n.utils--flex-between {\n  align-items: center;\n  display: flex !important;\n  justify-content: space-between;\n}\n\n.utils--flex-column {\n  display: flex !important;\n  flex-direction: column;\n}\n\n.utils--text-10 {\n  font-size: 10px !important;\n}\n\n.utils--text-12 {\n  font-size: 12px !important;\n}\n\n.utils--text-14 {\n  font-size: 14px !important;\n}\n\n.utils--text-16 {\n  font-size: 16px !important;\n}\n\n.utils--text-18 {\n  font-size: 18px !important;\n}\n\n.utils--text-20 {\n  font-size: 20px !important;\n}\n\n.utils--text-22 {\n  font-size: 22px !important;\n}\n\n.utils--text-24 {\n  font-size: 24px !important;\n}\n\n.utils--text-26 {\n  font-size: 26px !important;\n}\n\n.utils--text-28 {\n  font-size: 28px !important;\n}\n\n.utils--text-32 {\n  font-size: 32px !important;\n}\n\n.utils--text-36 {\n  font-size: 36px !important;\n}\n\n.utils--text-42 {\n  font-size: 42px !important;\n}\n\n.utils--text-48 {\n  font-size: 48px !important;\n}\n\n.utils--text-52 {\n  font-size: 52px !important;\n}\n\n.utils--text-56 {\n  font-size: 56px !important;\n}\n\n.utils--text-black {\n  color: #000 !important;\n}\n\n.utils--text-grey-900 {\n  color: #1A1A1A !important;\n}\n\n.utils--text-grey-800 {\n  color: #333 !important;\n}\n\n.utils--text-grey-700 {\n  color: #666 !important;\n}\n\n.utils--text-grey-600 {\n  color: #999 !important;\n}\n\n.utils--text-grey-500 {\n  color: #BDBDBD !important;\n}\n\n.utils--text-grey-400 {\n  color: #CCC !important;\n}\n\n.utils--text-grey-300 {\n  color: #E2E2E2 !important;\n}\n\n.utils--text-grey-200 {\n  color: #EEE !important;\n}\n\n.utils--text-grey-100 {\n  color: #F9F9F9 !important;\n}\n\n.utils--text-white {\n  color: #FFF !important;\n}\n\n.utils--text-orange {\n  color: #dc8522 !important;\n}\n\n.utils--text-warning {\n  color: #EE9A37 !important;\n}\n\n.utils--text-error {\n  color: #f05060 !important;\n}\n\n.utils--text-primary {\n  color: #1AA9E2 !important;\n}\n\n.utils--bc-black {\n  background-color: #000 !important;\n}\n\n.utils--bc-grey-900 {\n  background-color: #1A1A1A !important;\n}\n\n.utils--bc-grey-800 {\n  background-color: #333 !important;\n}\n\n.utils--bc-grey-700 {\n  background-color: #666 !important;\n}\n\n.utils--bc-grey-600 {\n  background-color: #999 !important;\n}\n\n.utils--bc-grey-500 {\n  background-color: #BDBDBD !important;\n}\n\n.utils--bc-grey-400 {\n  background-color: #CCC !important;\n}\n\n.utils--bc-grey-300 {\n  background-color: #E2E2E2 !important;\n}\n\n.utils--bc-grey-200 {\n  background-color: #EEE !important;\n}\n\n.utils--bc-grey-100 {\n  background-color: #F9F9F9 !important;\n}\n\n.utils--bc-white {\n  background-color: #FFF !important;\n}\n\n.utils--bc-content {\n  background-color: #D65292 !important;\n}\n\n.utils--bc-talent {\n  background-color: #F9BF34 !important;\n}\n\n.utils--bc-random1 {\n  background-color: #41545D !important;\n}\n\n.utils--bc-random2 {\n  background-color: #279ED6 !important;\n}\n\n.utils--bc-random3 {\n  background-color: #9B2761 !important;\n}\n\n.utils--bc-random4 {\n  background-color: #E53B78 !important;\n}\n\n.utils--bc-random5 {\n  background-color: #E7575B !important;\n}\n\n.utils--bc-random6 {\n  background-color: #5cce88 !important;\n}\n\n.utils--bc-random7 {\n  background-color: #199AA8 !important;\n}\n\n.utils--bc-random8 {\n  background-color: #EE9A37 !important;\n}\n\n.utils--bc-random9 {\n  background-color: #B182A6 !important;\n}\n\n.utils--bc-random10 {\n  background-color: #AAD355 !important;\n}\n\n.utils--bc-random11 {\n  background-color: #1D5D93 !important;\n}\n\n.utils--bc-random12 {\n  background-color: #FFC400 !important;\n}\n\n.utils--bc-primary {\n  background-color: #1AA9E2 !important;\n}\n\n.utils--bc-primary-hover {\n  background-color: #0F8FD6 !important;\n}\n\n.utils--bc-accent {\n  background-color: #999 !important;\n}\n\n.utils--bc-accent-hover {\n  background-color: #666 !important;\n}\n\n.utils--bc-success {\n  background-color: #5cce88 !important;\n}\n\n.utils--bc-warning {\n  background-color: #EE9A37 !important;\n}\n\n.utils--bc-error {\n  background-color: #f05060 !important;\n}\n\n.utils--bc-orange {\n  background-color: #dc8522 !important;\n}\n\n.utils--margin-0 {\n  margin: 0 !important;\n}\n\n.utils--margin-top-0 {\n  margin-top: 0 !important;\n}\n\n.utils--margin-top-4 {\n  margin-top: 4px !important;\n}\n\n.utils--margin-top-8 {\n  margin-top: 8px !important;\n}\n\n.utils--margin-top-12 {\n  margin-top: 12px !important;\n}\n\n.utils--margin-top-16 {\n  margin-top: 16px !important;\n}\n\n.utils--margin-top-20 {\n  margin-top: 20px !important;\n}\n\n.utils--margin-top-24 {\n  margin-top: 24px !important;\n}\n\n.utils--margin-top-28 {\n  margin-top: 28px !important;\n}\n\n.utils--margin-top-32 {\n  margin-top: 32px !important;\n}\n\n.utils--margin-top-36 {\n  margin-top: 36px !important;\n}\n\n.utils--margin-top-40 {\n  margin-top: 40px !important;\n}\n\n.utils--margin-top-44 {\n  margin-top: 44px !important;\n}\n\n.utils--margin-top-48 {\n  margin-top: 48px !important;\n}\n\n.utils--margin-top-52 {\n  margin-top: 52px !important;\n}\n\n.utils--margin-top-60 {\n  margin-top: 60px !important;\n}\n\n.utils--margin-top-80 {\n  margin-top: 80px !important;\n}\n\n.utils--margin-top-100 {\n  margin-top: 100px !important;\n}\n\n.utils--margin-right-auto {\n  margin-right: auto !important;\n}\n\n.utils--margin-right-0 {\n  margin-right: 0 !important;\n}\n\n.utils--margin-right-4 {\n  margin-right: 4px !important;\n}\n\n.utils--margin-right-8 {\n  margin-right: 8px !important;\n}\n\n.utils--margin-right-12 {\n  margin-right: 12px !important;\n}\n\n.utils--margin-right-16 {\n  margin-right: 16px !important;\n}\n\n.utils--margin-right-20 {\n  margin-right: 20px !important;\n}\n\n.utils--margin-right-24 {\n  margin-right: 24px !important;\n}\n\n.utils--margin-right-28 {\n  margin-right: 28px !important;\n}\n\n.utils--margin-right-32 {\n  margin-right: 32px !important;\n}\n\n.utils--margin-right-36 {\n  margin-right: 36px !important;\n}\n\n.utils--margin-right-40 {\n  margin-right: 40px !important;\n}\n\n.utils--margin-right-44 {\n  margin-right: 44px !important;\n}\n\n.utils--margin-right-48 {\n  margin-right: 48px !important;\n}\n\n.utils--margin-right-60 {\n  margin-right: 60px !important;\n}\n\n.utils--margin-right-80 {\n  margin-right: 80px !important;\n}\n\n.utils--margin-right-100 {\n  margin-right: 100px !important;\n}\n\n.utils--margin-bottom-0 {\n  margin-bottom: 0 !important;\n}\n\n.utils--margin-bottom-4 {\n  margin-bottom: 4px !important;\n}\n\n.utils--margin-bottom-8 {\n  margin-bottom: 8px !important;\n}\n\n.utils--margin-bottom-12 {\n  margin-bottom: 12px !important;\n}\n\n.utils--margin-bottom-16 {\n  margin-bottom: 16px !important;\n}\n\n.utils--margin-bottom-20 {\n  margin-bottom: 20px !important;\n}\n\n.utils--margin-bottom-24 {\n  margin-bottom: 24px !important;\n}\n\n.utils--margin-bottom-28 {\n  margin-bottom: 28px !important;\n}\n\n.utils--margin-bottom-32 {\n  margin-bottom: 32px !important;\n}\n\n.utils--margin-bottom-36 {\n  margin-bottom: 36px !important;\n}\n\n.utils--margin-bottom-40 {\n  margin-bottom: 40px !important;\n}\n\n.utils--margin-bottom-44 {\n  margin-bottom: 44px !important;\n}\n\n.utils--margin-bottom-48 {\n  margin-bottom: 48px !important;\n}\n\n.utils--margin-bottom-52 {\n  margin-bottom: 52px !important;\n}\n\n.utils--margin-bottom-60 {\n  margin-bottom: 60px !important;\n}\n\n.utils--margin-bottom-80 {\n  margin-bottom: 80px !important;\n}\n\n.utils--margin-bottom-100 {\n  margin-bottom: 100px !important;\n}\n\n.utils--margin-left-0 {\n  margin-left: 0 !important;\n}\n\n.utils--margin-left-auto {\n  margin-left: auto !important;\n}\n\n.utils--margin-left-4 {\n  margin-left: 4px !important;\n}\n\n.utils--margin-left-8 {\n  margin-left: 8px !important;\n}\n\n.utils--margin-left-12 {\n  margin-left: 12px !important;\n}\n\n.utils--margin-left-16 {\n  margin-left: 16px !important;\n}\n\n.utils--margin-left-20 {\n  margin-left: 20px !important;\n}\n\n.utils--margin-left-24 {\n  margin-left: 24px !important;\n}\n\n.utils--margin-left-28 {\n  margin-left: 28px !important;\n}\n\n.utils--margin-left-32 {\n  margin-left: 32px !important;\n}\n\n.utils--margin-left-36 {\n  margin-left: 36px !important;\n}\n\n.utils--margin-left-40 {\n  margin-left: 40px !important;\n}\n\n.utils--margin-left-44 {\n  margin-left: 44px !important;\n}\n\n.utils--margin-left-48 {\n  margin-left: 48px !important;\n}\n\n.utils--margin-left-60 {\n  margin-left: 60px !important;\n}\n\n.utils--margin-left-80 {\n  margin-left: 80px !important;\n}\n\n.utils--margin-left-100 {\n  margin-left: 100px !important;\n}\n\n.utils--padding-0 {\n  padding: 0 !important;\n}\n\n.utils--padding-top-0 {\n  padding-top: 0 !important;\n}\n\n.utils--padding-top-4 {\n  padding-top: 4px !important;\n}\n\n.utils--padding-top-8 {\n  padding-top: 8px !important;\n}\n\n.utils--padding-top-12 {\n  padding-top: 12px !important;\n}\n\n.utils--padding-top-16 {\n  padding-top: 16px !important;\n}\n\n.utils--padding-top-20 {\n  padding-top: 20px !important;\n}\n\n.utils--padding-top-24 {\n  padding-top: 24px !important;\n}\n\n.utils--padding-top-28 {\n  padding-top: 28px !important;\n}\n\n.utils--padding-top-32 {\n  padding-top: 32px !important;\n}\n\n.utils--padding-top-36 {\n  padding-top: 36px !important;\n}\n\n.utils--padding-top-40 {\n  padding-top: 40px !important;\n}\n\n.utils--padding-top-44 {\n  padding-top: 44px !important;\n}\n\n.utils--padding-top-48 {\n  padding-top: 48px !important;\n}\n\n.utils--padding-top-60 {\n  padding-top: 60px !important;\n}\n\n.utils--padding-top-80 {\n  padding-top: 80px !important;\n}\n\n.utils--padding-top-100 {\n  padding-top: 100px !important;\n}\n\n.utils--padding-right-0 {\n  padding-right: 0 !important;\n}\n\n.utils--padding-right-4 {\n  padding-right: 4px !important;\n}\n\n.utils--padding-right-8 {\n  padding-right: 8px !important;\n}\n\n.utils--padding-right-12 {\n  padding-right: 12px !important;\n}\n\n.utils--padding-right-16 {\n  padding-right: 16px !important;\n}\n\n.utils--padding-right-20 {\n  padding-right: 20px !important;\n}\n\n.utils--padding-right-24 {\n  padding-right: 24px !important;\n}\n\n.utils--padding-right-28 {\n  padding-right: 28px !important;\n}\n\n.utils--padding-right-32 {\n  padding-right: 32px !important;\n}\n\n.utils--padding-right-36 {\n  padding-right: 36px !important;\n}\n\n.utils--padding-right-40 {\n  padding-right: 40px !important;\n}\n\n.utils--padding-right-44 {\n  padding-right: 44px !important;\n}\n\n.utils--padding-right-48 {\n  padding-right: 48px !important;\n}\n\n.utils--padding-right-60 {\n  padding-right: 60px !important;\n}\n\n.utils--padding-right-80 {\n  padding-right: 80px !important;\n}\n\n.utils--padding-right-100 {\n  padding-right: 100px !important;\n}\n\n.utils--padding-bottom-0 {\n  padding-bottom: 0 !important;\n}\n\n.utils--padding-bottom-4 {\n  padding-bottom: 4px !important;\n}\n\n.utils--padding-bottom-8 {\n  padding-bottom: 8px !important;\n}\n\n.utils--padding-bottom-12 {\n  padding-bottom: 12px !important;\n}\n\n.utils--padding-bottom-16 {\n  padding-bottom: 16px !important;\n}\n\n.utils--padding-bottom-20 {\n  padding-bottom: 20px !important;\n}\n\n.utils--padding-bottom-24 {\n  padding-bottom: 24px !important;\n}\n\n.utils--padding-bottom-28 {\n  padding-bottom: 28px !important;\n}\n\n.utils--padding-bottom-32 {\n  padding-bottom: 32px !important;\n}\n\n.utils--padding-bottom-36 {\n  padding-bottom: 36px !important;\n}\n\n.utils--padding-bottom-40 {\n  padding-bottom: 40px !important;\n}\n\n.utils--padding-bottom-44 {\n  padding-bottom: 44px !important;\n}\n\n.utils--padding-bottom-48 {\n  padding-bottom: 48px !important;\n}\n\n.utils--padding-bottom-60 {\n  padding-bottom: 60px !important;\n}\n\n.utils--padding-bottom-80 {\n  padding-bottom: 80px !important;\n}\n\n.utils--padding-bottom-100 {\n  padding-bottom: 100px !important;\n}\n\n.utils--padding-left-0 {\n  padding-left: 0 !important;\n}\n\n.utils--padding-left-4 {\n  padding-left: 4px !important;\n}\n\n.utils--padding-left-8 {\n  padding-left: 8px !important;\n}\n\n.utils--padding-left-12 {\n  padding-left: 12px !important;\n}\n\n.utils--padding-left-16 {\n  padding-left: 16px !important;\n}\n\n.utils--padding-left-20 {\n  padding-left: 20px !important;\n}\n\n.utils--padding-left-24 {\n  padding-left: 24px !important;\n}\n\n.utils--padding-left-28 {\n  padding-left: 28px !important;\n}\n\n.utils--padding-left-32 {\n  padding-left: 32px !important;\n}\n\n.utils--padding-left-36 {\n  padding-left: 36px !important;\n}\n\n.utils--padding-left-40 {\n  padding-left: 40px !important;\n}\n\n.utils--padding-left-44 {\n  padding-left: 44px !important;\n}\n\n.utils--padding-left-48 {\n  padding-left: 48px !important;\n}\n\n.utils--padding-left-60 {\n  padding-left: 60px !important;\n}\n\n.utils--padding-left-80 {\n  padding-left: 80px !important;\n}\n\n.utils--padding-left-100 {\n  padding-left: 100px !important;\n}\n\n.utils--w-48 {\n  width: 48px;\n}\n\n.loader {\n  border: 2px solid #FFF;\n  border-top: 2px solid #666;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.whatsnew .card-simple {\n  padding: 0;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__header {\n  align-items: center;\n  background-color: #683C82;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  display: flex;\n  height: 356px;\n  justify-content: center;\n  position: relative;\n  top: -8px;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__header .whatsnew__header--texts {\n  max-width: 60%;\n  text-align: center;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__header .whatsnew__header--texts .whatsnew__header--title {\n  color: #FFF;\n  font-family: latoBold;\n  font-size: 36px;\n  line-height: 46px;\n  margin: 0 0 12px 0;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__header .whatsnew__header--texts .whatsnew__header--subtitle {\n  color: #FFF;\n  font-family: latoBold;\n  font-size: 14px;\n  line-height: 17px;\n  margin: 0;\n  opacity: 0.6;\n  text-transform: uppercase;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__header .whatsnew__header--image {\n  bottom: 0;\n  max-width: 350px;\n  position: absolute;\n  right: 0;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content {\n  margin: 0 auto;\n  max-width: 720px;\n  padding-bottom: 32px;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__announcement {\n  background-color: #EEE;\n  padding: 26px 18px;\n  text-align: center;\n  margin: 56px auto 0;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__announcement .whatsnew__announcement--text {\n  color: #666;\n  font-size: 18px;\n  line-height: 24px;\n  margin: 0;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__separation {\n  border-bottom: 1px solid #CCC;\n  font-size: 28px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 36px auto 0;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__separation .whatsnew__separation--text {\n  background: #FFF;\n  color: #1AA9E2;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 0 18px;\n  position: relative;\n  top: 10px;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__content-block {\n  margin: 56px 0 0 0;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__content-block .whatsnew__content-block--text {\n  line-height: 24px;\n  margin-bottom: 24px;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__content-block .whatsnew__content-block--text .documentation-code {\n  color: #E53B78;\n  font-size: 87%;\n  padding: 4px;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__content-block .whatsnew__content-block--image {\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px #D5DCE1, 0 10px 30px rgba(0, 0, 0, 0.08);\n  margin: 0 auto;\n  max-width: 100%;\n  width: auto;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__content-block .whatsnew__content-block--points {\n  font-size: 17px;\n  line-height: 1.6;\n  margin-bottom: 23px;\n  margin-top: 0;\n  display: block;\n  list-style-type: disc;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  -webkit-padding-start: 40px;\n          padding-inline-start: 40px;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__content-block .whatsnew__content-block--points li {\n  font-size: 17px;\n  line-height: 1.6;\n  margin-bottom: 23px;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__content-block .whatsnew__content-block--card.w33 {\n  width: 33%;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__content-block .whatsnew__content-block--card.w50 {\n  width: 50%;\n}\n\n.whatsnew .card-simple .mat-card-content .whatsnew__content .whatsnew__content-block .whatsnew__content-block--card ntx-card7 {\n  width: 100%;\n  margin: 0 8px;\n}\n\n.icons-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.icons-container .icon-container {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 0 calc(12% - 16px);\n  flex-direction: column;\n  margin: 40px 16px;\n  max-width: calc(12% - 16px);\n  min-width: calc(12% - 16px);\n  position: relative;\n}\n\n.icons-container .icon-container .mat-icon {\n  display: list-item;\n  overflow: hidden;\n}\n\n.icons-container .icon-container label {\n  font-size: 14px;\n  margin-top: 12px;\n  word-break: break-word;\n  text-align: center;\n}\n\n.mat-basic-table {\n  border-radius: 4px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);\n  width: 100%;\n}\n\n.mat-basic-table .mat-basic-table__header {\n  background-color: #F5F6FA;\n  color: #A3A6B4;\n  font-family: LatoSemibold;\n  font-size: 12px;\n  height: 48px;\n  text-transform: uppercase;\n}\n\n.mat-basic-table .mat-basic-table__header th {\n  border-bottom: none;\n  color: #A3A6B4;\n}\n\n.mat-basic-table .mat-basic-table__header th:first-of-type {\n  border-radius: 4px 0 0 0;\n  padding-left: 60px;\n}\n\n.mat-basic-table .mat-basic-table__header th:last-of-type {\n  border-radius: 0 4px 0 0;\n  padding-right: 60px;\n}\n\n.mat-basic-table .mat-basic-table__row {\n  height: 52px;\n}\n\n.mat-basic-table .mat-basic-table__row:last-of-type td.mat-cell:first-of-type {\n  border-radius: 0 0 0 4px;\n}\n\n.mat-basic-table .mat-basic-table__row:last-of-type td.mat-cell:last-of-type {\n  border-radius: 0 0 4px 0;\n}\n\n.mat-basic-table .mat-basic-table__row td.mat-cell {\n  border-bottom-color: #EEE;\n  color: #666;\n}\n\n.mat-basic-table .mat-basic-table__row td.mat-cell:first-of-type {\n  padding-left: 60px;\n}\n\n.mat-basic-table .mat-basic-table__row td.mat-cell:last-of-type {\n  padding-right: 60px;\n}\n\n.radiobutton-example-table {\n  border-collapse: collapse;\n}\n\n.radiobutton-example-table tr:first-of-type {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom: 1px solid #EEE;\n  text-transform: uppercase;\n}\n\n.radiobutton-example-table tr:not(:first-of-type) {\n  height: 60px;\n}\n\n.radiobutton-example-table th {\n  background-color: white;\n  text-align: left;\n  height: 48px;\n}\n\n.radiobutton-example-table td {\n  background-color: rgba(26, 169, 226, 0.05);\n}\n\n.radiobutton-example-table td:first-of-type {\n  border-right: 1px solid #EEE;\n}\n\n.radiobutton-example-table td:not(:first-of-type) {\n  min-width: 100px;\n}\n\n.radiobutton-example-table th, .radiobutton-example-table td {\n  padding: 0 16px;\n}\n\n@media (max-width: 1280px) {\n  .whatsnew .card-simple .mat-card-content .whatsnew__header {\n    height: 256px;\n  }\n  .whatsnew .card-simple .mat-card-content .whatsnew__header .whatsnew__header--texts .whatsnew__header--title {\n    font-size: 32px;\n    line-height: 40px;\n  }\n  .whatsnew .card-simple .mat-card-content .whatsnew__header .whatsnew__header--image {\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvdmVyc2lvbjQzMy9leGFtcGxlcy9DOlxccHJveWVjdG9zXFx1eC1jb21wb25lbnRzL3NyY1xcYXBwXFx1aS1wYWdlc1xcdmVyc2lvbjQzM1xcZXhhbXBsZXNcXGV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS1wYWdlcy92ZXJzaW9uNDMzL2V4YW1wbGVzL0M6XFxwcm95ZWN0b3NcXHV4LWNvbXBvbmVudHMvcHJvamVjdHNcXG5ldGV4XFx1eC1jb21wb25lbnRzXFxzcmNcXHN0eWxlc1xcYXBwXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvdmVyc2lvbjQzMy9leGFtcGxlcy9DOlxccHJveWVjdG9zXFx1eC1jb21wb25lbnRzL3Byb2plY3RzXFxuZXRleFxcdXgtY29tcG9uZW50c1xcc3JjXFxzdHlsZXNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3VpLXBhZ2VzL3ZlcnNpb240MzMvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLXBhZ2VzL3ZlcnNpb240MzMvZXhhbXBsZXMvQzpcXHByb3llY3Rvc1xcdXgtY29tcG9uZW50cy9wcm9qZWN0c1xcbmV0ZXhcXHV4LWNvbXBvbmVudHNcXHNyY1xcc3R5bGVzXFxhcHBcXG1peGluZ3Muc2NzcyIsInNyYy9hcHAvdWktcGFnZXMvdmVyc2lvbjQzMy9leGFtcGxlcy9DOlxccHJveWVjdG9zXFx1eC1jb21wb25lbnRzL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUNGZTtFREdmLHVCQUFBO0VBQ0EsZ0JFZ0JvQjtFRmZwQixrQkFBQTtFQUNBLFVBQUE7Q0dIRDs7QUhLRDtFQUNFLFlDVGU7RURVZix1QkFBQTtFQUNBLGdCRVFvQjtFRlBwQixrQkFBQTtFQUNBLFVBQUE7Q0dGRDs7QUhJRDtFQUNFLFlDaEJlO0VEaUJmLGtCQUFBO0VBQ0EsZ0JFRG9CO0VGRXBCLGtCQUFBO0VBQ0EsVUFBQTtDR0REOztBSEdEO0VBQ0UsWUN2QmU7RUR3QmYsc0JBQUE7RUFDQSxnQkVWb0I7RUZXcEIsa0JBQUE7RUFDQSxVQUFBO0NHQUQ7O0FIRUQ7RUFDRSxZQzlCZTtFRCtCZixzQkFBQTtFQUNBLGdCRXBCb0I7RUZxQnBCLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0NHQ0Q7O0FIRUQ7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtDR0NEOztBSEFDO0VBQ0UsdUJBQUE7Q0dFSDs7QUhNQztFQUNFLFlDckRhO0VEc0RiLHNCQUFBO0VBQ0EsZ0JFMUNrQjtFRjJDbEIsa0JBQUE7RUFDQSxVQUFBO0NHSEg7O0FIS0M7RUFDRSxZQzVEYTtFRDZEYixzQkFBQTtFQUNBLGdCRWxEa0I7RUZtRGxCLGtCQUFBO0VBQ0EsVUFBQTtDR0hIOztBSEtDO0VBQ0UsWUNuRWE7RURvRWIsc0JBQUE7RUFDQSxnQkUxRGtCO0VGMkRsQixrQkFBQTtFQUNBLFVBQUE7Q0dISDs7QUhLQztFQUNFLFlDekVhO0VEMEViLDBCQUFBO0VBQ0EsZ0JFaEVrQjtFRmlFbEIsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7Q0dISDs7QUhLQztFQUNFLFlDbEZhO0VEbUZiLHNCQUFBO0VBQ0EsZ0JFM0VrQjtFRjRFbEIsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7Q0dISDs7QUhLQztFQUNFLFlDeEZhO0VEeUZiLGtCQUFBO0VBQ0EsZ0JFbEZrQjtFRm1GbEIsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7Q0dISDs7QUhLQztFQUNFLFlDbEdhO0VEbUdiLDBCQUFBO0VBQ0EsZ0JFekZrQjtFRjBGbEIsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7Q0dISDs7QUhLQztFQUNFLFlDeEdhO0VEeUdiLGtCQUFBO0VBQ0EsZ0JFbEdrQjtFRm1HbEIsa0JBQUE7RUFDQSxVQUFBO0NHSEg7O0FITUE7RUFDQywwQkFBQTtDR0pEOztBSE9DO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0NHTEQ7O0FIUUE7RUFDRyxxQkFBQTtFQUVBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7Q0dQSDs7QUhVQztFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDRixpQkFBQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0NHUkg7O0FIV0M7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0YsaUJBQUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtDR1RIOztBSFlDO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxTQUFBO0NHVkg7O0FIYUM7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0NHWEg7O0FIY0M7RUFDRSxtQkFBQTtDR1pIOztBSGVDO0VJeklBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0NENkhEOztBSGFDO0VJdEtBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFKb0tvQjtDR1JyQjs7QUhXQztFSW5LQSxxQkFBQTtFQUNBLHNCSm1LOEI7RUlsSzlCLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0NEMkpEOztBSE9DO0VJcElBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7S0FBQSxrQkFBQTtDRGdJRDs7QUhPQztFQUNFLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtDR0xIOztBSE9DO0VBQ0UseUJBQUE7Q0dMSDs7QUhPQztFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtDR0xIOztBSE9DO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtDR0xIOztBSFNDO0VBQ0EsMkJBQUE7Q0dQRDs7QUhTQztFQUNBLDJCQUFBO0NHUEQ7O0FIU0M7RUFDQSwyQkFBQTtDR1BEOztBSFNDO0VBQ0EsMkJBQUE7Q0dQRDs7QUhTQztFQUNBLDJCQUFBO0NHUEQ7O0FIU0M7RUFDQSwyQkFBQTtDR1BEOztBSFNDO0VBQ0EsMkJBQUE7Q0dQRDs7QUhTQztFQUNBLDJCQUFBO0NHUEQ7O0FIU0M7RUFDQSwyQkFBQTtDR1BEOztBSFNDO0VBQ0EsMkJBQUE7Q0dQRDs7QUhTQztFQUNBLDJCQUFBO0NHUEQ7O0FIU0M7RUFDQSwyQkFBQTtDR1BEOztBSFNDO0VBQ0EsMkJBQUE7Q0dQRDs7QUhTQztFQUNBLDJCQUFBO0NHUEQ7O0FIU0M7RUFDQSwyQkFBQTtDR1BEOztBSFNDO0VBQ0EsMkJBQUE7Q0dQRDs7QUhXQztFQUNBLHVCQUFBO0NHVEQ7O0FIV0M7RUFDQSwwQkFBQTtDR1REOztBSFdDO0VBQ0EsdUJBQUE7Q0dURDs7QUhXQztFQUNBLHVCQUFBO0NHVEQ7O0FIV0M7RUFDQSx1QkFBQTtDR1REOztBSFdDO0VBQ0EsMEJBQUE7Q0dURDs7QUhXQztFQUNBLHVCQUFBO0NHVEQ7O0FIV0M7RUFDQSwwQkFBQTtDR1REOztBSFdDO0VBQ0EsdUJBQUE7Q0dURDs7QUhXQztFQUNBLDBCQUFBO0NHVEQ7O0FIV0M7RUFDQSx1QkFBQTtDR1REOztBSFdDO0VBQ0EsMEJBQUE7Q0dURDs7QUhXQztFQUNBLDBCQUFBO0NHVEQ7O0FIV0M7RUFDQSwwQkFBQTtDR1REOztBSFdDO0VBQ0EsMEJBQUE7Q0dURDs7QUhhQztFQUNFLGtDQUFBO0NHWEg7O0FIYUM7RUFDRSxxQ0FBQTtDR1hIOztBSGFDO0VBQ0Usa0NBQUE7Q0dYSDs7QUhhQztFQUNFLGtDQUFBO0NHWEg7O0FIYUM7RUFDRSxrQ0FBQTtDR1hIOztBSGFDO0VBQ0UscUNBQUE7Q0dYSDs7QUhhQztFQUNFLGtDQUFBO0NHWEg7O0FIYUM7RUFDRSxxQ0FBQTtDR1hIOztBSGFDO0VBQ0Usa0NBQUE7Q0dYSDs7QUhhQztFQUNFLHFDQUFBO0NHWEg7O0FIYUM7RUFDRSxrQ0FBQTtDR1hIOztBSGVDO0VBQ0UscUNBQUE7Q0diSDs7QUhlQztFQUNFLHFDQUFBO0NHYkg7O0FIaUJDO0VBQ0UscUNBQUE7Q0dmSDs7QUhpQkM7RUFDRSxxQ0FBQTtDR2ZIOztBSGlCQztFQUNFLHFDQUFBO0NHZkg7O0FIaUJDO0VBQ0UscUNBQUE7Q0dmSDs7QUhpQkM7RUFDRSxxQ0FBQTtDR2ZIOztBSGlCQztFQUNFLHFDQUFBO0NHZkg7O0FIaUJDO0VBQ0UscUNBQUE7Q0dmSDs7QUhpQkM7RUFDRSxxQ0FBQTtDR2ZIOztBSGlCQztFQUNFLHFDQUFBO0NHZkg7O0FIaUJDO0VBQ0UscUNBQUE7Q0dmSDs7QUhpQkM7RUFDRSxxQ0FBQTtDR2ZIOztBSGlCQztFQUNFLHFDQUFBO0NHZkg7O0FIbUJDO0VBQ0UscUNBQUE7Q0dqQkg7O0FIbUJDO0VBQ0UscUNBQUE7Q0dqQkg7O0FIbUJDO0VBQ0Usa0NBQUE7Q0dqQkg7O0FIbUJDO0VBQ0Usa0NBQUE7Q0dqQkg7O0FIcUJDO0VBQ0UscUNBQUE7Q0duQkg7O0FIcUJDO0VBQ0UscUNBQUE7Q0duQkg7O0FIcUJDO0VBQ0UscUNBQUE7Q0duQkg7O0FIdUJDO0VBQ0UscUNBQUE7Q0dyQkg7O0FIeUJDO0VBQ0EscUJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MseUJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsMkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsMkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsOEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsMkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsOEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsOEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsOEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsOEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsOEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsOEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsOEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsOEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsOEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsOEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsOEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsOEJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsOEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsOEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsK0JBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsK0JBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsK0JBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsK0JBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsZ0NBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsMEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNEJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNkJBQUE7Q0d2QkQ7O0FIeUJBO0VBQ0MsNkJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNkJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNkJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNkJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNkJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNkJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNkJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNkJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsNkJBQUE7Q0d2QkQ7O0FIeUJDO0VBQ0EsOEJBQUE7Q0d2QkQ7O0FIMkJDO0VBQ0Esc0JBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsMEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNkJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNkJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNkJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNkJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsNkJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsNkJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsNkJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsNkJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsNkJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsNkJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsNkJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsNkJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsOEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsOEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsOEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsK0JBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsK0JBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsK0JBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsK0JBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsK0JBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsK0JBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsK0JBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsK0JBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsK0JBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsK0JBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsK0JBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsK0JBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsZ0NBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNkJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsK0JBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsK0JBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsZ0NBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsZ0NBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsZ0NBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsZ0NBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsZ0NBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsZ0NBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsZ0NBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsZ0NBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsZ0NBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsZ0NBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsZ0NBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsZ0NBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsaUNBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsMkJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNkJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsNkJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsOEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsOEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsOEJBQUE7Q0d6QkQ7O0FIMkJBO0VBQ0MsOEJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsOEJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsOEJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsOEJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsOEJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsOEJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsOEJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsOEJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsOEJBQUE7Q0d6QkQ7O0FIMkJDO0VBQ0EsK0JBQUE7Q0d6QkQ7O0FINkJDO0VBQ0UsWUV4dkJzQjtDQzZ0QnpCOztBSCtCRDtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtDRzVCRDs7QUg4QkQ7RUFDRTtJQUFLLGdDQUFBO1lBQUEsd0JBQUE7R0cxQko7RUgyQkQ7SUFBTyxrQ0FBQTtZQUFBLDBCQUFBO0dHeEJOO0NBQ0Y7O0FIcUJEO0VBQ0U7SUFBSyxnQ0FBQTtZQUFBLHdCQUFBO0dHMUJKO0VIMkJEO0lBQU8sa0NBQUE7WUFBQSwwQkFBQTtHR3hCTjtDQUNGOztBRS95QkM7RUFDRSxXQUFBO0NGaXpCSDs7QUUveUJLO0VBQ0Usb0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0NGaXpCUDs7QUVoekJPO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0NGa3pCVDs7QUVqekJTO0VBQ0UsWUpWSztFSVdMLHNCQUFBO0VBQ0EsZ0JIRFU7RUdFVixrQkFBQTtFQUNBLG1CQUFBO0NGbXpCWDs7QUVqekJTO0VBQ0UsWUpqQks7RUlrQkwsc0JBQUE7RUFDQSxnQkhqQlU7RUdrQlYsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0NGbXpCWDs7QUVoekJPO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0NGa3pCVDs7QUUveUJLO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7Q0ZpekJQOztBRWh6Qk87RUFDRSx1Qkp4Q087RUl5Q1AsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0NGa3pCVDs7QUVqekJTO0VBQ0UsWUpsREs7RUltREwsZ0JIeENVO0VHeUNWLGtCQUFBO0VBQ0EsVUFBQTtDRm16Qlg7O0FFaHpCTztFQUNFLDhCQUFBO0VBQ0EsZ0JIMUNZO0VHMkNaLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7Q0ZrekJUOztBRWp6QlM7RUFDRSxpQkoxREs7RUkyREwsZUpqQ1U7RUlrQ1YsZ0JIeERVO0VHeURWLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7Q0ZtekJYOztBRWh6Qk87RUFDRSxtQkFBQTtDRmt6QlQ7O0FFanpCUztFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7Q0ZtekJYOztBRWx6Qlc7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7Q0ZvekJiOztBRWp6QlM7RUFDRSxtQkFBQTtFQUNBLCtEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtDRm16Qlg7O0FFanpCUztFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtVQUFBLHdCQUFBO0VBQ0EsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7VUFBQSwyQkFBQTtDRm16Qlg7O0FFbHpCVztFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtDRm96QmI7O0FFaHpCVztFQUNFLFdBQUE7Q0ZrekJiOztBRWh6Qlc7RUFDRSxXQUFBO0NGa3pCYjs7QUVoekJXO0VBQ0UsWUFBQTtFQUNBLGNBQUE7Q0ZrekJiOztBRXh5QkQ7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7Q0YyeUJEOztBRTF5QkM7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtDRjR5Qkg7O0FFM3lCRztFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7Q0Y2eUJMOztBRTN5Qkc7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtDRjZ5Qkw7O0FFdnlCRDtFQUNFLG1CQUFBO0VBQ0EsMENIbEhPO0VHbUhQLFlBQUE7Q0YweUJEOztBRXp5QkM7RUFDRSwwQkp2SjJCO0VJd0ozQixlSnZKMkI7RUl3SjNCLDBCQUFBO0VBQ0EsZ0JINUprQjtFRzZKbEIsYUh6R2dCO0VHMEdoQiwwQkFBQTtDRjJ5Qkg7O0FFMXlCRztFQUNFLG9CQUFBO0VBQ0EsZUo5SnlCO0NFMDhCOUI7O0FFM3lCSztFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7Q0Y2eUJQOztBRTN5Qks7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0NGNnlCUDs7QUV6eUJDO0VBQ0UsYUh4SGE7Q0NtNkJoQjs7QUV2eUJTO0VBQ0UseUJBQUE7Q0Z5eUJYOztBRXZ5QlM7RUFDRSx5QkFBQTtDRnl5Qlg7O0FFbnlCSztFQUNFLDBCSi9MUztFSWdNVCxZSnJNUztDRTArQmhCOztBRXB5Qk87RUFDRSxtQkFBQTtDRnN5QlQ7O0FFcHlCTztFQUNFLG9CQUFBO0NGc3lCVDs7QUUveEJEO0VBRUUsMEJBQUE7Q0ZpeUJEOztBRWh5QkM7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtDRmt5Qkg7O0FFaHlCQztFQUNFLGFBQUE7Q0ZreUJIOztBRWh5QkM7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtDRmt5Qkg7O0FFaHlCQztFQUNFLDJDQUFBO0NGa3lCSDs7QUVqeUJHO0VBQ0UsNkJBQUE7Q0ZteUJMOztBRWp5Qkc7RUFDRSxpQkFBQTtDRm15Qkw7O0FFaHlCQztFQUNFLGdCQUFBO0NGa3lCSDs7QUU3eEJEO0VBSVE7SUFDRSxjQUFBO0dGNnhCUDtFRTN4QlM7SUFDRSxnQkh4T1E7SUd5T1Isa0JBQUE7R0Y2eEJYO0VFMXhCTztJQUNFLGlCQUFBO0dGNHhCVDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvdWktcGFnZXMvdmVyc2lvbjQzMy9leGFtcGxlcy9leGFtcGxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcImNvbG9yc1wiO1xyXG5AaW1wb3J0IFwibWl4aW5nc1wiO1xyXG5cclxuaDF7XHJcbiAgY29sb3I6ICRjb2xvci1ncmV5LTgwMDtcclxuICBmb250LWZhbWlseTogbGF0b0xpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS00MjtcclxuICBsaW5lLWhlaWdodDogNTJweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaDJ7XHJcbiAgY29sb3I6ICRjb2xvci1ncmV5LTgwMDtcclxuICBmb250LWZhbWlseTogbGF0b0xpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0zNjtcclxuICBsaW5lLWhlaWdodDogNDRweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaDN7XHJcbiAgY29sb3I6ICRjb2xvci1ncmV5LTgwMDtcclxuICBmb250LWZhbWlseTogbGF0bztcclxuICBmb250LXNpemU6ICRmb250LXNpemUtMjg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmg0e1xyXG4gIGNvbG9yOiAkY29sb3ItZ3JleS04MDA7XHJcbiAgZm9udC1mYW1pbHk6IGxhdG9Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0yNDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaDV7XHJcbiAgY29sb3I6ICRjb2xvci1ncmV5LTgwMDtcclxuICBmb250LWZhbWlseTogbGF0b0JvbGQ7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLTE4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmLS1vdXRsaW5lZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjREREO1xyXG4gIH1cclxufVxyXG5cclxuJGJsb2NrOiBcInV0aWxzXCI7XHJcblxyXG4uI3skYmxvY2t9IHtcclxuICAvL1RleHRvc1xyXG4gICYtLXRpdGxlLWxhcmdlIHtcclxuICAgIGNvbG9yOiAkY29sb3ItZ3JleS04MDA7XHJcbiAgICBmb250LWZhbWlseTogbGF0b0JvbGQ7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtMjA7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgJi0tdGl0bGUtbWVkaXVtIHtcclxuICAgIGNvbG9yOiAkY29sb3ItZ3JleS04MDA7XHJcbiAgICBmb250LWZhbWlseTogbGF0b0JvbGQ7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtMTg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgJi0tdGl0bGUtc21hbGwge1xyXG4gICAgY29sb3I6ICRjb2xvci1ncmV5LTgwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xNjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAmLS1yb3ctdGl0bGUge1xyXG4gICAgY29sb3I6ICRjb2xvci1ncmV5LTcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvU2VtaWJvbGQ7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtMTg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gICYtLXNlY3Rpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICRjb2xvci1ncmV5LTgwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xMjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgJi0tc2VjdGlvbi10aXRsZS1ncmV5IHtcclxuICAgIGNvbG9yOiAkY29sb3ItZ3JleS02MDA7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xNDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgJi0tcGFuZWwtc2VjdGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktODAwO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG9TZW1pYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xNjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgJi0tYmFzaWMtdGV4dCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtMTQ7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG5cdCYtLXVwcGVyY2FzZSB7XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuXHJcbiAgJi0tdHJ1bmNhdGUge1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcblxyXG5cdCYtLXRydW5jYXRlMSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC8vIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgJi0tdHJ1bmNhdGUyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgfVxyXG5cclxuICAmLS10cnVuY2F0ZTMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gICYtLXZlcnRpY2FsLWFsaWduIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTUwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0b3A6IDUwJTtcclxuICB9XHJcblxyXG4gICYtLWhvcml6b250YWwtYWxpZ24ge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gIH1cclxuXHJcbiAgJi0tYWxpZ24tY2VudGVyLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJi0tY2VudGVyZWQge1xyXG4gICAgQGluY2x1ZGUgY2VudGVyZXI7XHJcbiAgfVxyXG5cclxuICAmLS1saW5lY2xhbXAtMSB7XHJcbiAgICBAaW5jbHVkZSBlbGxpcHNpcygxKTtcclxuICB9XHJcblxyXG4gICYtLWxpbmVjbGFtcC0yIHtcclxuICAgIEBpbmNsdWRlIGVsbGlwc2lzLW11bHRpbGluZSgyKTtcclxuICB9XHJcblxyXG4gICYtLWltZy1jb3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbWctY292ZXIoKTtcclxuICB9XHJcblxyXG4gIC8vRGlzcGxheVxyXG4gICYtLWZsZXgtY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1mbGV4LWJldHdlZW4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgJi0tZmxleC1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC8vVGFtYcOxb3MgZnVlbnRlXHJcbiAgJi0tdGV4dC0xMCB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMTAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0xMiB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMTIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0xNCB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMTQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0xNiB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMTYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0xOCB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMTggIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0yMCB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0yMiB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMjIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0yNCB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMjQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0yNiB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMjYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0yOCB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMjggIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0zMiB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMzIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC0zNiB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtMzYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC00MiB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtNDIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC00OCB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtNDggIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC01MiB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtNTIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC01NiB7XHJcblx0XHRmb250LXNpemU6ICRmb250LXNpemUtNTYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8vQ29sb3Jlc1xyXG4gICYtLXRleHQtYmxhY2sge1xyXG5cdFx0Y29sb3I6ICRjb2xvci1ibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS10ZXh0LWdyZXktOTAwIHtcclxuXHRcdGNvbG9yOiAkY29sb3ItZ3JleS05MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC1ncmV5LTgwMCB7XHJcblx0XHRjb2xvcjogJGNvbG9yLWdyZXktODAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXRleHQtZ3JleS03MDAge1xyXG5cdFx0Y29sb3I6ICRjb2xvci1ncmV5LTcwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS10ZXh0LWdyZXktNjAwIHtcclxuXHRcdGNvbG9yOiAkY29sb3ItZ3JleS02MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC1ncmV5LTUwMCB7XHJcblx0XHRjb2xvcjogJGNvbG9yLWdyZXktNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXRleHQtZ3JleS00MDAge1xyXG5cdFx0Y29sb3I6ICRjb2xvci1ncmV5LTQwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS10ZXh0LWdyZXktMzAwIHtcclxuXHRcdGNvbG9yOiAkY29sb3ItZ3JleS0zMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC1ncmV5LTIwMCB7XHJcblx0XHRjb2xvcjogJGNvbG9yLWdyZXktMjAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXRleHQtZ3JleS0xMDAge1xyXG5cdFx0Y29sb3I6ICRjb2xvci1ncmV5LTEwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS10ZXh0LXdoaXRlIHtcclxuXHRcdGNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC1vcmFuZ2Uge1xyXG5cdFx0Y29sb3I6ICRjb2xvci1vcmFuZ2UgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC13YXJuaW5nIHtcclxuXHRcdGNvbG9yOiAkY29sb3Itd2FybmluZyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS10ZXh0LWVycm9yIHtcclxuXHRcdGNvbG9yOiAkY29sb3ItZXJyb3IgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tdGV4dC1wcmltYXJ5IHtcclxuXHRcdGNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLy9Db2xvcmVzIGRlIGZvbmRvIC0gRXNjYWxhIGRlIGdyaXNlc1xyXG4gICYtLWJjLWJsYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy1ncmV5LTkwMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS05MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tYmMtZ3JleS04MDAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktODAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWJjLWdyZXktNzAwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LTcwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy1ncmV5LTYwMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS02MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tYmMtZ3JleS01MDAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWJjLWdyZXktNDAwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LTQwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy1ncmV5LTMwMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS0zMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tYmMtZ3JleS0yMDAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktMjAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWJjLWdyZXktMTAwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LTEwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8vQ29sb3JlcyBkZSBmb25kbyAtIENvbG9yZXMgY29ycG9yYXRpdm9zXHJcbiAgJi0tYmMtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItY29udGVudGNsb3VkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWJjLXRhbGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGFsZW50Y2xvdWQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8vQ29sb3JlcyBkZSBmb25kbyAtIENvbG9yZXMgcmFuZG9tXHJcbiAgJi0tYmMtcmFuZG9tMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmFuZG9tMSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy1yYW5kb20yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yYW5kb20yICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWJjLXJhbmRvbTMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJhbmRvbTMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tYmMtcmFuZG9tNCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmFuZG9tNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy1yYW5kb201IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yYW5kb201ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWJjLXJhbmRvbTYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJhbmRvbTYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tYmMtcmFuZG9tNyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmFuZG9tNyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy1yYW5kb204IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yYW5kb204ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWJjLXJhbmRvbTkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJhbmRvbTkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tYmMtcmFuZG9tMTAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJhbmRvbTEwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWJjLXJhbmRvbTExIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yYW5kb20xMSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy1yYW5kb20xMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmFuZG9tMTIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8vQ29sb3JlcyBkZSBmb25kbyAtIENvbG9yZXMgYWNjacOzblxyXG4gICYtLWJjLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tYmMtcHJpbWFyeS1ob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1ob3ZlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy1hY2NlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFjY2VudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy1hY2NlbnQtaG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFjY2VudC1ob3ZlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLy9Db2xvcmVzIGRlIGZvbmRvIC0gQ29sb3JlcyBlc3RhZG9zXHJcbiAgJi0tYmMtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc3VjY2VzcyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1iYy13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13YXJuaW5nICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLWJjLWVycm9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1lcnJvciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLy9Db2xvcmVzIGRlIGZvbmRvIC0gQ29sb3JlcyBsYWJlbHNcclxuICAmLS1iYy1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLy9Nw6FyZ2VuZXNcclxuICAmLS1tYXJnaW4tMCB7XHJcblx0XHRtYXJnaW46ICRzZXBhcmF0aW9uLTAgIWltcG9ydGFudDtcclxuICB9XHJcblx0Ji0tbWFyZ2luLXRvcC0wIHtcclxuXHRcdG1hcmdpbi10b3A6ICRzZXBhcmF0aW9uLTAgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLXRvcC00IHtcclxuXHRcdG1hcmdpbi10b3A6ICRzZXBhcmF0aW9uLTQgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLXRvcC04IHtcclxuXHRcdG1hcmdpbi10b3A6ICRzZXBhcmF0aW9uLTggIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLXRvcC0xMiB7XHJcblx0XHRtYXJnaW4tdG9wOiAkc2VwYXJhdGlvbi0xMiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1tYXJnaW4tdG9wLTE2IHtcclxuXHRcdG1hcmdpbi10b3A6ICRzZXBhcmF0aW9uLTE2ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLW1hcmdpbi10b3AtMjAge1xyXG5cdFx0bWFyZ2luLXRvcDogJHNlcGFyYXRpb24tMjAgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLXRvcC0yNCB7XHJcblx0XHRtYXJnaW4tdG9wOiAkc2VwYXJhdGlvbi0yNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tdG9wLTI4IHtcclxuXHRcdG1hcmdpbi10b3A6ICRzZXBhcmF0aW9uLTI4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi10b3AtMzIge1xyXG5cdFx0bWFyZ2luLXRvcDogJHNlcGFyYXRpb24tMzIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tbWFyZ2luLXRvcC0zNiB7XHJcblx0XHRtYXJnaW4tdG9wOiAkc2VwYXJhdGlvbi0zNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tdG9wLTQwIHtcclxuXHRcdG1hcmdpbi10b3A6ICRzZXBhcmF0aW9uLTQwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi10b3AtNDQge1xyXG5cdFx0bWFyZ2luLXRvcDogJHNlcGFyYXRpb24tNDQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tbWFyZ2luLXRvcC00OCB7XHJcblx0XHRtYXJnaW4tdG9wOiAkc2VwYXJhdGlvbi00OCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tdG9wLTUyIHtcclxuXHRcdG1hcmdpbi10b3A6ICRzZXBhcmF0aW9uLTUyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cdCYtLW1hcmdpbi10b3AtNjAge1xyXG5cdFx0bWFyZ2luLXRvcDogJHNlcGFyYXRpb24tNjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tbWFyZ2luLXRvcC04MCB7XHJcblx0XHRtYXJnaW4tdG9wOiAkc2VwYXJhdGlvbi04MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tdG9wLTEwMCB7XHJcblx0XHRtYXJnaW4tdG9wOiAkc2VwYXJhdGlvbi0xMDAgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLXJpZ2h0LWF1dG8ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLW1hcmdpbi1yaWdodC0wIHtcclxuXHRcdG1hcmdpbi1yaWdodDogJHNlcGFyYXRpb24tMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1tYXJnaW4tcmlnaHQtNCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTQgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLXJpZ2h0LTgge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAkc2VwYXJhdGlvbi04ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLW1hcmdpbi1yaWdodC0xMiB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTEyICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLW1hcmdpbi1yaWdodC0xNiB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTE2ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLW1hcmdpbi1yaWdodC0yMCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTIwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLW1hcmdpbi1yaWdodC0yNCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTI0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1yaWdodC0yOCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTI4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1yaWdodC0zMiB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTMyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1yaWdodC0zNiB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTM2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1yaWdodC00MCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTQwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1yaWdodC00NCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTQ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1yaWdodC00OCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTQ4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1yaWdodC02MCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1yaWdodC04MCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6ICRzZXBhcmF0aW9uLTgwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1yaWdodC0xMDAge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAkc2VwYXJhdGlvbi0xMDAgIWltcG9ydGFudDtcclxuICB9XHJcblx0Ji0tbWFyZ2luLWJvdHRvbS0wIHtcclxuXHRcdG1hcmdpbi1ib3R0b206ICRzZXBhcmF0aW9uLTAgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLWJvdHRvbS00IHtcclxuXHRcdG1hcmdpbi1ib3R0b206ICRzZXBhcmF0aW9uLTQgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLWJvdHRvbS04IHtcclxuXHRcdG1hcmdpbi1ib3R0b206ICRzZXBhcmF0aW9uLTggIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLWJvdHRvbS0xMiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAkc2VwYXJhdGlvbi0xMiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1tYXJnaW4tYm90dG9tLTE2IHtcclxuXHRcdG1hcmdpbi1ib3R0b206ICRzZXBhcmF0aW9uLTE2ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLW1hcmdpbi1ib3R0b20tMjAge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogJHNlcGFyYXRpb24tMjAgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLWJvdHRvbS0yNCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAkc2VwYXJhdGlvbi0yNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tYm90dG9tLTI4IHtcclxuXHRcdG1hcmdpbi1ib3R0b206ICRzZXBhcmF0aW9uLTI4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1ib3R0b20tMzIge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogJHNlcGFyYXRpb24tMzIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tbWFyZ2luLWJvdHRvbS0zNiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAkc2VwYXJhdGlvbi0zNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tYm90dG9tLTQwIHtcclxuXHRcdG1hcmdpbi1ib3R0b206ICRzZXBhcmF0aW9uLTQwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1ib3R0b20tNDQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogJHNlcGFyYXRpb24tNDQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tbWFyZ2luLWJvdHRvbS00OCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAkc2VwYXJhdGlvbi00OCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tYm90dG9tLTUyIHtcclxuXHRcdG1hcmdpbi1ib3R0b206ICRzZXBhcmF0aW9uLTUyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1ib3R0b20tNjAge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogJHNlcGFyYXRpb24tNjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tbWFyZ2luLWJvdHRvbS04MCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAkc2VwYXJhdGlvbi04MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tYm90dG9tLTEwMCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAkc2VwYXJhdGlvbi0xMDAgIWltcG9ydGFudDtcclxuICB9XHJcblx0Ji0tbWFyZ2luLWxlZnQtMCB7XHJcblx0XHRtYXJnaW4tbGVmdDogJHNlcGFyYXRpb24tMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1tYXJnaW4tbGVmdC1hdXRvIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLW1hcmdpbi1sZWZ0LTQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6ICRzZXBhcmF0aW9uLTQgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLWxlZnQtOCB7XHJcblx0XHRtYXJnaW4tbGVmdDogJHNlcGFyYXRpb24tOCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1tYXJnaW4tbGVmdC0xMiB7XHJcblx0XHRtYXJnaW4tbGVmdDogJHNlcGFyYXRpb24tMTIgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tbWFyZ2luLWxlZnQtMTYge1xyXG5cdFx0bWFyZ2luLWxlZnQ6ICRzZXBhcmF0aW9uLTE2ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLW1hcmdpbi1sZWZ0LTIwIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAkc2VwYXJhdGlvbi0yMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1tYXJnaW4tbGVmdC0yNCB7XHJcblx0XHRtYXJnaW4tbGVmdDogJHNlcGFyYXRpb24tMjQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tbWFyZ2luLWxlZnQtMjgge1xyXG5cdFx0bWFyZ2luLWxlZnQ6ICRzZXBhcmF0aW9uLTI4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1sZWZ0LTMyIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAkc2VwYXJhdGlvbi0zMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tbGVmdC0zNiB7XHJcblx0XHRtYXJnaW4tbGVmdDogJHNlcGFyYXRpb24tMzYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tbWFyZ2luLWxlZnQtNDAge1xyXG5cdFx0bWFyZ2luLWxlZnQ6ICRzZXBhcmF0aW9uLTQwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1sZWZ0LTQ0IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAkc2VwYXJhdGlvbi00NCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tbGVmdC00OCB7XHJcblx0XHRtYXJnaW4tbGVmdDogJHNlcGFyYXRpb24tNDggIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tbWFyZ2luLWxlZnQtNjAge1xyXG5cdFx0bWFyZ2luLWxlZnQ6ICRzZXBhcmF0aW9uLTYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLW1hcmdpbi1sZWZ0LTgwIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAkc2VwYXJhdGlvbi04MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1tYXJnaW4tbGVmdC0xMDAge1xyXG5cdFx0bWFyZ2luLWxlZnQ6ICRzZXBhcmF0aW9uLTEwMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcbiAgLy9QYWRkaW5nc1xyXG4gICYtLXBhZGRpbmctMCB7XHJcblx0XHRwYWRkaW5nOiAkc2VwYXJhdGlvbi0wICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cdCYtLXBhZGRpbmctdG9wLTAge1xyXG5cdFx0cGFkZGluZy10b3A6ICRzZXBhcmF0aW9uLTAgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tcGFkZGluZy10b3AtNCB7XHJcblx0XHRwYWRkaW5nLXRvcDogJHNlcGFyYXRpb24tNCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1wYWRkaW5nLXRvcC04IHtcclxuXHRcdHBhZGRpbmctdG9wOiAkc2VwYXJhdGlvbi04ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLXBhZGRpbmctdG9wLTEyIHtcclxuXHRcdHBhZGRpbmctdG9wOiAkc2VwYXJhdGlvbi0xMiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1wYWRkaW5nLXRvcC0xNiB7XHJcblx0XHRwYWRkaW5nLXRvcDogJHNlcGFyYXRpb24tMTYgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tcGFkZGluZy10b3AtMjAge1xyXG5cdFx0cGFkZGluZy10b3A6ICRzZXBhcmF0aW9uLTIwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLXBhZGRpbmctdG9wLTI0IHtcclxuXHRcdHBhZGRpbmctdG9wOiAkc2VwYXJhdGlvbi0yNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLXRvcC0yOCB7XHJcblx0XHRwYWRkaW5nLXRvcDogJHNlcGFyYXRpb24tMjggIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tcGFkZGluZy10b3AtMzIge1xyXG5cdFx0cGFkZGluZy10b3A6ICRzZXBhcmF0aW9uLTMyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXBhZGRpbmctdG9wLTM2IHtcclxuXHRcdHBhZGRpbmctdG9wOiAkc2VwYXJhdGlvbi0zNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLXRvcC00MCB7XHJcblx0XHRwYWRkaW5nLXRvcDogJHNlcGFyYXRpb24tNDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tcGFkZGluZy10b3AtNDQge1xyXG5cdFx0cGFkZGluZy10b3A6ICRzZXBhcmF0aW9uLTQ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXBhZGRpbmctdG9wLTQ4IHtcclxuXHRcdHBhZGRpbmctdG9wOiAkc2VwYXJhdGlvbi00OCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLXRvcC02MCB7XHJcblx0XHRwYWRkaW5nLXRvcDogJHNlcGFyYXRpb24tNjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tcGFkZGluZy10b3AtODAge1xyXG5cdFx0cGFkZGluZy10b3A6ICRzZXBhcmF0aW9uLTgwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXBhZGRpbmctdG9wLTEwMCB7XHJcblx0XHRwYWRkaW5nLXRvcDogJHNlcGFyYXRpb24tMTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cdCYtLXBhZGRpbmctcmlnaHQtMCB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAkc2VwYXJhdGlvbi0wICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLXBhZGRpbmctcmlnaHQtNCB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAkc2VwYXJhdGlvbi00ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLXBhZGRpbmctcmlnaHQtOCB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAkc2VwYXJhdGlvbi04ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLXBhZGRpbmctcmlnaHQtMTIge1xyXG5cdFx0cGFkZGluZy1yaWdodDogJHNlcGFyYXRpb24tMTIgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tcGFkZGluZy1yaWdodC0xNiB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAkc2VwYXJhdGlvbi0xNiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1wYWRkaW5nLXJpZ2h0LTIwIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6ICRzZXBhcmF0aW9uLTIwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLXBhZGRpbmctcmlnaHQtMjQge1xyXG5cdFx0cGFkZGluZy1yaWdodDogJHNlcGFyYXRpb24tMjQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tcGFkZGluZy1yaWdodC0yOCB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAkc2VwYXJhdGlvbi0yOCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLXJpZ2h0LTMyIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6ICRzZXBhcmF0aW9uLTMyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXBhZGRpbmctcmlnaHQtMzYge1xyXG5cdFx0cGFkZGluZy1yaWdodDogJHNlcGFyYXRpb24tMzYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tcGFkZGluZy1yaWdodC00MCB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAkc2VwYXJhdGlvbi00MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLXJpZ2h0LTQ0IHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6ICRzZXBhcmF0aW9uLTQ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXBhZGRpbmctcmlnaHQtNDgge1xyXG5cdFx0cGFkZGluZy1yaWdodDogJHNlcGFyYXRpb24tNDggIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tcGFkZGluZy1yaWdodC02MCB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAkc2VwYXJhdGlvbi02MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLXJpZ2h0LTgwIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6ICRzZXBhcmF0aW9uLTgwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXBhZGRpbmctcmlnaHQtMTAwIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6ICRzZXBhcmF0aW9uLTEwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHQmLS1wYWRkaW5nLWJvdHRvbS0wIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAkc2VwYXJhdGlvbi0wICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLXBhZGRpbmctYm90dG9tLTQge1xyXG5cdFx0cGFkZGluZy1ib3R0b206ICRzZXBhcmF0aW9uLTQgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tcGFkZGluZy1ib3R0b20tOCB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogJHNlcGFyYXRpb24tOCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1wYWRkaW5nLWJvdHRvbS0xMiB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogJHNlcGFyYXRpb24tMTIgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tcGFkZGluZy1ib3R0b20tMTYge1xyXG5cdFx0cGFkZGluZy1ib3R0b206ICRzZXBhcmF0aW9uLTE2ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLXBhZGRpbmctYm90dG9tLTIwIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAkc2VwYXJhdGlvbi0yMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1wYWRkaW5nLWJvdHRvbS0yNCB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogJHNlcGFyYXRpb24tMjQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tcGFkZGluZy1ib3R0b20tMjgge1xyXG5cdFx0cGFkZGluZy1ib3R0b206ICRzZXBhcmF0aW9uLTI4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXBhZGRpbmctYm90dG9tLTMyIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAkc2VwYXJhdGlvbi0zMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWJvdHRvbS0zNiB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogJHNlcGFyYXRpb24tMzYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tcGFkZGluZy1ib3R0b20tNDAge1xyXG5cdFx0cGFkZGluZy1ib3R0b206ICRzZXBhcmF0aW9uLTQwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXBhZGRpbmctYm90dG9tLTQ0IHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAkc2VwYXJhdGlvbi00NCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWJvdHRvbS00OCB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogJHNlcGFyYXRpb24tNDggIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0tcGFkZGluZy1ib3R0b20tNjAge1xyXG5cdFx0cGFkZGluZy1ib3R0b206ICRzZXBhcmF0aW9uLTYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYtLXBhZGRpbmctYm90dG9tLTgwIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAkc2VwYXJhdGlvbi04MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWJvdHRvbS0xMDAge1xyXG5cdFx0cGFkZGluZy1ib3R0b206ICRzZXBhcmF0aW9uLTEwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHQmLS1wYWRkaW5nLWxlZnQtMCB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6ICRzZXBhcmF0aW9uLTAgIWltcG9ydGFudDtcclxuXHR9XHJcblx0Ji0tcGFkZGluZy1sZWZ0LTQge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi00ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCYtLXBhZGRpbmctbGVmdC04IHtcclxuXHRcdHBhZGRpbmctbGVmdDogJHNlcGFyYXRpb24tOCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1wYWRkaW5nLWxlZnQtMTIge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi0xMiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1wYWRkaW5nLWxlZnQtMTYge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi0xNiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1wYWRkaW5nLWxlZnQtMjAge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi0yMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmLS1wYWRkaW5nLWxlZnQtMjQge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi0yNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWxlZnQtMjgge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi0yOCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWxlZnQtMzIge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi0zMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWxlZnQtMzYge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi0zNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWxlZnQtNDAge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi00MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWxlZnQtNDQge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi00NCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWxlZnQtNDgge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi00OCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWxlZnQtNjAge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi02MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWxlZnQtODAge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAkc2VwYXJhdGlvbi04MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLS1wYWRkaW5nLWxlZnQtMTAwIHtcclxuXHRcdHBhZGRpbmctbGVmdDogJHNlcGFyYXRpb24tMTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvL0FuY2hvcyBkZSBjb2x1bW5hcyBlbiB0YWJsYXNcclxuICAmLS13LTQ4IHtcclxuICAgIHdpZHRoOiAkdGFibGVPcHRpb25zQ29sdW1uV2lkdGg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3Itd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRjb2xvci1ncmV5LTcwMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4iLCIvL0NvbG9yZXMgZXNjYWxhIGRlIGdyaXNlc1xyXG4kY29sb3ItYmxhY2s6ICAgICMwMDA7XHJcbiRjb2xvci1ncmV5LTkwMDogIzFBMUExQTtcclxuJGNvbG9yLWdyZXktODAwOiAjMzMzO1xyXG4kY29sb3ItZ3JleS03MDA6ICM2NjY7XHJcbiRjb2xvci1ncmV5LTYwMDogIzk5OTtcclxuJGNvbG9yLWdyZXktNTAwOiAjQkRCREJEO1xyXG4kY29sb3ItZ3JleS00MDA6ICNDQ0M7XHJcbiRjb2xvci1ncmV5LTMwMDogI0UyRTJFMjtcclxuJGNvbG9yLWdyZXktMjAwOiAjRUVFO1xyXG4kY29sb3ItZ3JleS0xMDA6ICNGOUY5Rjk7XHJcbiRjb2xvci13aGl0ZTogICAgI0ZGRjtcclxuXHJcbi8vQ29sb3JlcyB0YWJsYXNcclxuJGNvbG9yLXRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kOiNGNUY2RkE7XHJcbiRjb2xvci10YWJsZS1oZWFkZXItdGV4dDogICAgICAjQTNBNkI0O1xyXG4kY29sb3ItYmctdGFibGU6ICAjRjNGQkZGO1xyXG5cclxuLy9Db2xvcmVzIGNvcnBvcmF0aXZvc1xyXG4kY29sb3ItY29udGVudGNsb3VkOiNENjUyOTI7XHJcbiRjb2xvci10YWxlbnRjbG91ZDogI0Y5QkYzNDtcclxuXHJcbi8vQ29sb3JlcyByYW5kb21cclxuJGNvbG9yLXJhbmRvbTE6ICAgICAjNDE1NDVEO1xyXG4kY29sb3ItcmFuZG9tMjogICAgICMyNzlFRDY7XHJcbiRjb2xvci1yYW5kb20zOiAgICAgIzlCMjc2MTtcclxuJGNvbG9yLXJhbmRvbTQ6ICAgICAjRTUzQjc4O1xyXG4kY29sb3ItcmFuZG9tNTogICAgICNFNzU3NUI7XHJcbiRjb2xvci1yYW5kb202OiAgICAgIzVjY2U4ODtcclxuJGNvbG9yLXJhbmRvbTc6ICAgICAjMTk5QUE4O1xyXG4kY29sb3ItcmFuZG9tODogICAgICNFRTlBMzc7XHJcbiRjb2xvci1yYW5kb205OiAgICAgI0IxODJBNjtcclxuJGNvbG9yLXJhbmRvbTEwOiAgICAjQUFEMzU1O1xyXG4kY29sb3ItcmFuZG9tMTE6ICAgICMxRDVEOTM7XHJcbiRjb2xvci1yYW5kb20xMjogICAgI0ZGQzQwMDtcclxuXHJcbi8vQ29sb3JlcyBhY2Npw7NuXHJcbiRjb2xvci1wcmltYXJ5OiAgICAgICAjMUFBOUUyO1xyXG4kY29sb3ItcHJpbWFyeS1ob3ZlcjogIzBGOEZENjtcclxuJGNvbG9yLWFjY2VudDogICAgICAgICM5OTk7XHJcbiRjb2xvci1hY2NlbnQtaG92ZXI6ICAjNjY2O1xyXG4kY29sb3ItdmlvbGV0OiAgICAgICAgcmdiKDY1LCA0MCwgMTQ0KTtcclxuJGNvbG9yLXZpb2xldC1ob3ZlcjogICMyOTE5NUQ7XHJcbiRjb2xvci1ncmVlbjogICAgICAgICM0NEFCMDA7XHJcbiRjb2xvci1ncmVlbi1ob3ZlcjogICMzYjgwMGU7XHJcblxyXG4vL0NvbG9yZXMgZXN0YWRvc1xyXG4kY29sb3Itc3VjY2VzczogIzVjY2U4ODtcclxuJGNvbG9yLXdhcm5pbmc6ICNFRTlBMzc7XHJcbiRjb2xvci1lcnJvcjogICAjZjA1MDYwO1xyXG4kY29sb3Itb3JhbmdlOiAgI2RjODUyMjtcclxuXHJcbi8vQ29sb3JlcyBsYWJlbHMvcmFkaW9idXR0b25zXHJcbiRjb2xvci1sYWJlbC1ibHVlOiAgcmdiKDI2LCAxNjksIDIyNik7XHJcbiRjb2xvci1sYWJlbC1ibGFjazogICMwMDAwMDA7XHJcbiRjb2xvci1sYWJlbC1ncmV5OiAgIzk5OTk5OTtcclxuJGNvbG9yLWxhYmVsLWxpZ2h0Ymx1ZTogIzdiZDlmZjtcclxuJGNvbG9yLWxhYmVsLW9yYW5nZTogIHJnYigyMjAsIDEzMywgMzQpO1xyXG4kY29sb3ItbGFiZWwtcmVkOiByZ2IoMjQwLCA4MCwgOTYpO1xyXG5cclxuXHJcbiIsIiRsYXlvdXQtYnJlYWtwb2ludC1tZDogICAgIDE0ODBweCAhZGVmYXVsdDtcclxuXHJcbi8vVmFyaWFibGVzIHBhcmEgdGFtYcOxb3MgZGUgaWNvbm9zXHJcbiRmb250LXNpemUtaWNvbi1zbWFsbDogICAgICAgIDEycHg7XHJcbiRmb250LXNpemUtaWNvbjogICAgICAgICAgICAgIDI0cHg7XHJcbiRmb250LXNpemUtaWNvbi1tZWRpdW06ICAgICAgIDM2cHg7XHJcbiRmb250LXNpemUtaWNvbi1iaWc6ICAgICAgICAgIDQ4cHg7XHJcbiRmb250LXNpemUtaWNvbi1sYXJnZTogICAgICAgIDYwcHg7XHJcbiRmb250LXNpemUtaWNvbi14eHhsYXJnZTogICAgIDE1NnB4O1xyXG5cclxuLy9WYXJpYWJsZXMgcGFyYSB0YW1hw7FvcyBkZSB0ZXh0b1xyXG4kZm9udC1zaXplLTEwOiAgICAgICAgMTBweDtcclxuJGZvbnQtc2l6ZS0xMjogICAgICAgIDEycHg7XHJcbiRmb250LXNpemUtMTQ6ICAgICAgICAxNHB4O1xyXG4kZm9udC1zaXplLTE2OiAgICAgICAgMTZweDtcclxuJGZvbnQtc2l6ZS0xODogICAgICAgIDE4cHg7XHJcbiRmb250LXNpemUtMjA6ICAgICAgICAyMHB4O1xyXG4kZm9udC1zaXplLTIyOiAgICAgICAgMjJweDtcclxuJGZvbnQtc2l6ZS0yNDogICAgICAgIDI0cHg7XHJcbiRmb250LXNpemUtMjY6ICAgICAgICAyNnB4O1xyXG4kZm9udC1zaXplLTI4OiAgICAgICAgMjhweDtcclxuJGZvbnQtc2l6ZS0zMjogICAgICAgIDMycHg7XHJcbiRmb250LXNpemUtMzY6ICAgICAgICAzNnB4O1xyXG4kZm9udC1zaXplLTQyOiAgICAgICAgNDJweDtcclxuJGZvbnQtc2l6ZS00ODogICAgICAgIDQ4cHg7XHJcbiRmb250LXNpemUtNTI6ICAgICAgICA1MnB4O1xyXG4kZm9udC1zaXplLTU2OiAgICAgICAgNTZweDtcclxuXHJcbi8vVmFyaWFibGVzIHBhcmEgbcOhcmdlbmVzIHkgcGFkZGluZ3NcclxuJHNlcGFyYXRpb24tMDogMDtcclxuJHNlcGFyYXRpb24tNDogNHB4O1xyXG4kc2VwYXJhdGlvbi04OiA4cHg7XHJcbiRzZXBhcmF0aW9uLTEyOiAxMnB4O1xyXG4kc2VwYXJhdGlvbi0xNjogMTZweDtcclxuJHNlcGFyYXRpb24tMjA6IDIwcHg7XHJcbiRzZXBhcmF0aW9uLTI0OiAyNHB4O1xyXG4kc2VwYXJhdGlvbi0yODogMjhweDtcclxuJHNlcGFyYXRpb24tMzI6IDMycHg7XHJcbiRzZXBhcmF0aW9uLTM2OiAzNnB4O1xyXG4kc2VwYXJhdGlvbi00MDogNDBweDtcclxuJHNlcGFyYXRpb24tNDQ6IDQ0cHg7XHJcbiRzZXBhcmF0aW9uLTQ4OiA0OHB4O1xyXG4kc2VwYXJhdGlvbi01MjogNTJweDtcclxuJHNlcGFyYXRpb24tNjA6IDYwcHg7XHJcbiRzZXBhcmF0aW9uLTgwOiA4MHB4O1xyXG4kc2VwYXJhdGlvbi0xMDA6IDEwMHB4O1xyXG5cclxuLy9Tb21icmFzXHJcbiRzaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4kc2hhZG93LWhvdmVyOiAwIDAgMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiRzaGFkb3ctbmF2YmFyOiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuLy9Ib3ZlclxyXG4kaWNvbi1idXR0b24taG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiRpY29uLWJ1dHRvbi10b29sYmFyLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xyXG5cclxuLy9Ub29sYmFyXHJcbiR0b29sYmFySGVpZ2h0OiA1NnB4O1xyXG4kaGVhZGVySGVpZ2h0OiAxMDRweDtcclxuXHJcbi8vVGFibGVcclxuJHRhYmxlRXZhbHVhdGlvbkhlYWRlckhlaWdodDogODRweDtcclxuJHRhYmxlRXZhbHVhdGlvblJvd0hlaWdodDogODBweDtcclxuJHRhYmxlSGVhZGVyT3B0aW9uc0hlaWdodDogNjJweDtcclxuJHRhYmxlSGVhZGVySGVpZ2h0OiA0OHB4O1xyXG4kdGFibGVSb3dIZWlnaHQ6IDUycHg7XHJcblxyXG4vL1RhYmxlIGNvbHVtbnMgd2lkdGhcclxuJHRhYmxlT3B0aW9uc0NvbHVtbldpZHRoOiA0OHB4O1xyXG4iLCJoMSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogbGF0b0xpZ2h0O1xuICBmb250LXNpemU6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICBtYXJnaW46IDA7XG59XG5cbmgyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBsYXRvTGlnaHQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuaDMge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IGxhdG87XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuaDQge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IGxhdG9Cb2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbmg1IHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBsYXRvQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC0tb3V0bGluZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjREREO1xufVxuXG4udXRpbHMtLXRpdGxlLWxhcmdlIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBsYXRvQm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luOiAwO1xufVxuLnV0aWxzLS10aXRsZS1tZWRpdW0ge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IGxhdG9Cb2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDA7XG59XG4udXRpbHMtLXRpdGxlLXNtYWxsIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBsYXRvQm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuLnV0aWxzLS1yb3ctdGl0bGUge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1mYW1pbHk6IGxhdG9TZW1pYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnV0aWxzLS1zZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBsYXRvQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnV0aWxzLS1zZWN0aW9uLXRpdGxlLWdyZXkge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1mYW1pbHk6IGxhdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi51dGlscy0tcGFuZWwtc2VjdGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogTGF0b1NlbWlib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udXRpbHMtLWJhc2ljLXRleHQge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1mYW1pbHk6IGxhdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbjogMDtcbn1cbi51dGlscy0tdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi51dGlscy0tdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi51dGlscy0tdHJ1bmNhdGUxIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cbi51dGlscy0tdHJ1bmNhdGUyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cbi51dGlscy0tdHJ1bmNhdGUzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cbi51dGlscy0tdmVydGljYWwtYWxpZ24ge1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTUwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xufVxuLnV0aWxzLS1ob3Jpem9udGFsLWFsaWduIHtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IC01MCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG59XG4udXRpbHMtLWFsaWduLWNlbnRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnV0aWxzLS1jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udXRpbHMtLWxpbmVjbGFtcC0xIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1heC1saW5lczogMTtcbn1cbi51dGlscy0tbGluZWNsYW1wLTIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbn1cbi51dGlscy0taW1nLWNvdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4udXRpbHMtLWZsZXgtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLWZsZXgtYmV0d2VlbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnV0aWxzLS1mbGV4LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi51dGlscy0tdGV4dC0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS10ZXh0LTEyIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtMTQge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS10ZXh0LTE4IHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtMjAge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC0yMiB7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS10ZXh0LTI0IHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtMjYge1xuICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC0yOCB7XG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS10ZXh0LTMyIHtcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtMzYge1xuICBmb250LXNpemU6IDM2cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC00MiB7XG4gIGZvbnQtc2l6ZTogNDJweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS10ZXh0LTQ4IHtcbiAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtNTIge1xuICBmb250LXNpemU6IDUycHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC01NiB7XG4gIGZvbnQtc2l6ZTogNTZweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS10ZXh0LWJsYWNrIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC1ncmV5LTkwMCB7XG4gIGNvbG9yOiAjMUExQTFBICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtZ3JleS04MDAge1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS10ZXh0LWdyZXktNzAwIHtcbiAgY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC1ncmV5LTYwMCB7XG4gIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtZ3JleS01MDAge1xuICBjb2xvcjogI0JEQkRCRCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS10ZXh0LWdyZXktNDAwIHtcbiAgY29sb3I6ICNDQ0MgIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC1ncmV5LTMwMCB7XG4gIGNvbG9yOiAjRTJFMkUyICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtZ3JleS0yMDAge1xuICBjb2xvcjogI0VFRSAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS10ZXh0LWdyZXktMTAwIHtcbiAgY29sb3I6ICNGOUY5RjkgIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtb3JhbmdlIHtcbiAgY29sb3I6ICNkYzg1MjIgIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC13YXJuaW5nIHtcbiAgY29sb3I6ICNFRTlBMzcgIWltcG9ydGFudDtcbn1cbi51dGlscy0tdGV4dC1lcnJvciB7XG4gIGNvbG9yOiAjZjA1MDYwICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMUFBOUUyICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLWJjLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1ncmV5LTkwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUEgIWltcG9ydGFudDtcbn1cbi51dGlscy0tYmMtZ3JleS04MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLWJjLWdyZXktNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NiAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1ncmV5LTYwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTkgIWltcG9ydGFudDtcbn1cbi51dGlscy0tYmMtZ3JleS01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRCREJEICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLWJjLWdyZXktNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQyAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1ncmV5LTMwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTIgIWltcG9ydGFudDtcbn1cbi51dGlscy0tYmMtZ3JleS0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLWJjLWdyZXktMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOSAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbn1cbi51dGlscy0tYmMtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENjUyOTIgIWltcG9ydGFudDtcbn1cbi51dGlscy0tYmMtdGFsZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QkYzNCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb20xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNTQ1RCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb20yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3OUVENiAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb20zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlCMjc2MSAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb200IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1M0I3OCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb201IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3NTc1QiAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb202IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjY2U4OCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb203IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5OUFBOCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb204IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFOUEzNyAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb205IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IxODJBNiAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1yYW5kb20xMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQUQzNTUgIWltcG9ydGFudDtcbn1cbi51dGlscy0tYmMtcmFuZG9tMTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQ1RDkzICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLWJjLXJhbmRvbTEyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzQwMCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBQTlFMiAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1wcmltYXJ5LWhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGOEZENiAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1iYy1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLWJjLWFjY2VudC1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbn1cbi51dGlscy0tYmMtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2NlODggIWltcG9ydGFudDtcbn1cbi51dGlscy0tYmMtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRTlBMzcgIWltcG9ydGFudDtcbn1cbi51dGlscy0tYmMtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1MDYwICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLWJjLW9yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzg1MjIgIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLTAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLXRvcC0wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tdG9wLTQge1xuICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLXRvcC04IHtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtMTIge1xuICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtMjQge1xuICBtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtMjgge1xuICBtYXJnaW4tdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtMzIge1xuICBtYXJnaW4tdG9wOiAzMnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtMzYge1xuICBtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtNDAge1xuICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtNDQge1xuICBtYXJnaW4tdG9wOiA0NHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtNDgge1xuICBtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtNTIge1xuICBtYXJnaW4tdG9wOiA1MnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtNjAge1xuICBtYXJnaW4tdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtODAge1xuICBtYXJnaW4tdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi10b3AtMTAwIHtcbiAgbWFyZ2luLXRvcDogMTAwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLXJpZ2h0LWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLXJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLXJpZ2h0LTQge1xuICBtYXJnaW4tcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tcmlnaHQtOCB7XG4gIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1yaWdodC0xMiB7XG4gIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tcmlnaHQtMTYge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLXJpZ2h0LTIwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1yaWdodC0yNCB7XG4gIG1hcmdpbi1yaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tcmlnaHQtMjgge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLXJpZ2h0LTMyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1yaWdodC0zNiB7XG4gIG1hcmdpbi1yaWdodDogMzZweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tcmlnaHQtNDAge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLXJpZ2h0LTQ0IHtcbiAgbWFyZ2luLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1yaWdodC00OCB7XG4gIG1hcmdpbi1yaWdodDogNDhweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tcmlnaHQtNjAge1xuICBtYXJnaW4tcmlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLXJpZ2h0LTgwIHtcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1yaWdodC0xMDAge1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1ib3R0b20tMCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLWJvdHRvbS00IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTEyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTE2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTI0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTI4IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTMyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTM2IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTQwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTQ0IHtcbiAgbWFyZ2luLWJvdHRvbTogNDRweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTQ4IHtcbiAgbWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTUyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTJweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTYwIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTgwIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tYm90dG9tLTEwMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1sZWZ0LTAge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tbGVmdC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLWxlZnQtNCB7XG4gIG1hcmdpbi1sZWZ0OiA0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLWxlZnQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLWxlZnQtMTIge1xuICBtYXJnaW4tbGVmdDogMTJweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tbGVmdC0xNiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1sZWZ0LTIwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLWxlZnQtMjQge1xuICBtYXJnaW4tbGVmdDogMjRweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tbGVmdC0yOCB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1sZWZ0LTMyIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLWxlZnQtMzYge1xuICBtYXJnaW4tbGVmdDogMzZweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tbGVmdC00MCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1sZWZ0LTQ0IHtcbiAgbWFyZ2luLWxlZnQ6IDQ0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLWxlZnQtNDgge1xuICBtYXJnaW4tbGVmdDogNDhweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1tYXJnaW4tbGVmdC02MCB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLW1hcmdpbi1sZWZ0LTgwIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tbWFyZ2luLWxlZnQtMTAwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctMCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy10b3AtMCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctdG9wLTQge1xuICBwYWRkaW5nLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctdG9wLTEyIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLXRvcC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctdG9wLTI0IHtcbiAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy10b3AtMjgge1xuICBwYWRkaW5nLXRvcDogMjhweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLXRvcC0zMiB7XG4gIHBhZGRpbmctdG9wOiAzMnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctdG9wLTM2IHtcbiAgcGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy10b3AtNDAge1xuICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLXRvcC00NCB7XG4gIHBhZGRpbmctdG9wOiA0NHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctdG9wLTQ4IHtcbiAgcGFkZGluZy10b3A6IDQ4cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy10b3AtNjAge1xuICBwYWRkaW5nLXRvcDogNjBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLXRvcC04MCB7XG4gIHBhZGRpbmctdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctdG9wLTEwMCB7XG4gIHBhZGRpbmctdG9wOiAxMDBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLXJpZ2h0LTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctcmlnaHQtNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLXJpZ2h0LTgge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC0xMiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC0xNiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC0yNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC0yOCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI4cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC0zMiB7XG4gIHBhZGRpbmctcmlnaHQ6IDMycHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC0zNiB7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC00MCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC00NCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC00OCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC02MCB7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC04MCB7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1yaWdodC0xMDAge1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWJvdHRvbS0wIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1ib3R0b20tNCB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1ib3R0b20tOCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1ib3R0b20tMTIge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWJvdHRvbS0xNiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctYm90dG9tLTIwIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1ib3R0b20tMjQge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWJvdHRvbS0yOCB7XG4gIHBhZGRpbmctYm90dG9tOiAyOHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctYm90dG9tLTMyIHtcbiAgcGFkZGluZy1ib3R0b206IDMycHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1ib3R0b20tMzYge1xuICBwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWJvdHRvbS00MCB7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctYm90dG9tLTQ0IHtcbiAgcGFkZGluZy1ib3R0b206IDQ0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1ib3R0b20tNDgge1xuICBwYWRkaW5nLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWJvdHRvbS02MCB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctYm90dG9tLTgwIHtcbiAgcGFkZGluZy1ib3R0b206IDgwcHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1ib3R0b20tMTAwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctbGVmdC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctbGVmdC00IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1sZWZ0LTgge1xuICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWxlZnQtMTIge1xuICBwYWRkaW5nLWxlZnQ6IDEycHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1sZWZ0LTE2IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctbGVmdC0yMCB7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWxlZnQtMjQge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1sZWZ0LTI4IHtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctbGVmdC0zMiB7XG4gIHBhZGRpbmctbGVmdDogMzJweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWxlZnQtMzYge1xuICBwYWRkaW5nLWxlZnQ6IDM2cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1sZWZ0LTQwIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctbGVmdC00NCB7XG4gIHBhZGRpbmctbGVmdDogNDRweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWxlZnQtNDgge1xuICBwYWRkaW5nLWxlZnQ6IDQ4cHggIWltcG9ydGFudDtcbn1cbi51dGlscy0tcGFkZGluZy1sZWZ0LTYwIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG4udXRpbHMtLXBhZGRpbmctbGVmdC04MCB7XG4gIHBhZGRpbmctbGVmdDogODBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS1wYWRkaW5nLWxlZnQtMTAwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuLnV0aWxzLS13LTQ4IHtcbiAgd2lkdGg6IDQ4cHg7XG59XG5cbi5sb2FkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzY2NjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLndoYXRzbmV3IC5jYXJkLXNpbXBsZSB7XG4gIHBhZGRpbmc6IDA7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19faGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4M0M4MjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM1NnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC04cHg7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19faGVhZGVyIC53aGF0c25ld19faGVhZGVyLS10ZXh0cyB7XG4gIG1heC13aWR0aDogNjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19faGVhZGVyIC53aGF0c25ld19faGVhZGVyLS10ZXh0cyAud2hhdHNuZXdfX2hlYWRlci0tdGl0bGUge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IGxhdG9Cb2xkO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBtYXJnaW46IDAgMCAxMnB4IDA7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19faGVhZGVyIC53aGF0c25ld19faGVhZGVyLS10ZXh0cyAud2hhdHNuZXdfX2hlYWRlci0tc3VidGl0bGUge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IGxhdG9Cb2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi53aGF0c25ldyAuY2FyZC1zaW1wbGUgLm1hdC1jYXJkLWNvbnRlbnQgLndoYXRzbmV3X19oZWFkZXIgLndoYXRzbmV3X19oZWFkZXItLWltYWdlIHtcbiAgYm90dG9tOiAwO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuLndoYXRzbmV3IC5jYXJkLXNpbXBsZSAubWF0LWNhcmQtY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19fY29udGVudCAud2hhdHNuZXdfX2Fubm91bmNlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIHBhZGRpbmc6IDI2cHggMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDU2cHggYXV0byAwO1xufVxuLndoYXRzbmV3IC5jYXJkLXNpbXBsZSAubWF0LWNhcmQtY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQgLndoYXRzbmV3X19hbm5vdW5jZW1lbnQgLndoYXRzbmV3X19hbm5vdW5jZW1lbnQtLXRleHQge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xufVxuLndoYXRzbmV3IC5jYXJkLXNpbXBsZSAubWF0LWNhcmQtY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQgLndoYXRzbmV3X19zZXBhcmF0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luOiAzNnB4IGF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLndoYXRzbmV3IC5jYXJkLXNpbXBsZSAubWF0LWNhcmQtY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQgLndoYXRzbmV3X19zZXBhcmF0aW9uIC53aGF0c25ld19fc2VwYXJhdGlvbi0tdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiAjMUFBOUUyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDAgMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19fY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQtYmxvY2sge1xuICBtYXJnaW46IDU2cHggMCAwIDA7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19fY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQtYmxvY2sgLndoYXRzbmV3X19jb250ZW50LWJsb2NrLS10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19fY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQtYmxvY2sgLndoYXRzbmV3X19jb250ZW50LWJsb2NrLS10ZXh0IC5kb2N1bWVudGF0aW9uLWNvZGUge1xuICBjb2xvcjogI0U1M0I3ODtcbiAgZm9udC1zaXplOiA4NyU7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi53aGF0c25ldyAuY2FyZC1zaW1wbGUgLm1hdC1jYXJkLWNvbnRlbnQgLndoYXRzbmV3X19jb250ZW50IC53aGF0c25ld19fY29udGVudC1ibG9jayAud2hhdHNuZXdfX2NvbnRlbnQtYmxvY2stLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0Q1RENFMSwgMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19fY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQtYmxvY2sgLndoYXRzbmV3X19jb250ZW50LWJsb2NrLS1wb2ludHMge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19fY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQtYmxvY2sgLndoYXRzbmV3X19jb250ZW50LWJsb2NrLS1wb2ludHMgbGkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19fY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQtYmxvY2sgLndoYXRzbmV3X19jb250ZW50LWJsb2NrLS1jYXJkLnczMyB7XG4gIHdpZHRoOiAzMyU7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19fY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQtYmxvY2sgLndoYXRzbmV3X19jb250ZW50LWJsb2NrLS1jYXJkLnc1MCB7XG4gIHdpZHRoOiA1MCU7XG59XG4ud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19fY29udGVudCAud2hhdHNuZXdfX2NvbnRlbnQtYmxvY2sgLndoYXRzbmV3X19jb250ZW50LWJsb2NrLS1jYXJkIG50eC1jYXJkNyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4uaWNvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmljb25zLWNvbnRhaW5lciAuaWNvbi1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDAgY2FsYygxMiUgLSAxNnB4KTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA0MHB4IDE2cHg7XG4gIG1heC13aWR0aDogY2FsYygxMiUgLSAxNnB4KTtcbiAgbWluLXdpZHRoOiBjYWxjKDEyJSAtIDE2cHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaWNvbnMtY29udGFpbmVyIC5pY29uLWNvbnRhaW5lciAubWF0LWljb24ge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaWNvbnMtY29udGFpbmVyIC5pY29uLWNvbnRhaW5lciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWJhc2ljLXRhYmxlIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LWJhc2ljLXRhYmxlIC5tYXQtYmFzaWMtdGFibGVfX2hlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY2RkE7XG4gIGNvbG9yOiAjQTNBNkI0O1xuICBmb250LWZhbWlseTogTGF0b1NlbWlib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tYXQtYmFzaWMtdGFibGUgLm1hdC1iYXNpYy10YWJsZV9faGVhZGVyIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY29sb3I6ICNBM0E2QjQ7XG59XG4ubWF0LWJhc2ljLXRhYmxlIC5tYXQtYmFzaWMtdGFibGVfX2hlYWRlciB0aDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCAwO1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG4ubWF0LWJhc2ljLXRhYmxlIC5tYXQtYmFzaWMtdGFibGVfX2hlYWRlciB0aDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiAwIDRweCAwIDA7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG59XG4ubWF0LWJhc2ljLXRhYmxlIC5tYXQtYmFzaWMtdGFibGVfX3JvdyB7XG4gIGhlaWdodDogNTJweDtcbn1cbi5tYXQtYmFzaWMtdGFibGUgLm1hdC1iYXNpYy10YWJsZV9fcm93Omxhc3Qtb2YtdHlwZSB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNHB4O1xufVxuLm1hdC1iYXNpYy10YWJsZSAubWF0LWJhc2ljLXRhYmxlX19yb3c6bGFzdC1vZi10eXBlIHRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggMDtcbn1cbi5tYXQtYmFzaWMtdGFibGUgLm1hdC1iYXNpYy10YWJsZV9fcm93IHRkLm1hdC1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0VFRTtcbiAgY29sb3I6ICM2NjY7XG59XG4ubWF0LWJhc2ljLXRhYmxlIC5tYXQtYmFzaWMtdGFibGVfX3JvdyB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuLm1hdC1iYXNpYy10YWJsZSAubWF0LWJhc2ljLXRhYmxlX19yb3cgdGQubWF0LWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbn1cblxuLnJhZGlvYnV0dG9uLWV4YW1wbGUtdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLnJhZGlvYnV0dG9uLWV4YW1wbGUtdGFibGUgdHI6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5yYWRpb2J1dHRvbi1leGFtcGxlLXRhYmxlIHRyOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ucmFkaW9idXR0b24tZXhhbXBsZS10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4ucmFkaW9idXR0b24tZXhhbXBsZS10YWJsZSB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE2OSwgMjI2LCAwLjA1KTtcbn1cbi5yYWRpb2J1dHRvbi1leGFtcGxlLXRhYmxlIHRkOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUVFO1xufVxuLnJhZGlvYnV0dG9uLWV4YW1wbGUtdGFibGUgdGQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4ucmFkaW9idXR0b24tZXhhbXBsZS10YWJsZSB0aCwgLnJhZGlvYnV0dG9uLWV4YW1wbGUtdGFibGUgdGQge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLndoYXRzbmV3IC5jYXJkLXNpbXBsZSAubWF0LWNhcmQtY29udGVudCAud2hhdHNuZXdfX2hlYWRlciB7XG4gICAgaGVpZ2h0OiAyNTZweDtcbiAgfVxuICAud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19faGVhZGVyIC53aGF0c25ld19faGVhZGVyLS10ZXh0cyAud2hhdHNuZXdfX2hlYWRlci0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgfVxuICAud2hhdHNuZXcgLmNhcmQtc2ltcGxlIC5tYXQtY2FyZC1jb250ZW50IC53aGF0c25ld19faGVhZGVyIC53aGF0c25ld19faGVhZGVyLS1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgfVxufSIsIkBtaXhpbiBjYWxjKCRwcm9wLCAkdmFsKSB7XHJcbiAgI3skcHJvcH06IGNhbGMoI3skdmFsfSk7XHJcbiAgI3skcHJvcH06IC1tb3otY2FsYygjeyR2YWx9KTtcclxuICAjeyRwcm9wfTogLXdlYmtpdC1jYWxjKCN7JHZhbH0pO1xyXG4gICN7JHByb3B9OiAtby1jYWxjKCN7JHZhbH0pO1xyXG59XHJcblxyXG5AbWl4aW4gY2FsY19pbXBvcnRhbnQoJHByb3AsICR2YWwpIHtcclxuICAjeyRwcm9wfTogY2FsY19pbXBvcnRhbnQoI3skdmFsfSAhaW1wb3J0YW50KTtcclxuICAjeyRwcm9wfTogLW1vei1jYWxjX2ltcG9ydGFudCgjeyR2YWx9ICFpbXBvcnRhbnQpO1xyXG4gICN7JHByb3B9OiAtd2Via2l0LWNhbGNfaW1wb3J0YW50KCN7JHZhbH0gIWltcG9ydGFudCk7XHJcbiAgI3skcHJvcH06IC1vLWNhbGNfaW1wb3J0YW50KCN7JHZhbH0gIWltcG9ydGFudCk7XHJcbn1cclxuXHJcbkBtaXhpbiBlbGxpcHNpcygkbWF4LWxpbmVzOiAxKSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG1heC1saW5lczogJG1heC1saW5lcztcclxufVxyXG5cclxuQG1peGluIGVsbGlwc2lzLW11bHRpbGluZSgkbGluZXMpIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cclxufVxyXG5cclxuQG1peGluIGNhcmQtd2hpdGUoJGhlaWdodCwgJGJyOiA0cHgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAkYnI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLDAsMCwuMTYpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogJGhlaWdodDtcclxufVxyXG5cclxuQG1peGluIGNlbnRlcmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5AbWl4aW4gYmFkZ2UoJGNvbG9yLCAkc2l6ZSkge1xyXG4gIC8vIG1peGluIHRvIHJlbmRlciBjaXJjdWxhciBiYWRnZVxyXG4gIHdpZHRoOiAjeyRzaXplfTtcclxuICBoZWlnaHQ6ICN7JHNpemV9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICN7JGNvbG9yfTtcclxuICBib3JkZXItcmFkaXVzOiAjeyRzaXplKjAuNX07XHJcbiAgbGluZS1oZWlnaHQ6ICN7JHNpemV9O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGltZy1jb3ZlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59IiwiQGltcG9ydCBcIi4vLi9wcm9qZWN0cy9uZXRleC91eC1jb21wb25lbnRzL3NyYy9zdHlsZXMvYXBwL3V0aWxzXCI7XHJcblxyXG4kYmxvY2s6IFwid2hhdHNuZXdcIjtcclxuLiN7JGJsb2NrfXtcclxuICAuY2FyZC1zaW1wbGV7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICAgIC4jeyRibG9ja31fX2hlYWRlcntcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODNDODI7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDM1NnB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgLiN7JGJsb2NrfV9faGVhZGVyLS10ZXh0c3tcclxuICAgICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLiN7JGJsb2NrfV9faGVhZGVyLS10aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGxhdG9Cb2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtMzY7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMnB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuI3skYmxvY2t9X19oZWFkZXItLXN1YnRpdGxle1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbGF0b0JvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xNDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuI3skYmxvY2t9X19oZWFkZXItLWltYWdle1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuI3skYmxvY2t9X19jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgICAgICAgLiN7JGJsb2NrfV9fYW5ub3VuY2VtZW50e1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktMjAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjZweCAxOHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiA1NnB4IGF1dG8gMDtcclxuICAgICAgICAgIC4jeyRibG9ja31fX2Fubm91bmNlbWVudC0tdGV4dHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5LTcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLTE4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuI3skYmxvY2t9X19zZXBhcmF0aW9ue1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1ncmV5LTQwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0yODtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDM2cHggYXV0byAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIC4jeyRibG9ja31fX3NlcGFyYXRpb24tLXRleHR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtMTg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC4jeyRibG9ja31fX2NvbnRlbnQtYmxvY2t7XHJcbiAgICAgICAgICBtYXJnaW46IDU2cHggMCAwIDA7XHJcbiAgICAgICAgICAuI3skYmxvY2t9X19jb250ZW50LWJsb2NrLS10ZXh0e1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgLmRvY3VtZW50YXRpb24tY29kZXtcclxuICAgICAgICAgICAgICBjb2xvcjogI0U1M0I3ODtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDg3JTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC4jeyRibG9ja31fX2NvbnRlbnQtYmxvY2stLWltYWdle1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjRDVEQ0UxLCAwIDEwcHggMzBweCByZ2JhKDAsMCwwLC4wOCk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLiN7JGJsb2NrfV9fY29udGVudC1ibG9jay0tcG9pbnRze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC4jeyRibG9ja31fX2NvbnRlbnQtYmxvY2stLWNhcmR7XHJcbiAgICAgICAgICAgICYudzMze1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi53NTB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBudHgtY2FyZDcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbnMtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5pY29uLWNvbnRhaW5lcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDEgMCBjYWxjKDEyJSAtIDE2cHgpO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogNDBweCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEyJSAtIDE2cHgpO1xyXG4gICAgbWluLXdpZHRoOiBjYWxjKDEyJSAtIDE2cHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1hdC1iYXNpYy10YWJsZXtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogJHNoYWRvdztcclxuICB3aWR0aDogMTAwJTtcclxuICAubWF0LWJhc2ljLXRhYmxlX19oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGFibGUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICBjb2xvcjogJGNvbG9yLXRhYmxlLWhlYWRlci10ZXh0O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG9TZW1pYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xMjtcclxuICAgIGhlaWdodDogJHRhYmxlSGVhZGVySGVpZ2h0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRoe1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLXRhYmxlLWhlYWRlci10ZXh0O1xyXG4gICAgICAmOmZpcnN0LW9mLXR5cGV7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3Qtb2YtdHlwZXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDRweCAwIDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubWF0LWJhc2ljLXRhYmxlX19yb3d7XHJcbiAgICBoZWlnaHQ6ICR0YWJsZVJvd0hlaWdodDtcclxuICAgICY6bGFzdC1vZi10eXBle1xyXG4gICAgICB0ZHtcclxuICAgICAgICAmLm1hdC1jZWxse1xyXG4gICAgICAgICAgJjpmaXJzdC1vZi10eXBle1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMCA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmxhc3Qtb2YtdHlwZXtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGR7XHJcbiAgICAgICYubWF0LWNlbGx7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLWdyZXktMjAwO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS03MDA7XHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBle1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3Qtb2YtdHlwZXtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmFkaW9idXR0b24tZXhhbXBsZS10YWJsZSB7XHJcbiAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDI0cHgpO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdHI6Zmlyc3Qtb2YtdHlwZXtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgdHI6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuICB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAxNjksIDIyNiwgMC4wNSk7XHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUVFO1xyXG4gICAgfVxyXG4gICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgdGgsdGQge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAuI3skYmxvY2t9e1xyXG4gICAgLmNhcmQtc2ltcGxle1xyXG4gICAgICAubWF0LWNhcmQtY29udGVudHtcclxuICAgICAgICAuI3skYmxvY2t9X19oZWFkZXJ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1NnB4O1xyXG4gICAgICAgICAgLiN7JGJsb2NrfV9faGVhZGVyLS10ZXh0c3tcclxuICAgICAgICAgICAgLiN7JGJsb2NrfV9faGVhZGVyLS10aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtMzI7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC4jeyRibG9ja31fX2hlYWRlci0taW1hZ2V7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui-pages/version433/examples/examples.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui-pages/version433/examples/examples.component.ts ***!
  \********************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");



var USER = {
    actions: [
        {
            label: 'Recibidas',
            state: 'active',
            icon: 'icon-inbox-solid',
            link: '#',
            showBadge: true
        },
        {
            label: 'Papelera',
            state: '',
            icon: 'icon-archive-solid',
            link: '#',
            showBadge: false
        }
    ]
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
var DATA4 = {
    title: 'Título del panel',
    iconTitle: 'icon-reports',
    iconTitleColor: 'utils--text-grey-700',
    showSubtitle: true,
    subtitle: 'Subtítulo',
};
var EMPTYPAGES = {
    actions: [
        {
            icon: 'icon-users',
            title: 'Here is the title of the issue',
            description: 'Here is the description of the issue that cant have more than 2 lines of text.',
            button: '',
        }
    ]
};
var EMPTYPAGES2 = {
    actions: [
        {
            icon: 'icon-envelope',
            title: 'Here is the title of the issue',
            description: '',
            button: true,
        }
    ]
};
var TWO_LINES_LIST_WITH_AVATAR = {
    texts: [
        {
            title: 'Carolina López',
            subtitle: 'carolina.lopez',
            image: 'assets/images/perfil.jpg',
            link: 'Go to learningCloud',
            icon: 'icon-warning-solid',
            iconColor: 'utils--text-warning',
            text: undefined
        },
        {
            title: 'José Antonio García',
            subtitle: 'josean.garcia',
            image: undefined,
            link: undefined,
            icon: undefined,
            iconColor: undefined,
            text: 'Est ei erat mucius quaeque ei his quas phaedrum.',
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
var RAISEDICONBUTTON = {
    actions: [
        {
            label: 'Link',
            color: 'primary',
            icon: 'icon-paperclip',
            showIconLeft: true,
            showIconRight: false,
            disabled: ''
        },
        {
            label: 'Next',
            color: 'primary',
            icon: 'icon-chevron-right',
            showIconLeft: false,
            showIconRight: true,
            disabled: 'disabled'
        },
        {
            label: 'Previous',
            color: 'accent',
            icon: 'icon-chevron-left',
            showIconLeft: true,
            showIconRight: false,
            disabled: ''
        },
        {
            label: 'Action',
            color: 'accent',
            icon: 'icon-chevron-left',
            showIconLeft: true,
            showIconRight: false,
            disabled: 'disabled'
        }
    ]
};
var STROKEDICONBUTTON = {
    actions: [
        {
            label: 'Link',
            color: 'primary',
            icon: 'icon-paperclip',
            showIconLeft: true,
            showIconRight: false,
            disabled: ''
        },
        {
            label: 'Siguiente',
            color: 'primary',
            icon: 'icon-chevron-right',
            showIconLeft: false,
            showIconRight: true,
            disabled: 'disabled'
        },
        {
            label: 'Anterior',
            color: 'accent',
            icon: 'icon-chevron-left',
            showIconLeft: true,
            showIconRight: false,
            disabled: ''
        },
        {
            label: 'Acción',
            color: 'accent',
            icon: 'icon-chevron-left',
            showIconLeft: true,
            showIconRight: false,
            disabled: 'disabled'
        },
        {
            label: 'Acción',
            color: 'white',
            icon: 'icon-chevron-left',
            showIconLeft: true,
            showIconRight: false,
            disabled: ''
        },
        {
            label: 'Acción',
            color: 'white',
            icon: 'icon-chevron-right',
            showIconLeft: false,
            showIconRight: true,
            disabled: 'disabled'
        }
    ]
};
var TEXTICONBUTTON = {
    actions: [
        {
            label: 'Link',
            color: 'primary',
            icon: 'icon-paperclip',
            showIconLeft: true,
            showIconRight: false,
            disabled: ''
        },
        {
            label: 'Siguiente',
            color: 'primary',
            icon: 'icon-chevron-right',
            showIconLeft: false,
            showIconRight: true,
            disabled: 'disabled'
        },
        {
            label: 'Anterior',
            color: 'accent',
            icon: 'icon-chevron-left',
            showIconLeft: true,
            showIconRight: false,
            disabled: ''
        },
        {
            label: 'Acción',
            color: 'accent',
            icon: 'icon-chevron-left',
            showIconLeft: true,
            showIconRight: false,
            disabled: 'disabled'
        },
        {
            label: 'Acción',
            color: 'white',
            icon: 'icon-chevron-left',
            showIconLeft: true,
            showIconRight: false,
            disabled: ''
        },
        {
            label: 'Acción',
            color: 'white',
            icon: 'icon-chevron-right',
            showIconLeft: false,
            showIconRight: true,
            disabled: 'disabled'
        }
    ]
};
var ExamplesComponent = /** @class */ (function () {
    //constructor(private tabsHeaderService: TabsHeaderService) { }
    function ExamplesComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.user = USER;
        this.user2 = PROFILEDIALOG2;
        this.emptyPages = EMPTYPAGES;
        this.emptyPages2 = EMPTYPAGES2;
        this.data = TWO_LINES_LIST_WITH_AVATAR;
        this.chip = CHIP;
        this.raisedIconButton = RAISEDICONBUTTON;
        this.strokedIconButton = STROKEDICONBUTTON;
        this.textIconButton = TEXTICONBUTTON;
        this.toolbarAlert = [
            {
                bgColor: '#FFEDB1',
                title: 'A plataforma de pagamentos já está aberta e você pode seguir com a compra dos materiais para o ano letivo.',
                link: 'Pagar ahora',
                showLink: true
            }
        ];
        this.panelEmpty = [
            {
                'header': 'This is the panel header',
                'body': 'This is the panel body',
            },
            {
                'header': 'This is the panel header 2',
                'body': 'This is the panel body 2',
            },
            {
                'header': 'This is the panel header 3',
                'body': 'This is the panel body 3',
            }
        ];
        this.list8 = [
            {
                positionClass: '',
                firstLabel: '26',
                firstLabelBgColor: '#1AA9E2',
                firstLabelColor: '#fff',
                secondLabel: 'L OCT',
                thirdLabel: '09:00 - 09:30',
                badgeBgColor: '#FFC400',
                fourthLabel: 'Tarea - Los fósiles',
            },
            {
                positionClass: '',
                firstLabel: '27',
                firstLabelBgColor: '',
                firstLabelColor: '',
                secondLabel: 'M OCT',
                thirdLabel: '09:00 - 10:00',
                badgeBgColor: '#FFC400',
                fourthLabel: 'Tarea - Los invertebrados',
            },
            {
                positionClass: 'no-border',
                firstLabel: '',
                firstLabelBgColor: '',
                firstLabelColor: '',
                secondLabel: '',
                thirdLabel: '10:00 - 12:00',
                badgeBgColor: '#FFC400',
                fourthLabel: 'Evento para toda la clase',
            },
            {
                positionClass: 'no-border',
                firstLabel: '',
                firstLabelBgColor: '',
                firstLabelColor: '',
                secondLabel: '',
                thirdLabel: '12:00 - 13:30',
                badgeBgColor: '#FFC400',
                fourthLabel: 'Evento para toda la clase',
            },
            {
                positionClass: '',
                firstLabel: '28',
                firstLabelBgColor: '',
                firstLabelColor: '',
                secondLabel: 'M OCT',
                thirdLabel: '09:30 - 10:00',
                badgeBgColor: '#1AA9E2',
                fourthLabel: 'Tarea - Meis vocent signiferumque pri et. Facilis corpora recusabo ne quo, eum ne eruditi blandit suscipiantur.',
            },
            {
                positionClass: '',
                firstLabel: '30',
                firstLabelBgColor: '',
                firstLabelColor: '',
                secondLabel: 'V OCT',
                thirdLabel: '09:00 - 10:00',
                badgeBgColor: '#FFC400',
                fourthLabel: 'Tarea - Los invertebrados',
            },
        ];
        this.list9 = [
            {
                title: '90',
                titleColor: '#1AA9E2',
                subtitle: 'Asistencia',
            },
            {
                title: '10',
                subtitle: 'Justificadas',
            },
            {
                title: '50',
                titleColor: '#5CCE88',
                subtitle: 'Nota media',
            },
            {
                title: '70',
                titleColor: '#EE9A37',
                subtitle: 'Media del curso',
            },
            {
                title: '0',
                titleColor: '#F05060',
                subtitle: 'Notas debajo de 5',
            },
            {
                title: '11.4 Gb',
                titleColor: '#000',
                subtitle: 'Espacio usado',
            }
        ];
        this.list10 = [
            {
                icon: 'icon-star-solid',
                iconColor: '#EE9A37',
            },
            {
                icon: 'icon-star-solid',
                iconColor: '#EE9A37',
            },
            {
                icon: 'icon-star-solid',
                iconColor: '#EE9A37',
            },
            {
                icon: 'icon-star',
            },
            {
                icon: 'icon-star',
            }
        ];
        this.list10b = [
            {
                icon: 'icon-star-solid',
                iconColor: '#EE9A37',
            },
            {
                icon: 'icon-star-solid',
                iconColor: '#EE9A37',
            },
            {
                icon: 'icon-star-solid',
                iconColor: '#EE9A37',
            },
            {
                icon: 'icon-star-solid',
                iconColor: '#EE9A37',
            },
            {
                icon: 'icon-star-solid',
                iconColor: '#EE9A37',
            }
        ];
        this.card1 = [
            {
                image: '',
                initials: '',
                title: '',
                subtitle: '',
                options: '',
            },
            {
                image: '',
                initials: '',
                title: '',
                subtitle: '',
                options: '',
            }
        ];
        this.card2 = [
            {
                image: '',
                title: '',
                options: '',
            },
            {
                image: '',
                title: '',
                options: '',
            },
            {
                image: '',
                title: '',
                options: '',
            }
        ];
        this.card3 = [
            {
                image: '',
                initials: '',
                badgeColor: '',
                title: '',
                subtitle: '',
                subtitle2: '',
                subtitle3: '',
                subtitle3Color: '',
                options: '',
            },
            {
                image: '',
                initials: '',
                badgeColor: '',
                title: '',
                subtitle: '',
                subtitle2: '',
                subtitle3: '',
                subtitle3Color: '',
                options: '',
            }
        ];
        this.card4 = [
            {
                image: '',
                initials: '',
                badgeColor: '',
                title: '',
                subtitle: '',
                options: '',
            },
            {
                image: '',
                initials: '',
                badgeColor: '',
                title: '',
                subtitle: '',
                options: '',
            }
        ];
        this.card20 = [
            {
                showLink: '',
                link: '',
                image: '',
                title: '',
                subtitle: '',
            },
            {
                showLink: '',
                link: '',
                image: '',
                title: '',
                subtitle: '',
            }
        ];
        this.labelRound = [
            {
                text: '6',
                color: 'utils--bc-grey-200',
                textcolor: 'utils--text-grey-700',
            },
            {
                text: '26',
                color: 'utils--bc-content',
                textcolor: 'utils--text-white',
            },
            {
                text: '126',
                color: 'utils--bc-primary',
                textcolor: 'utils--text-white',
            },
            {
                text: 'Ejemplo de label con texto muy largo',
                color: 'utils--bc-warning',
                textcolor: 'utils--text-white',
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
        this.list3 = [
            {
                label: '11 de feb de 2020',
                icon: 'icon-calendar'
            },
            {
                label: 'A Coruña, edificio principal',
                icon: 'icon-location'
            },
            {
                label: '32 destinatarios',
                icon: 'icon-users'
            }
        ];
        this.rbgData_1 = [
            {
                label: 'Option one',
                value: 1,
                checked: true,
                disabled: undefined
            },
            {
                label: 'Option two',
                value: 2,
                checked: undefined,
                disabled: undefined
            },
            {
                label: 'Disabled option',
                value: 3,
                checked: undefined,
                disabled: true
            }
        ];
        this.rbgData_2 = [
            {
                label: undefined,
                value: 2,
                checked: true,
                disabled: undefined
            }
        ];
        this.rbgData_3 = [
            {
                label: undefined,
                value: 3,
                checked: undefined,
                disabled: undefined
            }
        ];
        this.rbgData_4 = [
            {
                label: undefined,
                value: 4,
                checked: undefined,
                disabled: undefined
            }
        ];
        this.rbgData_5 = [
            {
                label: undefined,
                value: 5,
                checked: undefined,
                disabled: undefined
            }
        ];
        this.rbgData_6 = [
            {
                label: undefined,
                value: 6,
                checked: true,
                disabled: undefined
            }
        ];
        this.rbgData_7 = [
            {
                label: undefined,
                value: 7,
                checked: undefined,
                disabled: undefined
            }
        ];
        this.list6 = [
            {
                avatar: 'assets/images/user_female_04.jpg',
                lblPrincipal: 'Bernice Greaves',
                lblSecondary: {
                    text: '1 day left',
                    value: 1,
                    requiredValue: 5
                }
            },
            {
                avatar: 'assets/images/user_female_01.jpg',
                lblPrincipal: 'Suzanne Axtens',
                lblSecondary: {
                    text: '10 days left',
                    value: 10,
                    requiredValue: 5
                }
            },
            {
                avatar: 'assets/images/user_male_01.png',
                lblPrincipal: 'Jerry Basile',
                lblSecondary: {
                    text: '3 days left',
                    value: 3,
                    requiredValue: 5
                }
            },
            {
                avatar: 'assets/images/user_male_02.png',
                lblPrincipal: 'Anthony Olenin',
                lblSecondary: {
                    text: '7 days left',
                    value: 7,
                    requiredValue: 5
                }
            }
        ];
        this.list7 = [
            {
                labelPrincipal: 'ux q3',
                labelSecondary: 'UX designer',
                labelTertiary: '27/10/2020',
                badgeBgColor: '#199AA8',
            },
            {
                labelPrincipal: 'ux q3 lorem ipsum dolor sit amet, consectetur adipiscing',
                labelSecondary: 'Front-End developer lorem ipsum dolor',
                labelTertiary: '26/07/2020',
                badgeBgColor: '#199AA8',
            },
            {
                labelPrincipal: 'ux q2',
                labelSecondary: 'UI developer',
                labelTertiary: '28/03/2020',
                badgeBgColor: '#B182A6',
            }
        ];
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
            }
        ];
        this.filesAdded = [
            {
                name: 'pdf_file_with_a_very_long_text.pdf',
                icon: 'icon-file-pdf'
            },
            {
                name: 'zip_file_01',
                icon: 'icon-file-zip'
            },
            {
                name: 'pdf_file_01',
                icon: 'icon-file-pdf'
            }
        ];
        this.arrayOfData = [{
                "name": "Ynez con texo muy largo de ejemplo",
                "surname": "Stout con texo muy largo de ejemplo",
                "username": "ystout0",
                "avatar": "https://robohash.org/estipsamfacere.jpg?size=50x50&set=set1",
                "date": "08/04/2020"
            }, {
                "name": "Camila",
                "surname": "Skirving",
                "username": "cskirving5",
                "avatar": "https://robohash.org/eligendieteaque.jpg?size=50x50&set=set1",
                "date": "14/06/2020"
            }, {
                "name": "Hastings",
                "surname": "Dunbavin",
                "username": "hdunbavin6",
                "avatar": "https://robohash.org/fugaaliquidreprehenderit.jpg?size=50x50&set=set1",
                "date": "16/04/2020"
            }, {
                "name": "Valentine",
                "surname": "Vader",
                "username": "vvader2q",
                "avatar": "https://robohash.org/consequaturcupiditatererum.jpg?size=50x50&set=set1",
                "date": "11/07/2020"
            }, {
                "name": "Tracey",
                "surname": "Berrygun",
                "username": "tberrygun2r",
                "avatar": "https://robohash.org/nequequasaut.jpg?size=50x50&set=set1",
                "date": "19/02/2020"
            }];
        this.tableData = [];
        this.mtp1User = {
            'avatar': 'assets/images/perfil.jpg',
            'fullname': 'Carolina López',
            'username': 'carolina.lopez',
            'companyLogo': 'assets/images/icon-netex.png',
            'companyName': 'Logo netex',
            'link': 'http://www.netexlearning.es',
            'linkLabel': 'Accede a tu cuenta'
        };
        this.mtp1Options = [
            {
                'label': 'Notificaciones',
                'badge': 29
            },
            {
                'label': 'Novedades'
            },
            {
                'label': 'Manuales'
            },
            {
                'label': 'Netex Community'
            }
        ];
        this.mtp2User = {
            'avatar': 'assets/images/user_female_02.jpg',
            'fullname': 'Suzanne Axtens',
            'username': 'suzanne.axtens',
            'companyLogo': 'assets/images/icon-netex.png',
            'companyName': 'Logo netex',
            'link': 'http://www.netexlearning.es',
            'linkLabel': 'Accede a tu cuenta'
        };
        this.mtp2Options = [
            {
                'label': 'Notificaciones',
                'badge': 29
            },
            {
                'label': 'Novedades'
            },
            {
                'label': 'Manuales'
            },
            {
                'label': 'Netex Community'
            }
        ];
        this.mtp2MainOption = {
            label: 'Use as administrator',
            img: 'assets/images/administrator-banner.png'
        };
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apps = this.dashboardService.getDashboardApps();
        this.data4 = DATA4;
        setTimeout(function () {
            _this.card1 = [
                {
                    image: 'assets/images/writting.jpg',
                    initials: '',
                    title: 'Project name that could be longer than just one line and will be shown with three dots',
                    subtitle: 'Subtitle with a very long text in one line and three dots',
                    options: 'true',
                },
                {
                    image: '',
                    initials: 'PN',
                    title: 'Project name',
                    subtitle: 'Subtitle',
                    options: 'true',
                }
            ];
            _this.card2 = [
                {
                    image: 'assets/images/writting.jpg',
                    title: 'Project name that could be longer than just one line and will be shown with three dots',
                    options: 'true',
                },
                {
                    image: 'assets/images/bg-01.png',
                    title: 'Project name',
                    options: 'true',
                },
                {
                    image: 'assets/images/bg-02.png',
                    title: 'Project name that could be longer than just one line and will be shown with three dots',
                    options: 'true',
                }
            ];
            _this.card3 = [
                {
                    image: '',
                    initials: ' ',
                    badgeColor: 'orange',
                    title: 'Evaluation A',
                    subtitle: '20/12/2020',
                    subtitle2: '9/22 Users',
                    subtitle3: 'Closed',
                    subtitle3Color: '#f05060',
                    options: '',
                },
                {
                    image: 'assets/images/bg-01.png',
                    initials: '',
                    badgeColor: '',
                    title: 'Evaluation name that could be longer than just one line and will be shown with three dots',
                    subtitle: '28/12/2020',
                    subtitle2: '10/22 Users',
                    subtitle3: 'Open',
                    subtitle3Color: '#5cce88',
                    options: 'true',
                }
            ];
            _this.card4 = [
                {
                    image: 'assets/images/perfil.jpg',
                    initials: '',
                    badgeColor: '',
                    title: 'María Cristina Martínez Casanueva',
                    subtitle: 'UX designer and web developer',
                    options: 'true',
                },
                {
                    image: '',
                    initials: ' ',
                    badgeColor: '#EE9A37',
                    title: 'Ana Pérez Lago',
                    subtitle: 'Front developer',
                    options: 'true',
                }
            ];
            _this.card20 = [
                {
                    showLink: false,
                    link: '',
                    image: 'assets/images/writting.jpg',
                    title: 'Card title',
                    subtitle: 'Card subtitle',
                },
                {
                    showLink: true,
                    link: 'blog.tucole.com',
                    image: 'assets/images/bg-03.png',
                    title: 'Title that could not be longer than one line and will be shown with three dots',
                    subtitle: 'Os alunos e alunas realizaram uma excursão no sábado passado com a equipe docente do primário para realizar uma reportaxe.',
                }
            ];
        }, 5000);
        this.menuOptionsSimple = {
            icon: 'icon-more-options',
            actions: [
                {
                    disabled: false,
                    showIconOptions: false,
                    iconOptions: '',
                    title: 'Delete',
                    click: function () { alert('You\'ve clicked in \'Delete\' option'); }
                },
                {
                    disabled: true,
                    showIconOptions: false,
                    iconOptions: '',
                    title: 'Edit',
                    click: function () { alert('You\'ve clicked in \'Edit\' option'); }
                }
            ]
        };
        this.menuOptionsSimpleIcon = {
            icon: 'icon-heart',
            actions: [
                {
                    disabled: false,
                    showIconOptions: true,
                    iconOptions: 'icon-archive',
                    title: 'Archive',
                    click: function () { alert('You\'ve clicked in \'Archive\' option'); }
                },
                {
                    disabled: false,
                    showIconOptions: true,
                    iconOptions: 'icon-bell',
                    title: 'Notifications',
                    click: function () { alert('You\'ve clicked in \'Notifications\' option'); }
                },
                {
                    disabled: false,
                    showIconOptions: true,
                    iconOptions: 'icon-camera',
                    title: 'Take a picture',
                    click: function () { alert('You\'ve clicked in \'Take a picture\' option'); }
                },
                {
                    disabled: true,
                    showIconOptions: true,
                    iconOptions: 'icon-clock',
                    title: 'Select hour',
                    click: function () { alert('You\'ve clicked in \'Select hour\' option'); }
                }
            ]
        };
        this.menuOptions = {
            icon: 'icon-more-options',
            actions: [
                {
                    disabled: false,
                    showmenuOptions: true,
                    showIconOptions: false,
                    showDivider: false,
                    showButtons: false,
                    iconOptions: '',
                    title: 'Archive',
                    buttonText: '',
                    click: function () { alert('You\'ve clicked in \'Archive\' option'); }
                },
                {
                    disabled: false,
                    showmenuOptions: true,
                    showIconOptions: true,
                    showDivider: false,
                    showButtons: false,
                    iconOptions: 'icon-bell',
                    title: 'Notifications',
                    buttonText: '',
                    click: function () { alert('You\'ve clicked in \'Notifications\' option'); }
                },
                {
                    disabled: true,
                    showmenuOptions: true,
                    showIconOptions: true,
                    showDivider: false,
                    showButtons: false,
                    iconOptions: 'icon-pencil',
                    title: 'Edit',
                    buttonText: '',
                    click: function () { alert('You\'ve clicked in \'Edit\' option'); }
                }
            ]
        };
        this.menuOptionsAdvanced = {
            icon: 'icon-plus-circle',
            actions: [
                {
                    disabled: false,
                    showmenuOptions: true,
                    showIconOptions: false,
                    showDivider: false,
                    showButtons: false,
                    iconOptions: '',
                    title: 'Archive',
                    buttonText: '',
                    click: function () { alert('You\'ve clicked in \'Archive\' option'); }
                },
                {
                    disabled: false,
                    showmenuOptions: true,
                    showIconOptions: false,
                    showDivider: false,
                    showButtons: false,
                    iconOptions: '',
                    title: 'Notifications',
                    buttonText: '',
                    click: function () { alert('You\'ve clicked in \'Notifications\' option'); }
                },
                {
                    disabled: true,
                    showmenuOptions: true,
                    showIconOptions: false,
                    showDivider: false,
                    showButtons: false,
                    iconOptions: '',
                    title: 'Edit',
                    buttonText: '',
                    click: function () { alert('You\'ve clicked in \'Edit\' option'); }
                },
                {
                    disabled: true,
                    showmenuOptions: false,
                    showIconOptions: false,
                    showDivider: true,
                    showButtons: false,
                    iconOptions: '',
                    title: '',
                    buttonText: '',
                    click: function () { }
                },
                {
                    disabled: false,
                    showmenuOptions: true,
                    showIconOptions: true,
                    showDivider: false,
                    showButtons: false,
                    iconOptions: 'icon-trash',
                    title: 'Delete',
                    buttonText: '',
                    click: function () { alert('You\'ve clicked in \'Delete\' option'); }
                },
                {
                    disabled: true,
                    showmenuOptions: true,
                    showIconOptions: true,
                    showDivider: false,
                    showButtons: false,
                    iconOptions: 'icon-download',
                    title: 'Download',
                    buttonText: '',
                    click: function () { alert('You\'ve clicked in \'Download\' option'); }
                },
                {
                    disabled: true,
                    showmenuOptions: false,
                    showIconOptions: false,
                    showDivider: true,
                    showButtons: false,
                    iconOptions: '',
                    title: '',
                    buttonText: '',
                    click: function () { }
                },
                {
                    disabled: false,
                    showmenuOptions: false,
                    showIconOptions: false,
                    showDivider: false,
                    showButtons: true,
                    iconOptions: '',
                    title: '',
                    buttonText: 'Button',
                    click: function () { }
                },
                {
                    disabled: false,
                    showmenuOptions: false,
                    showIconOptions: false,
                    showDivider: false,
                    showButtons: true,
                    iconOptions: '',
                    title: '',
                    buttonText: 'Button two',
                    click: function () { }
                },
            ]
        };
        var arrColorLabel = ['black', 'blue', 'orange', 'lightblue', 'red', undefined];
        this.tableData = this.arrayOfData.map(function (item) {
            var state_color = arrColorLabel[Math.floor(Math.random() * arrColorLabel.length)];
            item['state_color'] = state_color;
            item['state_label'] = 'state';
            return item;
        });
    };
    ExamplesComponent.prototype.setPath = function (value) {
        //this.tabsHeaderService.setPath(value);
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/version433/examples/examples.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/version433/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/version433/version433-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/ui-pages/version433/version433-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: Version433RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version433RoutingModule", function() { return Version433RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/version433/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/version433/examples/examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var Version433RoutingModule = /** @class */ (function () {
    function Version433RoutingModule() {
    }
    Version433RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Version433RoutingModule);
    return Version433RoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/version433/version433.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-pages/version433/version433.module.ts ***!
  \**********************************************************/
/*! exports provided: Version433Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version433Module", function() { return Version433Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/version433/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/version433/examples/examples.component.ts");
/* harmony import */ var _version433_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./version433-routing.module */ "./src/app/ui-pages/version433/version433-routing.module.ts");
/* harmony import */ var projects_netex_ux_components_src_public_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/netex/ux-components/src/public_api */ "./projects/netex/ux-components/src/public_api.ts");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");









var Version433Module = /** @class */ (function () {
    function Version433Module() {
    }
    Version433Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _version433_routing_module__WEBPACK_IMPORTED_MODULE_6__["Version433RoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxListsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxLabelsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxTablesModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxButtonsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxFormsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxMenusModule"],
                projects_netex_ux_components_src_public_api__WEBPACK_IMPORTED_MODULE_7__["NtxToolbarModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxChipsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxDragAndDropModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxEmptyPagesModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxDialogsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxProgressBarModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_8__["NtxExpansionPanelsModule"]
            ]
        })
    ], Version433Module);
    return Version433Module;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-version433-version433-module.js.map