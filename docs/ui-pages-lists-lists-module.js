(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-lists-lists-module"],{

/***/ "./src/app/ui-pages/lists/documentation/lists-doc.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/lists/documentation/lists-doc.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Lists</p>\r\n    <p class=\"documentation-text\">\r\n      ntx-list is a component that wraps and formats a series of line items.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Lists types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are several types of nxt-list: use <span class=\"documentation-code\">ntx-list-one-line-avatar</span> for lists that need just one image and one line of content. Use <span class=\"documentation-code\">ntx-list-two-lines-avatar</span> for lists that need have an image and two lines of content: title and subtitle. Use <span class=\"documentation-code\">ntx-list-two-multilines-icon</span> for lists that represent sections, where the elements to show are its image, title and an indeterminate number of links to the different subsections. Use <span class=\"documentation-code\">ntx-list-one-line-options</span> for lists that have a loading process and options. Use <span class=\"documentation-code\">ntx-list-one-line-navigable</span> for lists that are clicable and navigable. You can use <span class=\"documentation-code\">ntx-list-horizontal</span> for lists that have title and subtitle displayed in a horizontal way.  And use <span class=\"documentation-code\">ntx-list-sidemenu</span> for lists that allows us to navigate between different views of a side menu.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      The content of each list is being shown in its own .ts file, feel free to move this content to a external json file.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List5 component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Possibility of adding any content in the secondary label</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list5/list5.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            ux-components/src/lib/ntx-lists/list5/list5.component.scss\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n    </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Two lines list with avatar component v4.4.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Add a class to truncate the title if necessary.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-lines-avatar/list-two-lines-avatar.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n      </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List one line with avatar v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Enclose the image in a parent container with class <span class=\"documentation-code\">list-one-line-avatar__item--image</span> that gives the size of the image.</li>\r\n      <li>The <span class=\"documentation-code\">matListAvatar</span> attribute is added to the parent container instead of the image.</li>\r\n      <li>The class <span class=\"documentation-code\">list-one-line-avatar__item--image</span> is removed from the image and the class <span class=\"documentation-code\">utils--vertical-align</span> is added.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line-avatar/list-one-line-avatar.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line-avatar/list-one-line-avatar.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List two lines with avatar v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Enclose the image in a parent container with class <span class=\"documentation-code\">list-two-lines__item--image</span> that gives the size of the image.</li>\r\n      <li>The <span class=\"documentation-code\">matListAvatar</span> attribute is added to the parent container instead of the image.</li>\r\n      <li>The class <span class=\"documentation-code\">utils--vertical-align</span> is added to the image.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-line-avatar/list-two-lines-avatar.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-line-avatar/list-two-lines-avatar.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code4 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List one line with options or data v4.1.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Attribute added<span class=\"documentation-code\">level</span> that hides options icon and show number value.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line-options/list-one-line-options.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code5 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line-options/list-one-line-options.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code6 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List two lines with avatar v4.2.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>A link has been added in the paragrap with class <span class=\"documentation-code\">list-two-lines__item--subtitle</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-line-avatar/list-two-lines-avatar.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code7 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-line-avatar/list-two-lines-avatar.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code8 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List1 new component v4.2.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added new list componentized <span class=\"documentation-code\">ntx-list1</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list1/list1.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code9 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list1/list1.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code10 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list1/list1.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code11 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List one line component v4.2.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added new list componentized <span class=\"documentation-code\">ntx-list-one-line</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line/list-one-line.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code12 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line/list-one-line.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code13 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-one-line/list-one-line.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code14 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List2 new component v4.3.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added new list componentized <span class=\"documentation-code\">ntx-list2</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list2/list2.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code15 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list2/list2.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code16 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list2/list2.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code17 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List multilines with icon v4.3.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Modified component <span class=\"documentation-code\">ntx-list-multilines-icon</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-multilines-icon\\list-multilines-icon.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code18 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-multilines-icon\\list-multilines-icon.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code19 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-multilines-icon\\list-multilines-icon.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code20 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List3 new component v4.3.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added new list componentized <span class=\"documentation-code\">ntx-list3</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list3/list3.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code21 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list3/list3.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code22 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list3/list3.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code23 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List4 new component v4.3.1</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added new list componentized <span class=\"documentation-code\">ntx-list4</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list4/list4.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code24 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list4/list4.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code25 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list4/list4.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code26 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List5 new component v4.3.1</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added new list componentized <span class=\"documentation-code\">ntx-list5</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list5/list5.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code27 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list5/list5.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code28 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list5/list5.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code29 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List2 component v4.3.1</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Modified component <span class=\"documentation-code\">ntx-list2</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list2/list2.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code30 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list2/list2.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code31 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list2/list2.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code32 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List3 component v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Modified component's style <span class=\"documentation-code\">ntx-list3</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list3/list3.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code33 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Two lines list with avatar component v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added an icon next to the title.</li>\r\n      <li>Modified component <span class=\"documentation-code\">ntx-list-two-lines-avatar</span>.</li>\r\n      <li>Add an optional line of text.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-lines-avatar/list-two-lines-avatar.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code34 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-lines-avatar/list-two-lines-avatar.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code35 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-two-lines-avatar/list-two-lines-avatar.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code36 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List5 v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Modified component <span class=\"documentation-code\">ntx-list5</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list5/list5.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list5/list5.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list5/list5.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List6 v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>New component added<span class=\"documentation-code\">ntx-list6</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list6/list6.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list6/list6.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list6/list6.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List7 v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>New component added<span class=\"documentation-code\">ntx-list7</span>.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list7/list7.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list7/list7.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list7/list7.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">List sidemenu v4.3.3</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>We modified :active styles in <span class=\"documentation-code\">ntx-list-sidemenu</span>.</li>\r\n      <li>The icon is an optional element of the list</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-lists/list-sidemenu/list-sidemenu.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/lists/documentation/lists-doc.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/lists/documentation/lists-doc.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2xpc3RzL2RvY3VtZW50YXRpb24vbGlzdHMtZG9jLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/lists/documentation/lists-doc.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/lists/documentation/lists-doc.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListsDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsDocComponent", function() { return ListsDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListsDocComponent = /** @class */ (function () {
    function ListsDocComponent() {
        this.code1 = "\n    <mat-list-item *ngFor=\"let text of texts\" class=\"list-one-line-avatar__item\">\n      <div matListAvatar class=\"list-one-line-avatar__item--image\">\n        <img class=\"utils--vertical-align\" src=\"assets/images/perfil.jpg\" alt=\"user image\">\n      </div>\n      <p mat-line class=\"list-one-line-avatar__item--title\">{{text.title}}</p>\n    </mat-list-item>\n  ";
        this.code2 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list-one-line-avatar\";\n\n    .#{$block}{\n      &.mat-list-base{\n        padding: 0;\n        .#{$block}__item{\n          height: 48px;\n          .mat-list-item-content{\n            padding: 0;\n            .#{$block}__item--image{\n              border-radius: 50%;\n              height: 32px;\n              overflow: hidden;\n              position: relative;\n              width: 32px;\n              img{\n                height: 100%;\n              }\n            }\n            .#{$block}__item--title{\n              color: $color-grey-700;\n              font-family: Lato;\n              font-size: $font-size-14;\n            }\n          }\n        }\n      }\n    }\n  ";
        this.code3 = "\n    <mat-list-item *ngFor=\"let text of texts\" class=\"list-two-lines__item\">\n      <div matListAvatar class=\"list-two-lines__item--image\">\n        <img class=\"utils--vertical-align\" src=\"assets/images/perfil.jpg\" alt=\"user image\">\n      </div>\n      <h4 mat-line class=\"list-two-lines__item--title\">{{text.title}}</h4>\n      <p mat-line class=\"list-two-lines__item--subtitle\"> {{text.subtitle}} </p>\n    </mat-list-item>\n  ";
        this.code4 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list-two-lines\";\n\n    .#{$block}{\n      padding: 0;\n      .#{$block}__item{\n        .#{$block}__item--image{\n          border-radius: 50%;\n          height: 40px;\n          overflow: hidden;\n          position: relative;\n          width: 40px;\n          img{\n            height: 100%;\n          }\n        }\n        .#{$block}__item--title{\n          color: $color-grey-800;\n          font-family: LatoBold;\n          font-size: 16px;\n        }\n        .#{$block}__item--subtitle{\n          color: $color-grey-600;\n          font-family: Lato;\n        }\n      }\n    }\n  ";
        this.code5 = "\n    <mat-list class=\"list-one-line-options\">\n    <mat-list-item *ngFor=\"let text of texts\" class=\"list-one-line-options__item\">\n      <div matListAvatar class=\"list-one-line-options__item--image\">\n        <span class=\"list-one-line-options__item--initial\">L</span>\n      </div>\n      <div class=\"list-one-line-options__item--content\">\n        <h4 mat-line class=\"list-one-line-options__item--title\">{{text.title}}</h4>\n        <ntx-progress-bar [color]=\"'primary'\" [value]=\"'52'\"></ntx-progress-bar>\n        <div *ngIf=\"level; else optionsBlock\" class=\"list-one-line-options__item--level\">\n          <span>{{level}}</span>\n        </div>\n        <ng-template #optionsBlock>\n          <ntx-menu-options></ntx-menu-options>\n        </ng-template>\n      </div>\n    </mat-list-item>\n  </mat-list>";
        this.code6 = "\n  import { Component, OnInit, Input } from '@angular/core';\n  import { ViewEncapsulation } from '@angular/core';\n\n  export interface Section {\n    title: string;\n  }\n\n  @Component({\n    selector: 'ntx-list-one-line-options',\n    templateUrl: './list-one-line-options.component.html',\n    styleUrls: ['./list-one-line-options.component.scss'],\n    encapsulation: ViewEncapsulation.None\n  })\n\n  export class ListOneLineOptionsComponent implements OnInit {\n\n    @Input() level: string;\n    constructor() { }\n\n    texts: Section[] = [\n      {\n        title: 'List name with a very large name and three dots'\n      }\n    ];\n\n    ngOnInit() { }\n  }";
        this.code7 = "\n  <p mat-line class=\"list-two-lines__item--subtitle\">\n    {{text.subtitle}}\n    <a matLine *ngIf=\"showLink\" href=\"...\" class=\"list-two-lines__item--subtitle-link utils--margin-left-12\">{{text.link}}</a>\n  </p>\n  ";
        this.code8 = "\n  .#{$block}__item--subtitle{\n    color: $color-grey-600;\n    display: flex;\n    font-family: Lato;\n  }\n  ";
        this.code9 = "\n    <div class=\"list1\">\n    <div class=\"list1__item\" *ngFor=\"let item of data\">\n      <div class=\"list1__item--badge\">\n        <img\n          *ngIf=\"item.avatar; else elseBlock\"\n          src=\"{{item.avatar}}\"\n          alt=\"{{item.label + '&#32;image'}}\">\n        <ng-template #elseBlock>\n          <span\n            [style.background-color]=\"item.color\"\n            class=\"list1__item--alias utils--align-center-text\">{{item.label | slice:0:1}}</span>\n        </ng-template>\n      </div>\n      <div class=\"list1__item--wrapper\">\n        <div class=\"text utils--margin-right-24 utils--truncate\">\n          <span class=\"utils--text-16 utils--text-grey-800\" matTooltip=\"{{item.label}}\">{{item.label}}</span>\n        </div>\n        <ntx-progress-bar-level\n          value=\"{{item.progress.value}}\"\n          class=\"progress-bar\"></ntx-progress-bar-level>\n        <span class=\"level utils--text-16 utils--align-center-text utils--text-grey-800\">{{item.progress.level}}</span>\n        <ntx-menu-options class=\"options\"></ntx-menu-options>\n      </div>\n    </div>\n</div>\n  ";
        this.code10 = "\n    import { Component, OnInit, Input } from '@angular/core';\n\n    export interface Item {\n    label: string;\n    avatar: string;\n    color: string;\n    progress: {\n      value: number,\n      level: string\n    };\n    }\n\n    @Component({\n    selector: 'ntx-list1',\n    templateUrl: './list1.component.html',\n    styleUrls: ['./list1.component.scss'],\n    })\n\n    export class List1Component implements OnInit {\n\n    @Input() data: Item[];\n\n    constructor() { }\n\n    ngOnInit() { }\n\n    }\n  ";
        this.code11 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list1\";\n\n    .#{$block} {\n    > * {\n      box-sizing: border-box;\n    }\n\n    font-family: Lato;\n\n    .#{$block}__item {\n      display: flex;\n      height: 68px;\n      &--badge {\n        align-self: center;\n        img,span {\n          width: 36px;\n          height: 36px;\n          margin-right: 24px;\n        }\n        img {\n          object-fit: cover;\n        }\n        span {\n          display: block;\n          line-height: 36px;\n          font-size: 23px;\n          color: rgba(255,255,255,0.4);\n        }\n      }\n      &--wrapper {\n        flex-basis: calc(100% - 60px);\n        max-width: calc(100% - 60px);\n        display: flex;\n        align-items: center;\n        .text {\n          flex-basis: 60%;\n        }\n        .progress-bar {\n          flex-basis: calc(40% - 48px - 48px);\n        }\n        .level,.options {\n          flex-basis: 48px;\n        }\n      }\n      &:not(:last-child) .#{$block}__item--wrapper{\n        border-bottom: 1px solid $color-grey-200;\n      }\n    }\n    }\n  ";
        this.code12 = "\n    <div class=\"list-one-line\">\n    <div class=\"list-one-line__item\" *ngFor=\"let item of data\">\n      <img\n        *ngIf=\"item.avatar; else elseBlock\"\n        src=\"{{item.avatar}}\"\n        alt=\"{{item.label + '&#32;image'}}\">\n      <ng-template #elseBlock>\n        <span\n          [style.background-color]=\"item.color\"\n          class=\"list-one-line__item--alias\">{{item.label | slice:0:1}}</span>\n      </ng-template>\n      <div class=\"list-one-line__item--text utils--text-grey-800 utils--truncate\">\n        <span matTooltip=\"{{item.label}}\">{{item.label}}</span>\n      </div>\n    </div>\n    </div>\n  ";
        this.code13 = "\n    import { Component, OnInit, Input } from '@angular/core';\n\n    export interface Item {\n    label: string;\n    avatar: string;\n    color: string;\n    }\n\n    @Component({\n    selector: 'ntx-list-one-line',\n    templateUrl: './list-one-line.component.html',\n    styleUrls: ['./list-one-line.component.scss'],\n    })\n\n    export class ListOneLineComponent implements OnInit {\n\n    @Input() data: Item[];\n\n    constructor() { }\n\n    ngOnInit() { }\n\n    }\n  ";
        this.code14 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list-one-line\";\n\n    .#{$block} {\n    font-family: Lato;\n    &__item {\n      display: flex;\n      align-items: center;\n      height: 68px;\n      img, span {\n        width: 36px;\n        height: 36px;\n        margin-right: 24px;\n      }\n      img {\n        object-fit: cover;\n      }\n      &--alias {\n        line-height: 36px;\n        text-align: center;\n        font-size: 23px;\n        color: rgba(255,255,255,0.4);\n      }\n      &--text {\n        flex-basis: calc(100% - 60px);\n        max-width: calc(100% - 60px);\n        font-size: 16px;\n        height: 100%;\n        line-height: 68px;\n      }\n      &:not(:last-child) .#{$block}__item--text{\n        border-bottom: 1px solid $color-grey-200;\n      }\n    }\n    }\n  ";
        this.code15 = "\n    <div class=\"list2\">\n      <div class=\"list2__item\" *ngFor=\"let item of data\">\n        <div class=\"list2__item--checkbox utils--margin-right-12\">\n          <ntx-form-checkbox [color]=\"'primary'\" [checked]=\"item.checked\" [hidden]=\"'true'\"></ntx-form-checkbox>\n        </div>\n        <div class=\"list2__item--badge\">\n          <img\n            *ngIf=\"item.avatar; else elseBlock\"\n            src=\"{{item.avatar}}\"\n            alt=\"{{item.label + '&#32;image'}}\">\n          <ng-template #elseBlock>\n            <span\n              [style.background-color]=\"item.color\"\n              class=\"list2__item--alias utils--align-center-text\">{{item.label | slice:0:1}}</span>\n          </ng-template>\n        </div>\n        <div class=\"list2__item--wrapper\">\n          <div class=\"text utils--margin-right-24 utils--truncate\">\n            <span class=\"utils--text-16 utils--text-grey-800\" matTooltip=\"{{item.label}}\">{{item.label}}</span>\n          </div>\n          <div class=\"progress-bar__container utils--margin-right-24\">\n            <ntx-progress-bar-level\n              value=\"{{item.progress.value}}\"\n              requiredValue=\"{{item.progress.requiredValue}}\"></ntx-progress-bar-level>\n            <p *ngIf=\"item.progress.edited\"\n                class=\"progress-bar__label utils--margin-top-4 utils--margin-bottom-0 utils--text-12\">[edited by you]</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  ";
        this.code16 = "\n    import { Component, OnInit, Input } from '@angular/core';\n\n    export interface Item {\n      label: string;\n      avatar: string;\n      color: string;\n      progress: {\n        value: number,\n        requiredValue: number,\n        edited: boolean\n      };\n      checked: boolean\n    }\n\n    @Component({\n      selector: 'ntx-list2',\n      templateUrl: './list2.component.html',\n      styleUrls: ['./list2.component.scss'],\n    })\n\n    export class List2Component implements OnInit {\n\n      @Input() data: Item[];\n\n      constructor() { }\n\n      ngOnInit() { }\n\n    }\n  ";
        this.code17 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list2\";\n\n    .#{$block} {\n      > * {\n        box-sizing: border-box;\n      }\n\n      font-family: Lato;\n\n      .#{$block}__item {\n        display: flex;\n        height: 68px;\n        &--checkbox {\n          display: flex;\n          align-items: center;\n        }\n        &--badge {\n          align-self: center;\n          img,span {\n            width: 36px;\n            height: 36px;\n            margin-right: 24px;\n          }\n          img {\n            object-fit: cover;\n          }\n          span {\n            display: block;\n            line-height: 36px;\n            font-size: 23px;\n            color: rgba(255,255,255,0.4);\n          }\n        }\n        &--wrapper {\n          flex-basis: calc(100% - 60px);\n          max-width: calc(100% - 60px);\n          display: flex;\n          align-items: center;\n          .text {\n            flex-basis: 60%;\n          }\n          .progress-bar__container {\n            flex-basis: 40%;\n          }\n          .progress-bar__label {\n            float: right;\n            font-family: LatoSemibold;\n          }\n        }\n        &:not(:last-child) .#{$block}__item--wrapper{\n          border-bottom: 1px solid $color-grey-200;\n        }\n      }\n    }\n  ";
        this.code18 = "\n    <mat-list class=\"list-multiline-lines\">\n      <mat-list-item *ngFor=\"let section of data\" class=\"list-multiline-lines__item\">\n        <mat-icon matListIcon class=\"icon-netex {{section.icon}} list-multiline-lines__item--icon\"></mat-icon>\n        <h4 mat-line class=\"list-multiline-lines__item--title\">{{section.title}}</h4>\n        <a *ngFor=\"let link of section.links\" matLine (click)=\"onClickEvent(link.link)\" class=\"list-multiline-lines__item--subtitle-link\">{{link.title}}</a>\n      </mat-list-item>\n    </mat-list>\n  ";
        this.code19 = "\n    import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';\n    import { ViewEncapsulation } from '@angular/core';\n\n    export interface Section {\n      title: string;\n      icon: string;\n      links?: SectionLink[];\n    }\n\n    export interface SectionLink {\n      title: string;\n      link: any;\n    }\n\n    @Component({\n      selector: 'ntx-list-multilines-icon',\n      templateUrl: './list-multilines-icon.component.html',\n      styleUrls: ['./list-multilines-icon.component.scss'],\n      encapsulation: ViewEncapsulation.None\n    })\n    export class ListMultilinesIconComponent implements OnInit {\n\n      @Input() data: Section[];\n      @Output() clickEvent = new EventEmitter();\n\n      constructor() { }\n\n      ngOnInit() {}\n\n      public onClickEvent(link: any) {\n        console.log('Click: list-multilines-icon component: ' + link);\n        this.clickEvent.emit(link);\n      }\n\n    }\n  ";
        this.code20 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list-multiline-lines\";\n\n    .#{$block}{\n      padding: 0;\n      .#{$block}__item{\n        margin-bottom: 60px;\n        .mat-list-item-content {\n          display: flex;\n          align-items: start;\n          .#{$block}__item--icon{\n            color: $color-grey-600;\n            font-size: 36px;\n            height: 36px;\n            padding: 0;\n            width: 36px;\n          }\n          .#{$block}__item--title{\n            color: $color-grey-800;\n            font-family: LatoBold;\n            font-size: 18px;\n            margin-bottom: 12px;\n            text-transform: uppercase;\n          }\n          .#{$block}__item--subtitle-link{\n            color: $color-primary;\n            font-size: 16px;\n            margin-bottom: 8px;\n            text-decoration: none;\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  ";
        this.code21 = "\n    <mat-list class=\"list3\">\n      <mat-list-item *ngFor=\"let item of data\" class=\"list3__item\">\n        <mat-icon class=\"icon-netex {{item.icon}} list3__item--icon\"></mat-icon>\n        <p class=\"list3__item--title\">{{item.label}}</p>\n      </mat-list-item>\n    </mat-list>\n  ";
        this.code22 = "\n    import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';\n\n    export interface Item {\n      label: string;\n      icon: string;\n    }\n\n    @Component({\n      selector: 'ntx-list3',\n      templateUrl: './list3.component.html',\n      styleUrls: ['./list3.component.scss'],\n      encapsulation: ViewEncapsulation.None\n    })\n\n    export class List3Component implements OnInit {\n\n    @Input() data: Item[];\n\n    constructor() { }\n\n    ngOnInit() { }\n    }\n\n  ";
        this.code23 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list3\";\n\n    .#{$block}{\n      padding: 0;\n      .#{$block}__item{\n        height: 42px;\n        .mat-list-item-content{\n          padding: 0;\n          .#{$block}__item--icon{\n            color: $color-grey-600;\n            margin-right: 12px;\n          }\n          .#{$block}__item--title{\n            color: $color-grey-800;\n            font-family: Lato;\n            font-size: 16px;\n          }\n        }\n      }\n    }\n\n  ";
        this.code24 = "\n    <div class=\"list4\">\n    <div\n      class=\"list4__title utils--panel-section-title utils--margin-bottom-16 utils--text-grey-600\">\n      <span matTooltip=\"{{listTitle}}\">{{listTitle}}</span>\n      <span matTooltip=\"{{checkedListItemsCounter}}\">{{checkedListItemsCounter}}</span>\n    </div>\n    <a\n      [routerLink]=\"actionRouterLink ? actionRouterLink : [] \"\n      (click)=\"onActionClick()\"\n      class=\"list4__action utils--margin-bottom-16 utils--text-primary\">\n        <mat-icon class=\"icon-netex {{actionIcon}} utils--margin-right-12\"></mat-icon>\n        <span\n          matTooltip=\"{{actionLabel}}\"\n          class=\"utils--text-14\">{{actionLabel}}</span>\n    </a>\n    <div class=\"list4__item\" *ngFor=\"let item of items\">\n      <mat-checkbox\n          [checked] = \"item.checked\"\n          (change)=\"onChangeCheckbox($event, item)\"\n          class=\"list4__item--checkbox utils--margin-right-24\">\n        </mat-checkbox>\n      <div class=\"list4__item--wrapper utils--flex-center\">\n        <div\n          [ngClass] = \"{ highlight: !item.checked }\"\n          class=\"text utils--truncate utils--margin-right-auto\">\n          <span class=\"utils--text-14 utils--text-grey-800\" matTooltip=\"{{item.label}}\">{{item.label}}</span>\n        </div>\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"menuOptions\"\n          class=\"options utils--margin-right-8 utils--text-grey-700\">\n            <mat-icon class=\"icon-netex icon-more-options\"></mat-icon>\n        </button>\n        <mat-menu\n          #menuOptions=\"matMenu\"\n          [overlapTrigger]=\"false\">\n          <button\n            mat-menu-item\n            (click)=\"item.click()\"\n            *ngFor=\"let item of item.actions\">\n              <mat-icon class=\"mat-icon icon-netex {{item.icon}}\"></mat-icon>\n              <span class=\"utils--text-grey-700\">{{item.title}}</span>\n          </button>\n        </mat-menu>\n      </div>\n    </div>\n  </div>\n  ";
        this.code25 = "\n    import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';\n    import { MatCheckboxChange } from '@angular/material';\n\n    export class IActionsMenuLinkComponent {\n    icon?: string;\n    title: string;\n    click: Function;\n    }\n\n    export interface Item {\n    label: string;\n    checked: boolean;\n    actions: IActionsMenuLinkComponent[];\n    }\n\n    @Component({\n    selector: 'ntx-list4',\n    templateUrl: './list4.component.html',\n    styleUrls: ['./list4.component.scss'],\n    encapsulation: ViewEncapsulation.None\n    })\n    export class List4Component implements OnInit {\n\n    checkedListItemsCounter: string;\n\n    @Input() listTitle: string;\n    @Input() actionLabel: string;\n    @Input() actionIcon: string;\n    @Input() actionRouterLink: string;\n    @Input() items: Item[];\n\n    @Output() checkboxChange = new EventEmitter<MatCheckboxChange>();\n    @Output() labelClick = new EventEmitter();\n    @Output() actionClick = new EventEmitter();\n\n    constructor() { }\n\n    ngOnInit() {\n      this.checkedListItemsCounter = this.updateCheckedListItemsCounter(this.items);\n    }\n\n    onClickLabel() {\n      this.labelClick.emit();\n    }\n\n    onActionClick() {\n      this.actionClick.emit();\n    }\n\n    onChangeCheckbox(event: MatCheckboxChange, item: Item) {\n      item.checked = event.checked;\n      this.checkedListItemsCounter = this.updateCheckedListItemsCounter(this.items);\n      this.checkboxChange.emit(event);\n    }\n\n    updateCheckedListItemsCounter(items: Item[]): string {\n      return (items.filter((element) => element.checked)).length + '/' + this.items.length;\n    }\n\n    }\n  ";
        this.code26 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list4\";\n\n    .#{$block} {\n      > * {\n        box-sizing: border-box;\n      }\n\n      font-family: Lato;\n\n      .#{$block}__title {\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .#{$block}__action {\n        display: inline-flex;\n        align-items: center;\n        cursor: pointer;\n        &:link, &:visited, &:active {\n          color: $color-primary;\n          text-decoration: none;\n        }\n      }\n\n      .#{$block}__item {\n        display: flex;\n        height: 48px;\n        &--checkbox {\n          display: flex;\n          .mat-checkbox-inner-container {\n            width: 24px;\n            height: 24px;\n          }\n\n          .mat-checkbox-background, .mat-checkbox-frame {\n            border-radius: 70% !important;\n          }\n\n          &.mat-checkbox.mat-accent .mat-checkbox-background {\n            background-color: $color-grey-200 !important;\n          }\n\n          .mat-checkbox-frame {\n            border: none !important;\n          }\n\n          &.mat-checkbox-checked.mat-accent .mat-checkbox-background {\n            background-color: $color-success !important;\n          }\n        }\n        &--badge {\n          align-self: center;\n          span {\n            width: 32px;\n            height: 32px;\n            border-radius: 50%;\n            display: block;\n            line-height: 32px;\n          }\n        }\n        &--wrapper {\n          flex-basis: calc(100% - 48px);\n          max-width: calc(100% - 48px);\n          min-width: 0;\n          .text {\n            cursor: pointer;\n            &.highlight {\n              font-weight: bold;\n            }\n\n          }\n          .options {\n            &.mat-icon-button{\n              height: 48px;\n              line-height: 48px;\n              width: 48px;\n              &:hover{\n                background-color: $icon-button-hover;\n              }\n              &[disabled]{\n                cursor: not-allowed;\n                opacity: 0.4;\n                &:hover{\n                    background-color: transparent;\n                }\n              }\n            }\n          }\n\n        }\n      }\n    }\n  ";
        this.code27 = "\n  <div class=\"list5\">\n  <div class=\"list5__item\" *ngFor=\"let item of items\">\n    <div\n      *ngIf=\"showBullet\"\n      class=\"list5__item--bullet utils--flex-center utils--margin-right-16\">\n        <span\n          *ngIf =\"bulletType === 'badge'\"\n          [ngStyle] = \"{'background-color': badgeColor }\"\n          class=\"utils--align-center-text utils--text-white utils--text-16\">{{item.labelPrincipal | slice:0:1}}</span>\n        <mat-icon\n          *ngIf = \"bulletType === 'icon'\"\n          [ngStyle] = \"{'color': iconColor }\"\n          class=\"icon-netex {{ iconName }} utils--text-28\"></mat-icon>\n    </div>\n    <div\n      [ngClass] = \"{'divider': showDivider }\"\n      class=\"list5__item--wrapper utils--text-16 utils--text-grey-800\">\n      <div class=\"label-principal\">\n        <a\n          *ngIf=\"item.labelRouterLink; else elseBlock\"\n          [routerLink] = \"item.labelRouterLink\"\n          (click) = \"onLabelClick()\"\n          class=\"link utils--text-primary\">\n            <span matTooltip = \"{{item.labelPrincipal}}\" class=\"\">{{item.labelPrincipal}}</span>\n        </a>\n        <ng-template #elseBlock>\n          <span class=\"label\">{{item.labelPrincipal}}</span>\n        </ng-template>\n      </div>\n      <div\n        *ngIf=\"item.labelSecondary\"\n        class=\"label-secondary utils--margin-left-16\">{{item.labelSecondary}}</div>\n    </div>\n  </div>\n</div>\n  ";
        this.code28 = "\n  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';\n  import { coerceBooleanProperty } from '@angular/cdk/coercion';\n\n  export interface Item {\n    labelPrincipal: string;\n    labelSecondary: string;\n    labelRouterLink: string;\n  }\n\n  @Component({\n    selector: 'ntx-list5',\n    templateUrl: './list5.component.html',\n    styleUrls: ['./list5.component.scss'],\n  })\n  export class List5Component implements OnInit {\n\n    @Input() items: Item[];\n    @Input() bulletType: 'badge' | 'icon';\n    @Input() badgeColor: string;\n    @Input() iconColor: string;\n    @Input() iconName: string;\n\n    private _showBullet: boolean;\n    get showBullet(): boolean {\n      return this._showBullet;\n    }\n    @Input()\n    set showBullet(value: boolean) {\n      this._showBullet = coerceBooleanProperty(value);\n    }\n\n    private _showDivider: boolean;\n    get showDivider(): boolean {\n      return this._showDivider;\n    }\n    @Input()\n    set showDivider(value: boolean) {\n      this._showDivider = coerceBooleanProperty(value);\n    }\n\n    @Output() labelClick = new EventEmitter();\n\n    constructor() { }\n\n    ngOnInit() { }\n\n    onLabelClick() {\n      this.labelClick.emit();\n    }\n\n  }\n  ";
        this.code29 = "\n  @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n  $block: \"list5\";\n\n  .#{$block} {\n    cursor: default;\n    > * {\n      box-sizing: border-box;\n    }\n\n    font-family: Lato;\n\n    .#{$block}__item {\n      display: flex;\n      height: 48px;\n      margin: 8px;\n      &--bullet {\n        flex: 0 0 40px;\n        height: 40px;\n        span {\n          display: block;\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          line-height: 40px;\n        }\n      }\n      &--wrapper {\n        display: flex;\n        flex: 1;\n        min-width: 0;\n        &:not(:last-child) {\n          &.divider {\n            border-bottom: 1px solid $color-grey-200;\n          }\n        }\n        .label-principal {\n          flex: 1;\n          display: flex;\n          align-items: center;\n          min-width: 0;\n          height: 40px;\n          .label {\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            span {\n              text-overflow: ellipsis;\n              overflow: hidden;\n              white-space: nowrap;\n            }\n          }\n          .link {\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            &:link, &:visited, &:active {\n              color: $color-primary;\n              text-decoration: none;\n            }\n          }\n        }\n        .label-secondary {\n          line-height: 40px;\n        }\n      }\n      &:not(:last-child) .#{$block}__item--wrapper.divider{\n        border-bottom: 1px solid $color-grey-200;\n      }\n    }\n  }\n  ";
        this.code30 = "\n    <div class=\"list2\">\n    <div class=\"list2__item\" *ngFor=\"let item of data\">\n      <div class=\"list2__item--checkbox utils--margin-right-12\">\n        <ntx-form-checkbox [color]=\"'primary'\" [checked]=\"item.checked\" [hidden]=\"'true'\"></ntx-form-checkbox>\n      </div>\n      <div\n        *ngIf=\"showGenericBullet; else badgeBlock\"\n        [ngStyle] = \"{'color': bulletIconColor }\"\n        class=\"utils--margin-right-24 utils--flex-center\">\n        <mat-icon\n            class=\"icon-netex {{ bulletIconName }} utils--text-28\"></mat-icon>\n      </div>\n      <ng-template #badgeBlock>\n        <div class=\"list2__item--badge\">\n          <img\n            *ngIf=\"item.avatar; else placeholderBlock\"\n            src=\"{{item.avatar}}\"\n            alt=\"{{item.label + '&#32;image'}}\">\n          <ng-template #placeholderBlock>\n            <span\n              [style.background-color]=\"item.color\"\n              class=\"list2__item--alias utils--align-center-text\">{{item.label | slice:0:1}}</span>\n          </ng-template>\n        </div>\n      </ng-template>\n      <div class=\"list2__item--wrapper\">\n        <div class=\"text utils--margin-right-24 utils--truncate\">\n          <span class=\"utils--text-16 utils--text-grey-800\" matTooltip=\"{{item.label}}\">{{item.label}}</span>\n        </div>\n        <div class=\"progress-bar__container utils--margin-right-24\">\n          <ntx-progress-bar-level\n            value=\"{{item.progress.value}}\"\n            requiredValue=\"{{item.progress.requiredValue}}\"></ntx-progress-bar-level>\n          <p *ngIf=\"item.progress.edited\"\n              class=\"progress-bar__label utils--margin-top-4 utils--margin-bottom-0 utils--text-12\">[edited by you]</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
        this.code31 = "\n    import { Component, OnInit, Input } from '@angular/core';\n    import { coerceBooleanProperty } from '@angular/cdk/coercion';\n\n    export interface Item {\n      label: string;\n      avatar: string;\n      color: string;\n      progress: {\n        value: number,\n        requiredValue: number,\n        edited: boolean\n      };\n      checked: boolean\n    }\n\n    @Component({\n      selector: 'ntx-list2',\n      templateUrl: './list2.component.html',\n      styleUrls: ['./list2.component.scss'],\n    })\n\n    export class List2Component implements OnInit {\n\n      @Input() data: Item[];\n      @Input() bulletIconName: string;\n      @Input() bulletIconColor: string;\n      private _showGenericBullet: boolean;\n      get showGenericBullet(): boolean {\n        return this._showGenericBullet;\n      }\n      @Input()\n      set showGenericBullet(value: boolean) {\n        this._showGenericBullet = coerceBooleanProperty(value);\n      }\n\n      constructor() { }\n\n      ngOnInit() { }\n\n    }\n  ";
        this.code32 = "\n    @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n    $block: \"list2\";\n\n    .#{$block} {\n    > * {\n      box-sizing: border-box;\n    }\n\n    font-family: Lato;\n\n    .#{$block}__item {\n      display: flex;\n      height: 68px;\n      &--checkbox {\n        display: flex;\n        align-items: center;\n      }\n      &--badge {\n        align-self: center;\n        img,span {\n          width: 36px;\n          height: 36px;\n          margin-right: 24px;\n        }\n        img {\n          object-fit: cover;\n        }\n        span {\n          display: block;\n          line-height: 36px;\n          font-size: 23px;\n          color: rgba(255,255,255,0.4);\n        }\n      }\n      &--wrapper {\n        flex-basis: calc(100% - 104px);\n        max-width: calc(100% - 104px);\n        display: flex;\n        align-items: center;\n        .text {\n          flex-basis: 60%;\n        }\n        .progress-bar__container {\n          flex-basis: 40%;\n        }\n        .progress-bar__label {\n          float: right;\n          font-family: LatoSemibold;\n        }\n      }\n      &:not(:last-child) .#{$block}__item--wrapper{\n        border-bottom: 1px solid $color-grey-200;\n      }\n    }\n    }\n  ";
        this.code33 = "\n  @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n  $block: \"list3\";\n\n  .#{$block}{\n    padding: 0;\n    .#{$block}__item{\n      height: 42px;\n      .mat-list-item-content{\n        padding: 0;\n        .#{$block}__item--icon{\n          color: $color-grey-600;\n          margin-right: 12px;\n        }\n        .#{$block}__item--title{\n          color: $color-grey-800;\n          font-family: Lato;\n          font-size: 16px;\n          margin: 0;\n        }\n      }\n    }\n  }\n  ";
        this.code34 = "\n  <mat-list class=\"list-two-lines\">\n  <mat-list-item *ngFor=\"let text of data.texts\" class=\"list-two-lines__item\">\n    <div matListAvatar class=\"list-two-lines__item--image\">\n      <img class=\"utils--vertical-align\" src=\"{{text.image}}\" alt=\"user image\">\n    </div>\n    <div mat-line class=\"list-two-lines__flex\">\n      <h4 class=\"list-two-lines__item--title\">{{text.title}}</h4>\n      <mat-icon *ngIf=\"text.showIcon\" class=\"icon-netex {{text.icon}} {{text.iconColor}} utils--margin-left-12\"></mat-icon>\n    </div>\n    <p mat-line class=\"list-two-lines__item--subtitle\">\n      {{text.subtitle}}\n      <a matLine *ngIf=\"text.showLink\" href=\"...\" class=\"list-two-lines__item--subtitle-link utils--margin-left-12\">{{text.link}}</a>\n    </p>\n  </mat-list-item>\n</mat-list>\n  ";
        this.code35 = "\n  import { Component, OnInit } from '@angular/core';\n  import { Input } from '@angular/core';\n\n  @Component({\n    selector: 'ntx-list-two-lines-avatar',\n    templateUrl: './list-two-lines-avatar.component.html',\n    styleUrls: ['./list-two-lines-avatar.component.scss']\n  })\n\n  export class ListTwoLinesAvatarComponent implements OnInit {\n\n    @Input() data: any;\n    @Input() showLink: boolean;\n    @Input() showIcon: boolean;\n\n    constructor() { }\n\n    ngOnInit() {\n    }\n\n  }\n  ";
        this.code36 = "\n  @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n  $block: \"list-two-lines\";\n\n  .#{$block}{\n    padding: 0;\n    .#{$block}__item{\n      .#{$block}__item--image{\n        border-radius: 50%;\n        height: 40px;\n        overflow: hidden;\n        position: relative;\n        width: 40px;\n        img{\n          height: 100%;\n        }\n      }\n      .#{$block}__flex{\n        align-items: center;\n        display: flex;\n      }\n      .#{$block}__item--title{\n        color: $color-grey-800;\n        font-family: LatoBold;\n        font-size: 16px;\n      }\n      .#{$block}__item--subtitle{\n        color: $color-grey-600;\n        display: flex;\n        font-family: Lato;\n      }\n    }\n  }\n  ";
    }
    ListsDocComponent.prototype.ngOnInit = function () {
    };
    ListsDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lists-doc',
            template: __webpack_require__(/*! ./lists-doc.component.html */ "./src/app/ui-pages/lists/documentation/lists-doc.component.html"),
            styles: [__webpack_require__(/*! ./lists-doc.component.scss */ "./src/app/ui-pages/lists/documentation/lists-doc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListsDocComponent);
    return ListsDocComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/lists/examples/lists-examples.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/lists/examples/lists-examples.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List sidemenu' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-sidemenu>' }}\">\r\n      <ntx-list-sidemenu [user] =\"user\"></ntx-list-sidemenu>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List 1' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list1>' }}\">\r\n        <ntx-list1 [data]=list1></ntx-list1>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST 2 (variante 1)'  }}\"\r\n      subtitle=\"{{ '<ntx-list2 showGenericBullet bulletIconName=\\'icon-badge\\' bulletIconColor=\\'#9A9DEB\\' [data]=data></ntx-list2>' }}\">\r\n        <ntx-list2 showGenericBullet bulletIconName=\"icon-badge\" bulletIconColor=\"#9A9DEB\" [data]=list2_2></ntx-list2>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST 2 (variante 2)'  }}\"\r\n      subtitle=\"{{ '<ntx-list2 [data]=data></ntx-list2>' }}\">\r\n        <ntx-list2  [data]=list2_1></ntx-list2>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List 3' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list3>' }}\">\r\n        <ntx-list3 [data]=list3></ntx-list3>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List 4' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list4>' }}\">\r\n        <ntx-list4 listTitle=\"list title\" actionLabel=\"action\" actionIcon=\"icon-plus-circle\" [items]=list4Items></ntx-list4>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST5' }}\"\r\n      subtitle=\"{{ '<ntx-list5></ntx-list5>' }}\">\r\n      <ntx-list5 showBullet bulletType=\"badge\" badgeColor=\"#1FAE96\" showDivider [items]=list5_1>80%</ntx-list5>\r\n      <ntx-list5 showBullet bulletType=\"avatar\" showDivider [items]=list5_4></ntx-list5>\r\n      <ntx-list5 showBullet bulletType=\"icon\" iconName=\"icon-badge\" iconColor=\"#9A9DEB\" showDivider [items]=list5_3></ntx-list5>\r\n      <ntx-list5 showDivider [items]=list5_2>\r\n        <ntx-menu-options [icon]=\"menuOptions.icon\" [actions]=\"menuOptions.actions\"></ntx-menu-options>\r\n      </ntx-list5>\r\n      <ntx-list5 [items]=list5_5 showDivider>\r\n        <ntx-form-slidetoggle [color]=\"'primary'\"></ntx-form-slidetoggle>\r\n      </ntx-list5>\r\n      <ntx-list5 [items]=list5_6>\r\n        <ntx-raised-button [color]=\"'primary'\">Button</ntx-raised-button>\r\n      </ntx-list5>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST6'}}\"\r\n      subtitle=\"{{ '<ntx-list6 [items]=\\'list\\'></ntx-list6>' }}\">\r\n        <ntx-list6 [items]=list6></ntx-list6>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST7'}}\"\r\n      subtitle=\"{{ '<ntx-list7 [items]=\\'list\\'></ntx-list7>' }}\">\r\n        <ntx-list7 [items]=list7></ntx-list7>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST8'}}\"\r\n      subtitle=\"{{ '<ntx-list8 [items]=list8></ntx-list8>' }}\">\r\n        <ntx-list8 [items]=list8></ntx-list8>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST9'}}\"\r\n      subtitle=\"{{ '<ntx-list9 [items]=list9></ntx-list9>' }}\">\r\n        <ntx-list9 [items]=list9></ntx-list9>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST10'}}\"\r\n      subtitle=\"{{ '<ntx-list10 [items]=list10></ntx-list10>' }}\">\r\n      <div class=\"utils--flex\">\r\n        <ntx-list10 title=\"Originalidad\" [items]=list10></ntx-list10>\r\n        <ntx-list10 [items]=list10b></ntx-list10>\r\n      </div>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST10-DARK'}}\"\r\n      subtitle=\"{{ '<ntx-list10-dark></ntx-list10-dark>' }}\"\r\n      class=\"black-bg\">\r\n        <ntx-list10-dark [items]=list10Dark></ntx-list10-dark>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'LIST11'}}\"\r\n      subtitle=\"{{ '<ntx-list11></ntx-list11>' }}\"\r\n      class=\"black-bg\">\r\n      <div class=\"utils--margin-bottom-24\" *ngFor=\"let item of list11\">\r\n        <ntx-list11\r\n          [icon]=\"item.icon\"\r\n          [title]=\"item.title\"\r\n          [label]=\"item.label\"\r\n          [showProgressBar]=\"item.showProgressBar\"\r\n          [progressBarColor]=\"item.progressBarColor\"\r\n          [progressBarValue]=\"item.progressBarValue\"\r\n          [progressBarRequiredValue]=\"item.progressBarRequiredValue\"\r\n          ></ntx-list11>\r\n      </div>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'One line list with avatar' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-one-line-avatar>' }}\">\r\n        <ntx-list-one-line-avatar></ntx-list-one-line-avatar>\r\n        <ntx-list-one-line-avatar></ntx-list-one-line-avatar>\r\n        <ntx-list-one-line-avatar></ntx-list-one-line-avatar>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Two lines list with avatar' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-two-lines-avatar>' }}\">\r\n        <ntx-list-two-lines-avatar [data] =\"data\"></ntx-list-two-lines-avatar>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Multi list with icon' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-two-multilines-icon>' }}\">\r\n        <ntx-list-multilines-icon [data]=\"listMultilineIconData\"></ntx-list-multilines-icon>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'One line list' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-one-line>' }}\">\r\n      <ntx-list-one-line [data]=list></ntx-list-one-line>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'One line list with options' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-one-line-options>' }}\">\r\n      <ntx-list-one-line-options></ntx-list-one-line-options>\r\n      <ntx-list-one-line-options></ntx-list-one-line-options>\r\n      <ntx-list-one-line-options [level]=\"'3/5'\"></ntx-list-one-line-options>\r\n      <ntx-list-one-line-options [level]=\"'3/5'\"></ntx-list-one-line-options>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'One line navigable list' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-one-line-navigable>' }}\">\r\n        <ntx-list-one-line-navigable></ntx-list-one-line-navigable>\r\n        <ntx-list-one-line-navigable></ntx-list-one-line-navigable>\r\n        <ntx-list-one-line-navigable></ntx-list-one-line-navigable>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List horizontal' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-horizontal>' }}\">\r\n        <ntx-list-horizontal></ntx-list-horizontal>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'List horizontal with icons' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-horizontal-icon>' }}\">\r\n        <ntx-list-horizontal-icon></ntx-list-horizontal-icon>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      class=\"horizontal-cards\"\r\n      title=\"{{'Two lines vertical list with avatar' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-list-two-lines-avatar-vertical>' }}\">\r\n        <ntx-list-two-lines-avatar-vertical></ntx-list-two-lines-avatar-vertical>\r\n        <ntx-list-two-lines-avatar-vertical></ntx-list-two-lines-avatar-vertical>\r\n        <ntx-list-two-lines-avatar-vertical></ntx-list-two-lines-avatar-vertical>\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/lists/examples/lists-examples.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/lists/examples/lists-examples.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal-cards .card-simple.mat-card .mat-card-content {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvbGlzdHMvZXhhbXBsZXMvQzpcXHByb3llY3Rvc1xcdXgtY29tcG9uZW50cy9zcmNcXGFwcFxcdWktcGFnZXNcXGxpc3RzXFxleGFtcGxlc1xcbGlzdHMtZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLXBhZ2VzL2xpc3RzL2V4YW1wbGVzL2xpc3RzLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsY0FBQTtDQ0ZQIiwiZmlsZSI6InNyYy9hcHAvdWktcGFnZXMvbGlzdHMvZXhhbXBsZXMvbGlzdHMtZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9yaXpvbnRhbC1jYXJkc3tcclxuICAuY2FyZC1zaW1wbGV7XHJcbiAgICAmLm1hdC1jYXJke1xyXG4gICAgICAubWF0LWNhcmQtY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5ob3Jpem9udGFsLWNhcmRzIC5jYXJkLXNpbXBsZS5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/app/ui-pages/lists/examples/lists-examples.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/lists/examples/lists-examples.component.ts ***!
  \*********************************************************************/
/*! exports provided: IActionsMenuLinkComponent, ListsExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IActionsMenuLinkComponent", function() { return IActionsMenuLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsExamplesComponent", function() { return ListsExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IActionsMenuLinkComponent = /** @class */ (function () {
    function IActionsMenuLinkComponent() {
    }
    return IActionsMenuLinkComponent;
}());

var USER = {
    actions: [
        {
            label: 'Recibidas',
            state: 'active',
            showIcon: true,
            icon: 'icon-inbox-solid',
            link: '#',
            showBadge: true
        },
        {
            label: 'Papelera',
            state: '',
            showIcon: true,
            icon: 'icon-archive-solid',
            link: '#',
            showBadge: false
        },
        {
            label: 'Otros',
            state: '',
            showIcon: false,
            icon: '',
            link: '#',
            showBadge: false
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
            title: 'María Fraga Colorado',
            subtitle: 'maria.fraga',
            image: 'assets/images/user_female_01.jpg',
            link: undefined,
            icon: 'icon-bell-solid',
            iconColor: 'utils--text-error',
            text: undefined
        },
        {
            title: 'Antonio Prado',
            subtitle: 'antonio.prado',
            image: 'assets/images/user_male_02.png',
            link: undefined,
            icon: undefined,
            iconColor: undefined,
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
var ListsExamplesComponent = /** @class */ (function () {
    function ListsExamplesComponent() {
        this.user = USER;
        this.data = TWO_LINES_LIST_WITH_AVATAR;
        this.list = [
            {
                label: 'Customer oriented',
                avatar: undefined,
                color: '#E7575B'
            },
            {
                label: 'Leadership',
                avatar: 'assets/images/app-catalogue.png',
                color: '#5cce88'
            },
            {
                label: 'Organisation',
                avatar: 'assets/images/app-community.png',
                color: '#EE9A37'
            },
            {
                label: 'Verbal communication',
                avatar: undefined,
                color: '#5cce88'
            },
            {
                label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                avatar: undefined,
                color: '#41545D'
            },
            {
                label: 'Critical thinking & problem solving',
                avatar: 'assets/images/background-profile-header.jpg',
                color: '#1D5D93'
            }
        ];
        this.list1 = [
            {
                label: 'Customer oriented',
                avatar: undefined,
                color: '#E7575B',
                progress: {
                    value: 40,
                    level: '3/5'
                }
            },
            {
                label: 'Leadership',
                avatar: 'assets/images/app-catalogue.png',
                color: '#5cce88',
                progress: {
                    value: 80,
                    level: '4/7'
                }
            },
            {
                label: 'Organisation',
                avatar: 'assets/images/app-community.png',
                color: '#EE9A37',
                progress: {
                    value: 75,
                    level: '3/7'
                }
            },
            {
                label: 'Verbal communication',
                avatar: undefined,
                color: '#5cce88',
                progress: {
                    value: 68,
                    level: '4/9'
                }
            },
            {
                label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                avatar: undefined,
                color: '#41545D',
                progress: {
                    value: 33,
                    level: '2/5'
                }
            },
            {
                label: 'Critical thinking & problem solving',
                avatar: 'assets/images/background-profile-header.jpg',
                color: '#1D5D93',
                progress: {
                    value: 88,
                    level: '5/8'
                }
            }
        ];
        this.list2_1 = [
            {
                label: 'Customer oriented',
                avatar: undefined,
                color: '#E7575B',
                progress: {
                    value: 40,
                    requiredValue: 80,
                    edited: true
                },
                checked: true
            },
            {
                label: 'Leadership',
                avatar: 'assets/images/app-catalogue.png',
                color: '#5cce88',
                progress: {
                    value: 80,
                    requiredValue: 30,
                    edited: true
                },
                checked: false
            },
            {
                label: 'Organisation',
                avatar: 'assets/images/app-community.png',
                color: '#EE9A37',
                progress: {
                    value: 75,
                    requiredValue: 55,
                    edited: true
                },
                checked: true
            }
        ];
        this.list2_2 = [
            {
                label: 'Customer oriented',
                avatar: undefined,
                color: '#E7575B',
                progress: {
                    value: 40,
                    requiredValue: 80,
                    edited: false
                },
                checked: true
            },
            {
                label: 'Leadership',
                avatar: 'assets/images/app-catalogue.png',
                color: '#5cce88',
                progress: {
                    value: 80,
                    requiredValue: 30,
                    edited: false
                },
                checked: false
            },
            {
                label: 'Organisation',
                avatar: 'assets/images/app-community.png',
                color: '#EE9A37',
                progress: {
                    value: 75,
                    requiredValue: 55,
                    edited: false
                },
                checked: true
            }
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
        this.list4Items = [
            {
                label: 'Formación personalizada',
                checked: true,
                actions: [
                    {
                        icon: 'icon-pencil',
                        title: 'Edit',
                        click: function () { alert('You\'ve clicked in \'Edit\' option'); }
                    },
                    {
                        icon: 'icon-check-circle',
                        title: 'Check as completed',
                        click: function () { alert('You\'ve clicked in \'Check as completed\' option'); }
                    },
                    {
                        icon: 'icon-trash',
                        title: 'Delete',
                        click: function () { alert('You\'ve clicked in \'Delete\' option'); }
                    }
                ],
            },
            {
                label: 'Curso de Angular2',
                checked: false,
                actions: [
                    {
                        icon: 'icon-pencil',
                        title: 'Edit',
                        click: function () { alert('You\'ve clicked in \'Edit\' option'); }
                    },
                    {
                        icon: 'icon-check-circle',
                        title: 'Check as completed',
                        click: function () { alert('You\'ve clicked in \'Check as completed\' option'); }
                    },
                    {
                        icon: 'icon-trash',
                        title: 'Delete',
                        click: function () { alert('You\'ve clicked in \'Delete\' option'); }
                    }
                ],
            },
            {
                label: 'Retener a tu equipo, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                checked: true,
                actions: [
                    {
                        icon: 'icon-pencil',
                        title: 'Edit',
                        click: function () { alert('You\'ve clicked in \'Edit\' option'); }
                    },
                    {
                        icon: 'icon-check-circle',
                        title: 'Check as completed',
                        click: function () { alert('You\'ve clicked in \'Check as completed\' option'); }
                    },
                    {
                        icon: 'icon-trash',
                        title: 'Delete',
                        click: function () { alert('You\'ve clicked in \'Delete\' option'); }
                    }
                ],
            }
        ];
        this.listMultilineIconData = [
            {
                title: 'Section one',
                icon: 'icon-editor-launcher',
                links: [
                    {
                        title: 'title of link one',
                        link: '/path'
                    },
                    {
                        title: 'title of link two ',
                        link: undefined
                    },
                ]
            },
            {
                title: 'Section two',
                icon: 'icon-globe',
                links: [
                    {
                        title: 'title of link one',
                        link: '/another path'
                    },
                    {
                        title: 'title of link two ',
                        link: undefined
                    },
                ]
            }
        ];
        this.list5_1 = [
            {
                labelPrincipal: 'List option with link',
                labelSecondary: '25%',
                labelRouterLink: '/home'
            }
        ];
        this.list5_2 = [
            {
                labelPrincipal: 'List option with menu options',
                labelSecondary: '80',
                labelRouterLink: undefined
            }
        ];
        this.list5_3 = [
            {
                labelPrincipal: 'Organisation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                labelSecondary: undefined,
                labelRouterLink: undefined
            }
        ];
        this.list5_4 = [
            {
                avatar: 'assets/images/user_female_04.jpg',
                labelPrincipal: 'Bernice Greaves',
                labelSecondary: undefined,
                labelRouterLink: undefined
            }
        ];
        this.list5_5 = [
            {
                labelPrincipal: 'List option with slide',
                labelSecondary: '',
                labelRouterLink: undefined
            }
        ];
        this.list5_6 = [
            {
                labelPrincipal: 'List option with button',
                labelSecondary: '',
                labelRouterLink: undefined
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
        this.list10Dark = [
            {
                icon: 'star',
                iconColor: '#fff',
                iconSize: '18px',
            },
            {
                icon: 'star',
                iconColor: '#fff',
                iconSize: '18px',
            },
            {
                icon: 'star',
                iconColor: '#fff',
                iconSize: '18px',
            },
            {
                icon: 'star_border',
                iconColor: '#fff',
                iconSize: '18px',
            },
            {
                icon: 'star_border',
                iconColor: '#fff',
                iconSize: '18px',
            }
        ];
        this.list11 = [];
    }
    ListsExamplesComponent.prototype.ngOnInit = function () {
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
        this.list11 = [
            {
                icon: 'military_tech',
                title: 'Soft Skills',
                label: '87',
                showProgressBar: true,
                progressBarColor: 'primary',
                progressBarValue: '87'
            },
            {
                icon: 'military_tech',
                title: 'Design systems',
                label: '62',
                showProgressBar: true,
                progressBarColor: 'success',
                progressBarValue: '62',
                progressBarRequiredValue: '48'
            },
            {
                title: 'Project management',
                showProgressBar: true,
                progressBarColor: 'error',
                progressBarValue: '28',
                progressBarRequiredValue: '73'
            },
            {
                icon: 'military_tech',
                title: 'Project management',
                showProgressBar: true,
                progressBarColor: 'green-lime',
                progressBarValue: '51',
                progressBarRequiredValue: '23'
            },
            {
                icon: 'star',
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet imperdiet fermentum. Sed enim velit, porttitor id tempus tincidunt, pellentesque et quam. Pellentesque tincidunt lacus vitae purus mattis porttitor. Proin nec feugiat sem.',
                label: '100',
                showProgressBar: false,
            },
        ];
    };
    ListsExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lists-examples',
            template: __webpack_require__(/*! ./lists-examples.component.html */ "./src/app/ui-pages/lists/examples/lists-examples.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./lists-examples.component.scss */ "./src/app/ui-pages/lists/examples/lists-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListsExamplesComponent);
    return ListsExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/lists/lists-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/lists/lists-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ListsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsRoutingModule", function() { return ListsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_lists_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/lists-examples.component */ "./src/app/ui-pages/lists/examples/lists-examples.component.ts");
/* harmony import */ var _documentation_lists_doc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/lists-doc.component */ "./src/app/ui-pages/lists/documentation/lists-doc.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_lists_examples_component__WEBPACK_IMPORTED_MODULE_3__["ListsExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_lists_doc_component__WEBPACK_IMPORTED_MODULE_4__["ListsDocComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var ListsRoutingModule = /** @class */ (function () {
    function ListsRoutingModule() {
    }
    ListsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ListsRoutingModule);
    return ListsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/lists/lists.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/lists/lists.module.ts ***!
  \************************************************/
/*! exports provided: ListsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsModule", function() { return ListsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _lists_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lists-routing.module */ "./src/app/ui-pages/lists/lists-routing.module.ts");
/* harmony import */ var _documentation_lists_doc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/lists-doc.component */ "./src/app/ui-pages/lists/documentation/lists-doc.component.ts");
/* harmony import */ var _examples_lists_examples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/lists-examples.component */ "./src/app/ui-pages/lists/examples/lists-examples.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var ListsModule = /** @class */ (function () {
    function ListsModule() {
    }
    ListsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _lists_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxMenusModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxListsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxFormsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxButtonsModule"]
            ],
            declarations: [
                _examples_lists_examples_component__WEBPACK_IMPORTED_MODULE_7__["ListsExamplesComponent"],
                _documentation_lists_doc_component__WEBPACK_IMPORTED_MODULE_6__["ListsDocComponent"]
            ]
        })
    ], ListsModule);
    return ListsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-lists-lists-module.js.map