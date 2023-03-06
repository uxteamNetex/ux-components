(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-table-table-module"],{

/***/ "./src/app/ui-pages/table/documentation/documentation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/table/documentation/documentation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Basic table</h1>\r\n    <p class=\"documentation-text\">\r\n      <span class=\"documentation-code\">ntx-basic-table</span> is a component based on Angular data-table that can be used to display rows of data.\r\n    </p>\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n        The content of the table is being shown in its own .ts file.\r\n    </p>\r\n    <p class=\"documentation-text\">\r\n        Also you can customize <span class=\"documentation-code\">ntx-basic-table</span> with a flat design through <span class=\"documentation-code\">@Input</span> property like this:\r\n        <span class=\"documentation-code\">&lt;ntx-basic-table [style]='flat'&gt;</span>\r\n    </p>\r\n    <p>\r\n      This 'flat design' hides paginator, removes border shadow and background color.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Basic table v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add the <span class=\"documentation-code\">sticky</span> and <span class=\"documentation-code\">stickyEnd</span> directive to the ng-container column, to fix cell columns to the start or end of the horizontally scrolling viewport.</li>\r\n      <li>Adjust some css styles.</li>\r\n      <li>Function added to check if sticky column's border has to be shown based on table content instead of screen resolution</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-tables/basic-table/basic-table.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-tables/basic-table/basic-table.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Basic table v4.3.2</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add <span class=\"documentation-code\">matSortActive</span> and <span class=\"documentation-code\">matSortDisableClear</span> directives to improve sorting.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-tables/basic-table/basic-table.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/table/documentation/documentation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/table/documentation/documentation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3RhYmxlL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/table/documentation/documentation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui-pages/table/documentation/documentation.component.ts ***!
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
        this.code1 = "\n  ...\n\n  <mat-table\n    matSort\n    matSortActive=\"name\"\n    matSortDisableClear\n    [dataSource]=\"dataSource\"\n    class=\"table-selectable__table mat-elevation-z8\">\n\n    ...\n\n  ";
        this.code2 = "\n  <ng-container matColumnDef=\"name\" sticky>\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>First name</th>\n    ...\n  </ng-container>\n\n  ...\n\n  <ng-container matColumnDef=\"options\" stickyEnd>\n    <th class=\"utils--w-48\" mat-header-cell *matHeaderCellDef></th>\n    <td class=\"utils--w-48\" mat-cell *matCellDef=\"let element\">\n      <ntx-menu-options></ntx-menu-options>\n    </td>\n  </ng-container>\n\n  ";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/table/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/table/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/table/examples/examples.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/table/examples/examples.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-basic-table [tableData]=\"tableData\"></ntx-basic-table>\r\n\r\n    <p class=\"utils--section-title utils--margin-top-60 utils--margin-bottom-20\">Tabla sin contenedor</p>\r\n    <ntx-basic-table [style]=\"'flat'\" [tableData]=\"tableData\"></ntx-basic-table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/table/examples/examples.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/table/examples/examples.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3RhYmxlL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/table/examples/examples.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui-pages/table/examples/examples.component.ts ***!
  \***************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.arrayOfData = [{
                "name": "Ynez",
                "surname": "Stout",
                "username": "ystout0",
                "avatar": "https://robohash.org/estipsamfacere.jpg?size=50x50&set=set1",
                "date": "08/04/2020"
            }, {
                "name": "Ephrem",
                "surname": "Hebblewaite",
                "username": "ehebblewaite1",
                "avatar": "https://robohash.org/ipsumquisillo.jpg?size=50x50&set=set1",
                "date": "18/03/2020"
            }, {
                "name": "Saidee",
                "surname": "Dafforne",
                "username": "sdafforne2",
                "avatar": "https://robohash.org/namdignissimosodit.jpg?size=50x50&set=set1",
                "date": "11/06/2020"
            }, {
                "name": "Roze",
                "surname": "Reynoldson",
                "username": "rreynoldson3",
                "avatar": "https://robohash.org/esttemporasit.jpg?size=50x50&set=set1",
                "date": "30/10/2020"
            }, {
                "name": "Anthony",
                "surname": "Olenin",
                "username": "aolenin4",
                "avatar": "https://robohash.org/voluptatemquiaullam.jpg?size=50x50&set=set1",
                "date": "29/01/2020"
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
                "name": "Estell",
                "surname": "Wrate",
                "username": "ewrate7",
                "avatar": "https://robohash.org/praesentiumadolorem.jpg?size=50x50&set=set1",
                "date": "02/09/2020"
            }, {
                "name": "Virgie",
                "surname": "Bortol",
                "username": "vbortol8",
                "avatar": "https://robohash.org/quibusdamliberoprovident.jpg?size=50x50&set=set1",
                "date": "30/03/2020"
            }, {
                "name": "Anne-marie",
                "surname": "Hucquart",
                "username": "ahucquart9",
                "avatar": "https://robohash.org/facilisnatusofficia.jpg?size=50x50&set=set1",
                "date": "20/07/2020"
            }, {
                "name": "Kevon",
                "surname": "Ilem",
                "username": "kilema",
                "avatar": "https://robohash.org/accusantiumexcepturiplaceat.jpg?size=50x50&set=set1",
                "date": "06/07/2020"
            }, {
                "name": "Caleb",
                "surname": "Graffham",
                "username": "cgraffhamb",
                "avatar": "https://robohash.org/utrepellateos.jpg?size=50x50&set=set1",
                "date": "27/02/2020"
            }, {
                "name": "Hakeem",
                "surname": "Abrahams",
                "username": "habrahamsc",
                "avatar": "https://robohash.org/eligendiiureillum.jpg?size=50x50&set=set1",
                "date": "27/12/2019"
            }, {
                "name": "Blake",
                "surname": "Winear",
                "username": "bwineard",
                "avatar": "https://robohash.org/quiavoluptatesprovident.jpg?size=50x50&set=set1",
                "date": "04/04/2020"
            }, {
                "name": "Carlita",
                "surname": "Cambden",
                "username": "ccambdene",
                "avatar": "https://robohash.org/impeditperferendisconsequatur.jpg?size=50x50&set=set1",
                "date": "12/03/2020"
            }, {
                "name": "Adorne Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem.",
                "surname": "Dunkirk Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem.",
                "username": "adunkirkf",
                "avatar": "https://robohash.org/aboptioerror.jpg?size=50x50&set=set1",
                "date": "11/09/2020"
            }, {
                "name": "Crysta",
                "surname": "Moneti",
                "username": "cmonetig",
                "avatar": "https://robohash.org/temporaiuredicta.jpg?size=50x50&set=set1",
                "date": "22/09/2020"
            }, {
                "name": "Miles",
                "surname": "Luff",
                "username": "mluffh",
                "avatar": "https://robohash.org/quosrerumqui.jpg?size=50x50&set=set1",
                "date": "08/01/2020"
            }, {
                "name": "Raynard",
                "surname": "Beesley",
                "username": "rbeesleyi",
                "avatar": "https://robohash.org/quibusdamtotameveniet.jpg?size=50x50&set=set1",
                "date": "02/09/2020"
            }, {
                "name": "Delora",
                "surname": "Kitchinghan",
                "username": "dkitchinghanj",
                "avatar": "https://robohash.org/porrodictased.jpg?size=50x50&set=set1",
                "date": "29/05/2020"
            }, {
                "name": "Judah",
                "surname": "Denison",
                "username": "jdenisonk",
                "avatar": "https://robohash.org/sitnonfugiat.jpg?size=50x50&set=set1",
                "date": "29/08/2020"
            }, {
                "name": "Shirl",
                "surname": "Maunton",
                "username": "smauntonl",
                "avatar": "https://robohash.org/ipsumculpaconsequatur.jpg?size=50x50&set=set1",
                "date": "01/08/2020"
            }, {
                "name": "Louella",
                "surname": "Beeres",
                "username": "lbeeresm",
                "avatar": "https://robohash.org/utquisquamcumque.jpg?size=50x50&set=set1",
                "date": "11/12/2019"
            }, {
                "name": "Mag",
                "surname": "Frick",
                "username": "mfrickn",
                "avatar": "https://robohash.org/rerumvitaeofficia.jpg?size=50x50&set=set1",
                "date": "16/04/2020"
            }, {
                "name": "Sabrina",
                "surname": "MacKilroe",
                "username": "smackilroeo",
                "avatar": "https://robohash.org/perspiciatisasperioreslaboriosam.jpg?size=50x50&set=set1",
                "date": "01/11/2020"
            }, {
                "name": "Penni",
                "surname": "Aymerich",
                "username": "paymerichp",
                "avatar": "https://robohash.org/undevitaenihil.jpg?size=50x50&set=set1",
                "date": "13/10/2020"
            }, {
                "name": "Hubert",
                "surname": "O'Bradain",
                "username": "hobradainq",
                "avatar": "https://robohash.org/atqueestharum.jpg?size=50x50&set=set1",
                "date": "27/05/2020"
            }, {
                "name": "Arnold",
                "surname": "Stealy",
                "username": "astealyr",
                "avatar": "https://robohash.org/utperspiciatisdolorem.jpg?size=50x50&set=set1",
                "date": "08/02/2020"
            }, {
                "name": "Evered",
                "surname": "Hazelton",
                "username": "ehazeltons",
                "avatar": "https://robohash.org/dignissimosfacilislaudantium.jpg?size=50x50&set=set1",
                "date": "05/04/2020"
            }, {
                "name": "Benji",
                "surname": "Carnock",
                "username": "bcarnockt",
                "avatar": "https://robohash.org/quodetqui.jpg?size=50x50&set=set1",
                "date": "31/12/2019"
            }, {
                "name": "Stafford",
                "surname": "Carncross",
                "username": "scarncrossu",
                "avatar": "https://robohash.org/fugitearumsit.jpg?size=50x50&set=set1",
                "date": "15/03/2020"
            }, {
                "name": "Keen",
                "surname": "Dyshart",
                "username": "kdyshartv",
                "avatar": "https://robohash.org/quiexercitationemsuscipit.jpg?size=50x50&set=set1",
                "date": "02/02/2020"
            }, {
                "name": "Wood",
                "surname": "Sarton",
                "username": "wsartonw",
                "avatar": "https://robohash.org/explicabodelenitinon.jpg?size=50x50&set=set1",
                "date": "18/02/2020"
            }, {
                "name": "Violet",
                "surname": "Hartrick",
                "username": "vhartrickx",
                "avatar": "https://robohash.org/arerumet.jpg?size=50x50&set=set1",
                "date": "15/12/2019"
            }, {
                "name": "Halette",
                "surname": "Fillingham",
                "username": "hfillinghamy",
                "avatar": "https://robohash.org/sapienteerrorrepellat.jpg?size=50x50&set=set1",
                "date": "01/05/2020"
            }, {
                "name": "Eberto",
                "surname": "Cotterrill",
                "username": "ecotterrillz",
                "avatar": "https://robohash.org/doloresassumendatempora.jpg?size=50x50&set=set1",
                "date": "30/12/2019"
            }, {
                "name": "Audre",
                "surname": "Paoletti",
                "username": "apaoletti10",
                "avatar": "https://robohash.org/utmaioresenim.jpg?size=50x50&set=set1",
                "date": "17/11/2020"
            }, {
                "name": "Jefferey",
                "surname": "Filipputti",
                "username": "jfilipputti11",
                "avatar": "https://robohash.org/etetnon.jpg?size=50x50&set=set1",
                "date": "07/04/2020"
            }, {
                "name": "Martyn",
                "surname": "Binner",
                "username": "mbinner12",
                "avatar": "https://robohash.org/voluptatumexpeditainventore.jpg?size=50x50&set=set1",
                "date": "11/11/2020"
            }, {
                "name": "Isa",
                "surname": "Gammet",
                "username": "igammet13",
                "avatar": "https://robohash.org/eosconsequaturquas.jpg?size=50x50&set=set1",
                "date": "23/07/2020"
            }, {
                "name": "Constantine",
                "surname": "Dawtrey",
                "username": "cdawtrey14",
                "avatar": "https://robohash.org/ideumaliquid.jpg?size=50x50&set=set1",
                "date": "01/12/2019"
            }, {
                "name": "Boy",
                "surname": "Mattiassi",
                "username": "bmattiassi15",
                "avatar": "https://robohash.org/abmolestiaeautem.jpg?size=50x50&set=set1",
                "date": "24/09/2020"
            }, {
                "name": "Viki",
                "surname": "Dalligan",
                "username": "vdalligan16",
                "avatar": "https://robohash.org/facilisetblanditiis.jpg?size=50x50&set=set1",
                "date": "10/08/2020"
            }, {
                "name": "Jen",
                "surname": "Lambswood",
                "username": "jlambswood17",
                "avatar": "https://robohash.org/quasnumquamut.jpg?size=50x50&set=set1",
                "date": "05/09/2020"
            }, {
                "name": "Helen-elizabeth",
                "surname": "Dakin",
                "username": "hdakin18",
                "avatar": "https://robohash.org/laborepraesentiummolestiae.jpg?size=50x50&set=set1",
                "date": "31/10/2020"
            }, {
                "name": "Kathryne",
                "surname": "Del Checolo",
                "username": "kdelchecolo19",
                "avatar": "https://robohash.org/voluptatemauteos.jpg?size=50x50&set=set1",
                "date": "01/02/2020"
            }, {
                "name": "Antoine",
                "surname": "Lippiello",
                "username": "alippiello1a",
                "avatar": "https://robohash.org/laboreevenietdolores.jpg?size=50x50&set=set1",
                "date": "27/04/2020"
            }, {
                "name": "Jen",
                "surname": "Blackader",
                "username": "jblackader1b",
                "avatar": "https://robohash.org/providentsedqui.jpg?size=50x50&set=set1",
                "date": "05/12/2019"
            }, {
                "name": "Carry",
                "surname": "Kingwell",
                "username": "ckingwell1c",
                "avatar": "https://robohash.org/autemquisquamdolores.jpg?size=50x50&set=set1",
                "date": "18/02/2020"
            }, {
                "name": "Tom",
                "surname": "Gorger",
                "username": "tgorger1d",
                "avatar": "https://robohash.org/etrepellatdolores.jpg?size=50x50&set=set1",
                "date": "04/01/2020"
            }, {
                "name": "Inglebert",
                "surname": "Oldmeadow",
                "username": "ioldmeadow1e",
                "avatar": "https://robohash.org/quiaanimimaxime.jpg?size=50x50&set=set1",
                "date": "01/02/2020"
            }, {
                "name": "Orton",
                "surname": "Hollidge",
                "username": "ohollidge1f",
                "avatar": "https://robohash.org/estlaboriosamrepudiandae.jpg?size=50x50&set=set1",
                "date": "24/12/2019"
            }, {
                "name": "Ulrika",
                "surname": "Phebey",
                "username": "uphebey1g",
                "avatar": "https://robohash.org/facilisautemcum.jpg?size=50x50&set=set1",
                "date": "04/12/2019"
            }, {
                "name": "Bondie",
                "surname": "Hansel",
                "username": "bhansel1h",
                "avatar": "https://robohash.org/rationeomnisconsequuntur.jpg?size=50x50&set=set1",
                "date": "10/01/2020"
            }, {
                "name": "Dulsea",
                "surname": "Minillo",
                "username": "dminillo1i",
                "avatar": "https://robohash.org/dolorumquosharum.jpg?size=50x50&set=set1",
                "date": "07/07/2020"
            }, {
                "name": "Hi",
                "surname": "Suggey",
                "username": "hsuggey1j",
                "avatar": "https://robohash.org/quiaametcorporis.jpg?size=50x50&set=set1",
                "date": "20/09/2020"
            }, {
                "name": "Andria",
                "surname": "Coite",
                "username": "acoite1k",
                "avatar": "https://robohash.org/blanditiisofficiisfugit.jpg?size=50x50&set=set1",
                "date": "03/07/2020"
            }, {
                "name": "Lian",
                "surname": "Cundey",
                "username": "lcundey1l",
                "avatar": "https://robohash.org/consequaturaliquidexercitationem.jpg?size=50x50&set=set1",
                "date": "09/07/2020"
            }, {
                "name": "Nada",
                "surname": "Vasenin",
                "username": "nvasenin1m",
                "avatar": "https://robohash.org/doloremqueinciduntlaboriosam.jpg?size=50x50&set=set1",
                "date": "26/04/2020"
            }, {
                "name": "Virgil",
                "surname": "Ximenez",
                "username": "vximenez1n",
                "avatar": "https://robohash.org/fugadelectusdoloribus.jpg?size=50x50&set=set1",
                "date": "21/07/2020"
            }, {
                "name": "Laney",
                "surname": "Smedley",
                "username": "lsmedley1o",
                "avatar": "https://robohash.org/aspernaturtotamporro.jpg?size=50x50&set=set1",
                "date": "24/03/2020"
            }, {
                "name": "Fidela",
                "surname": "Crunden",
                "username": "fcrunden1p",
                "avatar": "https://robohash.org/porrosapienteest.jpg?size=50x50&set=set1",
                "date": "30/08/2020"
            }, {
                "name": "Yale",
                "surname": "Norheny",
                "username": "ynorheny1q",
                "avatar": "https://robohash.org/vitaeearumdoloribus.jpg?size=50x50&set=set1",
                "date": "26/04/2020"
            }, {
                "name": "Kary",
                "surname": "Le Fevre",
                "username": "klefevre1r",
                "avatar": "https://robohash.org/itaquetemporibusfacilis.jpg?size=50x50&set=set1",
                "date": "05/11/2020"
            }, {
                "name": "Britney",
                "surname": "Breston",
                "username": "bbreston1s",
                "avatar": "https://robohash.org/eaaspernaturesse.jpg?size=50x50&set=set1",
                "date": "09/02/2020"
            }, {
                "name": "Hannah",
                "surname": "Siemantel",
                "username": "hsiemantel1t",
                "avatar": "https://robohash.org/fugiatnoneveniet.jpg?size=50x50&set=set1",
                "date": "02/04/2020"
            }, {
                "name": "Mariquilla",
                "surname": "Browell",
                "username": "mbrowell1u",
                "avatar": "https://robohash.org/dolorumrationeab.jpg?size=50x50&set=set1",
                "date": "14/02/2020"
            }, {
                "name": "Thorny",
                "surname": "MacDunlevy",
                "username": "tmacdunlevy1v",
                "avatar": "https://robohash.org/itaqueeumsint.jpg?size=50x50&set=set1",
                "date": "03/10/2020"
            }, {
                "name": "Truda",
                "surname": "Coysh",
                "username": "tcoysh1w",
                "avatar": "https://robohash.org/inciduntfacilisquis.jpg?size=50x50&set=set1",
                "date": "02/04/2020"
            }, {
                "name": "Cello",
                "surname": "Risen",
                "username": "crisen1x",
                "avatar": "https://robohash.org/quaeratoditet.jpg?size=50x50&set=set1",
                "date": "16/03/2020"
            }, {
                "name": "Cad",
                "surname": "Stollery",
                "username": "cstollery1y",
                "avatar": "https://robohash.org/fugitquonulla.jpg?size=50x50&set=set1",
                "date": "06/11/2020"
            }, {
                "name": "Price",
                "surname": "Woodlands",
                "username": "pwoodlands1z",
                "avatar": "https://robohash.org/cumcumqueconsectetur.jpg?size=50x50&set=set1",
                "date": "04/06/2020"
            }, {
                "name": "Taffy",
                "surname": "Caudrelier",
                "username": "tcaudrelier20",
                "avatar": "https://robohash.org/dolorenimfacere.jpg?size=50x50&set=set1",
                "date": "27/04/2020"
            }, {
                "name": "Neille",
                "surname": "Fishenden",
                "username": "nfishenden21",
                "avatar": "https://robohash.org/dictaprovidentquam.jpg?size=50x50&set=set1",
                "date": "21/10/2020"
            }, {
                "name": "Patricia",
                "surname": "Micklem",
                "username": "pmicklem22",
                "avatar": "https://robohash.org/eumveritatiseveniet.jpg?size=50x50&set=set1",
                "date": "12/12/2019"
            }, {
                "name": "Noe",
                "surname": "Sanson",
                "username": "nsanson23",
                "avatar": "https://robohash.org/quisvoluptasaspernatur.jpg?size=50x50&set=set1",
                "date": "04/09/2020"
            }, {
                "name": "Sisile",
                "surname": "Gaspero",
                "username": "sgaspero24",
                "avatar": "https://robohash.org/delenitiutveniam.jpg?size=50x50&set=set1",
                "date": "30/05/2020"
            }, {
                "name": "Waite",
                "surname": "Coysh",
                "username": "wcoysh25",
                "avatar": "https://robohash.org/fugafacerevelit.jpg?size=50x50&set=set1",
                "date": "03/06/2020"
            }, {
                "name": "Jobey",
                "surname": "Fair",
                "username": "jfair26",
                "avatar": "https://robohash.org/remiustolabore.jpg?size=50x50&set=set1",
                "date": "01/04/2020"
            }, {
                "name": "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem.",
                "surname": "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem.",
                "username": "bmcclean27 and a very long text",
                "avatar": "https://robohash.org/assumendalaborumvoluptatem.jpg?size=50x50&set=set1",
                "date": "02/08/2020"
            }, {
                "name": "Ode",
                "surname": "Tidmarsh",
                "username": "otidmarsh28",
                "avatar": "https://robohash.org/estaperiamin.jpg?size=50x50&set=set1",
                "date": "02/07/2020"
            }, {
                "name": "Randolf",
                "surname": "Davis",
                "username": "rdavis29",
                "avatar": "https://robohash.org/enimabut.jpg?size=50x50&set=set1",
                "date": "08/06/2020"
            }, {
                "name": "Palm",
                "surname": "Caddies",
                "username": "pcaddies2a",
                "avatar": "https://robohash.org/idoditratione.jpg?size=50x50&set=set1",
                "date": "15/02/2020"
            }, {
                "name": "Sari",
                "surname": "Doreward",
                "username": "sdoreward2b",
                "avatar": "https://robohash.org/omnisconsequatureos.jpg?size=50x50&set=set1",
                "date": "17/06/2020"
            }, {
                "name": "Rowan",
                "surname": "Beden",
                "username": "rbeden2c",
                "avatar": "https://robohash.org/doloresomnisvitae.jpg?size=50x50&set=set1",
                "date": "24/09/2020"
            }, {
                "name": "Rick",
                "surname": "Standage",
                "username": "rstandage2d",
                "avatar": "https://robohash.org/autnonsint.jpg?size=50x50&set=set1",
                "date": "26/06/2020"
            }, {
                "name": "Zedekiah",
                "surname": "Waine",
                "username": "zwaine2e",
                "avatar": "https://robohash.org/recusandaelaboriosamrepellendus.jpg?size=50x50&set=set1",
                "date": "27/03/2020"
            }, {
                "name": "Walt",
                "surname": "Dukes",
                "username": "wdukes2f",
                "avatar": "https://robohash.org/consequunturetet.jpg?size=50x50&set=set1",
                "date": "30/10/2020"
            }, {
                "name": "Melly",
                "surname": "Doel",
                "username": "mdoel2g",
                "avatar": "https://robohash.org/voluptatumvelitvel.jpg?size=50x50&set=set1",
                "date": "24/01/2020"
            }, {
                "name": "Amitie",
                "surname": "Dyhouse",
                "username": "adyhouse2h",
                "avatar": "https://robohash.org/omniscupiditatenihil.jpg?size=50x50&set=set1",
                "date": "29/01/2020"
            }, {
                "name": "Winifield",
                "surname": "Feander",
                "username": "wfeander2i",
                "avatar": "https://robohash.org/quisquamoccaecatiut.jpg?size=50x50&set=set1",
                "date": "09/10/2020"
            }, {
                "name": "Douglas",
                "surname": "Berndtssen",
                "username": "dberndtssen2j",
                "avatar": "https://robohash.org/adipiscianimiplaceat.jpg?size=50x50&set=set1",
                "date": "05/04/2020"
            }, {
                "name": "Willow",
                "surname": "Lejeune",
                "username": "wlejeune2k",
                "avatar": "https://robohash.org/rationenemomaiores.jpg?size=50x50&set=set1",
                "date": "14/03/2020"
            }, {
                "name": "Sisely",
                "surname": "Orgee",
                "username": "sorgee2l",
                "avatar": "https://robohash.org/sequiofficianon.jpg?size=50x50&set=set1",
                "date": "15/11/2020"
            }, {
                "name": "Hana",
                "surname": "Huygen",
                "username": "hhuygen2m",
                "avatar": "https://robohash.org/maioresodioaut.jpg?size=50x50&set=set1",
                "date": "04/03/2020"
            }, {
                "name": "Lorena",
                "surname": "Olle",
                "username": "lolle2n",
                "avatar": "https://robohash.org/quiaeumaccusamus.jpg?size=50x50&set=set1",
                "date": "18/04/2020"
            }, {
                "name": "Leoine",
                "surname": "Mahon",
                "username": "lmahon2o",
                "avatar": "https://robohash.org/occaecatiutvel.jpg?size=50x50&set=set1",
                "date": "08/12/2019"
            }, {
                "name": "Mervin",
                "surname": "Udall",
                "username": "mudall2p",
                "avatar": "https://robohash.org/aliquambeataequo.jpg?size=50x50&set=set1",
                "date": "18/01/2020"
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
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        var arrColorLabel = ['black', 'blue', 'orange', 'lightblue', 'red', undefined];
        this.tableData = this.arrayOfData.map(function (item) {
            var state_color = arrColorLabel[Math.floor(Math.random() * arrColorLabel.length)];
            item['state_color'] = state_color;
            item['state_label'] = 'state';
            return item;
        });
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/table/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/table/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/table/table-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/table/table-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRoutingModule", function() { return TableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/table/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/table/documentation/documentation.component.ts");





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
var TableRoutingModule = /** @class */ (function () {
    function TableRoutingModule() {
    }
    TableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TableRoutingModule);
    return TableRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/table/table.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/table/table.module.ts ***!
  \************************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _table_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-routing.module */ "./src/app/ui-pages/table/table-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/table/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/table/examples/examples.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _table_routing_module__WEBPACK_IMPORTED_MODULE_4__["TableRoutingModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ]
        })
    ], TableModule);
    return TableModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-table-table-module.js.map