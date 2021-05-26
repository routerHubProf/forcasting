(self["webpackChunkforcasting"] = self["webpackChunkforcasting"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 6804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




// import {UploadComponent} from './upload/upload.component';
// import {BaseScenarioComponent} from './base-scenario/base-scenario.component';
// import {NewScenarioComponent} from './new-scenario/new-scenario.component';
// import {CompareScenarioComponent} from './compare-scenario/compare-scenario.component';
// import {SidebarComponent } from './sidebar/sidebar.component';
const routes = [
    { path: 'upload', component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent },
    { path: 'baseScenario', component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent },
    { path: 'newScenario', component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent },
    { path: 'compareScenario', component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent },
    { path: '', component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'forcasting';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 6804);
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload/upload.component */ 68);
/* harmony import */ var _base_scenario_base_scenario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-scenario/base-scenario.component */ 3606);
/* harmony import */ var _new_scenario_new_scenario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-scenario/new-scenario.component */ 5951);
/* harmony import */ var _compare_scenario_compare_scenario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compare-scenario/compare-scenario.component */ 7152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent,
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__.UploadComponent,
        _base_scenario_base_scenario_component__WEBPACK_IMPORTED_MODULE_5__.BaseScenarioComponent,
        _new_scenario_new_scenario_component__WEBPACK_IMPORTED_MODULE_6__.NewScenarioComponent,
        _compare_scenario_compare_scenario_component__WEBPACK_IMPORTED_MODULE_7__.CompareScenarioComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule] }); })();


/***/ }),

/***/ 3606:
/*!**********************************************************!*\
  !*** ./src/app/base-scenario/base-scenario.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseScenarioComponent": () => (/* binding */ BaseScenarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class BaseScenarioComponent {
    constructor() { }
    ngOnInit() {
    }
}
BaseScenarioComponent.ɵfac = function BaseScenarioComponent_Factory(t) { return new (t || BaseScenarioComponent)(); };
BaseScenarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseScenarioComponent, selectors: [["app-base-scenario"]], decls: 74, vars: 0, consts: [[1, "head"], [1, "baseScenario"], [1, "macroCovid"], [1, "macro"], [1, "macroflex"], [1, "gdp"], [1, "fas", "fa-chart-pie"], [1, "inflation"], [1, "fas", "fa-signal"], [1, "jobless"], [1, "fas", "fa-ban"], [1, "interest"], [1, "fas", "fa-percent"], [1, "covid"], [1, "covidflex"], [1, "cases"], [1, "fas", "fa-viruses"], [1, "deaths"], [1, "fas", "fa-book-dead"], [1, "index"], [1, "fas", "fa-lock"]], template: function BaseScenarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Base Scenario Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Actual info is available till : W4'21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The forecasted period is : W5'21-W52'21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "MACRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "GDP Gr %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "13.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inflation %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1.6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Jobless Rate %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Interest Rate %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "0.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "* All variables are calculated for the forecasted period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "COVID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "13.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "1.6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Stringency Index %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "* Cases, Deaths and Stringency Index are the weekly averages for the forecasted period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap\");\n.head[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 100%;\n  padding: 2%;\n  background-color: #F9F9F9;\n}\n.head[_ngcontent-%COMP%]   .baseScenario[_ngcontent-%COMP%] {\n  padding: 2%;\n  background-color: #fff;\n}\n.head[_ngcontent-%COMP%]   .baseScenario[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .macroCovid[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 2% auto;\n  font-weight: 600;\n  border-radius: 10px;\n  font-family: Nunito Sans;\n}\n.head[_ngcontent-%COMP%]   .macroCovid[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .macroflex[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .covidflex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.head[_ngcontent-%COMP%]   .macroCovid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .macroflex[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .covidflex[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: 2% auto;\n}\n.head[_ngcontent-%COMP%]   .macro[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-right: 0.5%;\n  padding: 2%;\n  background-color: #fff;\n  border-radius: 10px;\n}\n.head[_ngcontent-%COMP%]   .covid[_ngcontent-%COMP%] {\n  width: 38%;\n  padding: 2%;\n  background-color: #fff;\n  border-radius: 10px;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 1% 0;\n  color: #d41748;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  margin: 2% 0;\n  color: #000;\n  font-weight: 600;\n  font-family: Nunito Sans;\n}\ni[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 50px;\n  color: #fff;\n  background-color: #d41748;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Utc2NlbmFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFFUjtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFDSTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQ0k7RUFFSSxVQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQURSO0FBR0k7RUFFSSxhQUFBO0VBRUEsOEJBQUE7QUFIUjtBQUlRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRlo7QUFLSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFLSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhSO0FBYUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBVko7QUFhQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQVZKO0FBWUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxlQUFBO0FBVkoiLCJmaWxlIjoiYmFzZS1zY2VuYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOndnaHRAMjAwJmRpc3BsYXk9c3dhcCcpO1xuXG4uaGVhZHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG4gICAgLmJhc2VTY2VuYXJpb3tcbiAgICAgICAgcGFkZGluZzoyJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmJhc2VTY2VuYXJpbywgLm1hY3JvQ292aWQge1xuICAgICAgICBcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOjIlIGF1dG87XG4gICAgICAgIFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogIE51bml0byBTYW5zO1xuICAgIH1cbiAgICAubWFjcm9Db3ZpZCwgLm1hY3JvZmxleCwgLmNvdmlkZmxleHtcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOjIlIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1hY3Jve1xuICAgICAgICB3aWR0aDo2MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDowLjUlO1xuICAgICAgICBwYWRkaW5nOjIlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAuY292aWR7XG4gICAgICAgIHdpZHRoOjM4JTtcbiAgICAgICAgcGFkZGluZzoyJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIH1cbiAgICBcblxuXG5cbiAgIFxuXG59XG5oNXtcbiAgICBtYXJnaW46MSUgMDtcbiAgICBjb2xvcjogI2Q0MTc0ODtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oM3tcbiAgICBtYXJnaW46MiUgMDtcbiAgICBjb2xvcjojMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zOztcbn1cbml7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQxNzQ4O1xuICAgIC8vIGhlaWdodDoyMCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBtYXJnaW46MiUgMDsgXG59Il19 */"] });


/***/ }),

/***/ 7152:
/*!****************************************************************!*\
  !*** ./src/app/compare-scenario/compare-scenario.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareScenarioComponent": () => (/* binding */ CompareScenarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class CompareScenarioComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompareScenarioComponent.ɵfac = function CompareScenarioComponent_Factory(t) { return new (t || CompareScenarioComponent)(); };
CompareScenarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompareScenarioComponent, selectors: [["app-compare-scenario"]], decls: 2, vars: 0, template: function CompareScenarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "compare-scenario works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYXJlLXNjZW5hcmlvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 34, vars: 0, consts: [[1, "home"], [1, "head"], [1, "logo"], ["src", "assets/logo.png", "alt", "logo", 1, "img-responsive"], [1, "content"], [1, "kellogg"], ["src", "assets/kelloggs.png", "alt", "kellogg"], [1, "option"], [1, "button"], ["href", "upload"], [1, "fas", "fa-cloud-upload-alt"], ["href", "baseScenario"], [1, "fas", "fa-signal"], ["href", "newScenario"], [1, "far", "fa-plus-square"], ["href", "compareScenario"], [1, "fas", "fa-balance-scale-right"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2021 FORECASTING TOOL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get ready for Forecasting Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Base Scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Build new Scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Compare Scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap\");\n.home[_ngcontent-%COMP%] {\n  background-color: #F9F9F9;\n}\n.home[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  background-color: #d41748;\n  height: 340px;\n  padding: 2%;\n}\n.home[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 90x;\n}\n.home[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  font-family: Nunito Sans;\n  margin-top: 5px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: -12% 2% 2% 2%;\n  border-radius: 10px;\n  background-color: #fff;\n  display: flex;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .kellogg[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .kellogg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 5% 5% 5% 0;\n  width: 50%;\n  font-family: Nunito Sans;\n  color: #d41748;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: flex;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  width: 100%;\n  border: 0;\n  outline: 0;\n  text-align: left;\n  background-color: #d41748;\n  border: 0.1px solid #d41748 !important;\n  font-family: Nunito Sans;\n  color: #fff;\n  border-radius: 10px;\n  font-weight: 600;\n  padding: 2%;\n  margin: 4% 4% 4% 0;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 1% 3%;\n  color: #d41748;\n  padding: 3%;\n  border-radius: 30px;\n  background-color: #fff;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #d41748;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 3%;\n  border-radius: 30px;\n  background-color: #d41748;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFFUjtFQUNJLHlCQUFBO0FBQUo7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDUjtBQUFRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFFWjtBQUFRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFFWjtBQUNJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ1E7RUFDSSxVQUFBO0FBQ1o7QUFBWTtFQUNJLFdBQUE7QUFFaEI7QUFDUTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQVk7RUFDSSxhQUFBO0FBRWhCO0FBRGdCO0VBQ0ksVUFBQTtBQUdwQjtBQUNZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFBZSxXQUFBO0VBQVksbUJBQUE7RUFBcUIsc0JBQUE7QUFLcEU7QUFIZ0I7RUFDSSxlQUFBO0FBS3BCO0FBRFk7RUFDSSxzQkFBQTtFQUNBLGNBQUE7QUFHaEI7QUFGZ0I7RUFDSSxXQUFBO0VBQVksV0FBQTtFQUFZLG1CQUFBO0VBQXFCLHlCQUFBO0FBT2pFIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcblxuLmhvbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbiAgICAuaGVhZHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MTc0ODtcbiAgICAgICAgaGVpZ2h0OjM0MHB4O1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgLmxvZ297XG4gICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDo5MHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTnVuaXRvIFNhbnM7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRlbnR7XG4gICAgICAgIG1hcmdpbjotMTIlIDIlIDIlIDIlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5rZWxsb2dne1xuICAgICAgICAgICAgd2lkdGg6NTAlOyBcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5vcHRpb257XG4gICAgICAgICAgICBwYWRkaW5nOiA1JSA1JSA1JSAwO1xuICAgICAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xuICAgICAgICAgICAgY29sb3I6I2Q0MTc0ODtcbiAgICAgICAgICAgIC5idXR0b257XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOjA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQxNzQ4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMC4xcHggc29saWQgI2Q0MTc0OCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8gU2FucztcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjIlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjo0JSA0JSA0JSAwO1xuICAgICAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxJSAzJTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2Q0MTc0ODsgcGFkZGluZzozJTsgYm9yZGVyLXJhZGl1czogMzBweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjojZDQxNzQ4O1xuICAgICAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7IHBhZGRpbmc6MyU7IGJvcmRlci1yYWRpdXM6IDMwcHg7IGJhY2tncm91bmQtY29sb3I6ICNkNDE3NDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 5951:
/*!********************************************************!*\
  !*** ./src/app/new-scenario/new-scenario.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewScenarioComponent": () => (/* binding */ NewScenarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class NewScenarioComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewScenarioComponent.ɵfac = function NewScenarioComponent_Factory(t) { return new (t || NewScenarioComponent)(); };
NewScenarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewScenarioComponent, selectors: [["app-new-scenario"]], decls: 2, vars: 0, template: function NewScenarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new-scenario works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctc2NlbmFyaW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6804:
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../upload/upload.component */ 68);
/* harmony import */ var _base_scenario_base_scenario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-scenario/base-scenario.component */ 3606);
/* harmony import */ var _new_scenario_new_scenario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-scenario/new-scenario.component */ 5951);
/* harmony import */ var _compare_scenario_compare_scenario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compare-scenario/compare-scenario.component */ 7152);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ 5067);









function SidebarComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-base-scenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-new-scenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-compare-scenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/upload"]; };
const _c1 = function () { return ["/baseScenario"]; };
const _c2 = function () { return ["/newScenario"]; };
const _c3 = function () { return ["/compareScenario"]; };
function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-drawer-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-drawer", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "2021 FORECASTING TOOL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Base Scenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Build new Scenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Compare Scenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-drawer-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, SidebarComponent_div_0_div_31_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, SidebarComponent_div_0_div_32_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, SidebarComponent_div_0_div_33_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, SidebarComponent_div_0_div_34_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c0))("ngClass", ctx_r0.upload);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c1))("ngClass", ctx_r0.baseScenario);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c2))("ngClass", ctx_r0.newScenario);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c3))("ngClass", ctx_r0.compareScenario);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.url == "/upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.url == "/baseScenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.url == "/newScenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.url == "/compareScenario");
} }
function SidebarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class SidebarComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.section = 'scenarioBuilder';
        this.upload = '';
        this.baseScenario = '';
        this.newScenario = '';
        this.compareScenario = '';
        this.url = '';
    }
    ngOnInit() {
        this.url = '/' + (this.router.url).split('/').pop();
        console.log(this.url);
        this.upload = '';
        this.baseScenario = '';
        this.newScenario = '';
        this.compareScenario = '';
        switch (this.url) {
            case '/upload':
                this.upload = 'active';
                break;
            case '/baseScenario':
                this.baseScenario = 'active';
                break;
            case '/newScenario':
                this.newScenario = 'active';
                break;
            case '/compareScenario':
                this.compareScenario = 'active';
                break;
        }
    }
    display(clickedSection) {
        this.section = clickedSection;
        this.upload = '';
        this.baseScenario = '';
        this.newScenario = '';
        this.compareScenario = '';
        switch (clickedSection) {
            case 'upload':
                this.upload = 'active';
                break;
            case 'baseScenario':
                this.baseScenario = 'active';
                break;
            case 'newScenario':
                this.newScenario = 'active';
                break;
            case 'compareScenario':
                this.compareScenario = 'active';
                break;
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "container-fluid"], ["mode", "side", "opened", "", 1, "side"], [1, "header"], [1, "logo"], ["src", "assets/logo_red.png", "alt", "logo", 1, "img-responsive"], [1, "section"], ["href", ""], [1, "fas", "fa-home"], [3, "routerLink", "ngClass"], [1, "fas", "fa-cloud-upload-alt"], [1, "fas", "fa-signal"], [1, "far", "fa-plus-square"], [1, "fas", "fa-balance-scale-right"], [1, "main"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 35, 16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.url != "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.url == "/");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, _upload_upload_component__WEBPACK_IMPORTED_MODULE_0__.UploadComponent, _base_scenario_base_scenario_component__WEBPACK_IMPORTED_MODULE_1__.BaseScenarioComponent, _new_scenario_new_scenario_component__WEBPACK_IMPORTED_MODULE_2__.NewScenarioComponent, _compare_scenario_compare_scenario_component__WEBPACK_IMPORTED_MODULE_3__.CompareScenarioComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap\");\n.container-fluid[_ngcontent-%COMP%] {\n  height: 600px;\n  font-family: Nunito Sans;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  width: 260px;\n  background: #fff;\n  box-shadow: 5px 10px 5px #eee;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.side[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.side[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding: 10%;\n}\n.side[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 90x;\n  margin: 2%;\n}\n.side[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n}\n.side[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.side[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.side[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  display: block;\n  width: 100%;\n  font-family: Nunito Sans;\n  text-decoration: none;\n  color: #000;\n  padding: 3%;\n  border-radius: 10px;\n  font-weight: 600;\n  background-color: #fff;\n  text-align: left;\n  font-size: 20px;\n  margin: 1%;\n  border: 0px;\n}\n.side[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 10%;\n  margin: 2%;\n}\n.side[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #e1e2e4;\n}\n.side[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  border: 0px !important;\n  outline: 0px;\n  background-color: #d41748;\n}\n.side[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.side[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border: 0px !important;\n  outline: 0px;\n  color: #fff;\n  background-color: #d41748 !important;\n}\n.side[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.main[_ngcontent-%COMP%] {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EseUZBQUE7QUFFUjtFQUNJLGFBQUE7RUFDQSx3QkFBQTtBQURKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBR0EseUhBQUE7QUFGSjtBQUlBO0VBQ0ksVUFBQTtBQURKO0FBR0k7RUFDSSxZQUFBO0FBRFI7QUFFUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUFaO0FBRVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQVo7QUFRUTtFQUNJLHFCQUFBO0FBTlo7QUFRUTtFQUNJLHFCQUFBO0FBTlo7QUFTUTtFQUVRLHFCQUFBO0VBQ0EsWUFBQTtFQUtKLGNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7QUFmWjtBQWdCWTtFQUVJLFVBQUE7RUFDQSxVQUFBO0FBZmhCO0FBNkJRO0VBQ0kseUJBQUE7QUEzQlo7QUErQlE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQTdCWjtBQThCWTtFQUNJLHNCQUFBO0FBNUJoQjtBQXVDUTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQXJDWjtBQXNDWTtFQUNJLFdBQUE7QUFwQ2hCO0FBMENBO0VBQ0ksVUFBQTtBQXZDSiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcblxuLmNvbnRhaW5lci1mbHVpZHtcbiAgICBoZWlnaHQ6NjAwcHg7XG4gICAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xufVxuLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OjVweCAxMHB4IDVweCAjZWVlO1xuXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZSA6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL2dyZXktdGV4dHVyZWQtc3VyZmFjZV8yNDgzNy00NDIuanBnJyk7XG4gICAgYm94LXNoYWRvdzogMCAxNnB4IDM4cHggLTEycHggcmdiKDAgMCAwIC8gNTYlKSwgMCA0cHggMjVweCAwcHggcmdiKDAgMCAwIC8gMTIlKSwgMCA4cHggMTBweCAtNXB4IHJnYigwIDAgMCAvIDIwJSk7XG59XG4uc2lkZXtcbiAgICB3aWR0aDoyNSU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2UxZTJlNDtcbiAgICAuaGVhZGVye1xuICAgICAgICBwYWRkaW5nOjEwJTtcbiAgICAgICAgLmxvZ297XG4gICAgICAgICAgICB3aWR0aDoxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDo5MHg7XG4gICAgICAgICAgICBtYXJnaW46IDIlO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgLnNlY3Rpb257XG4gICAgICAgIHVse1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBhe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBtYXJnaW46NSU7XG4gICAgICAgICAgICAvLyBwYWRkaW5nOjUlO1xuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTnVuaXRvIFNhbnM7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgIC8vIGhlaWdodDoxMCUhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6MyU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIC8vIGNvbG9yOiMzQzQ4NTg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW46MSU7XG4gICAgICAgICAgICAvLyBmb250LXdlaWdodDozMDA7XG4gICAgICAgICAgICBib3JkZXI6MHB4O1xuICAgICAgICAgICAgaXtcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjoyJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNwYW57XG4gICAgICAgICAgICAvLyAgICAgLy8gZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIC8vICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgICAgICAvLyAgICAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xuICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAvLyAgICAgd2lkdGg6MTAwJSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luOjUlIDAlO1xuICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6NCU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlMWUyZTQ7XG4gICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBhOmFjdGl2ZXtcbiAgICAgICAgICAgIGJvcmRlcjowcHghaW1wb3J0YW50O1xuICAgICAgICAgICAgb3V0bGluZTowcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkNDE3NDg7XG4gICAgICAgICAgICBpe1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmYhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgLy8gICAgIGJvcmRlcjowcHghaW1wb3J0YW50O1xuICAgICAgICAvLyAgICAgb3V0bGluZTowcHg7XG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZCFpbXBvcnRhbnQ7XG4gICAgICAgIC8vICAgICBzcGFue1xuICAgICAgICAvLyAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLmFjdGl2ZXtcbiAgICAgICAgICAgIGJvcmRlcjowcHghaW1wb3J0YW50O1xuICAgICAgICAgICAgb3V0bGluZTowcHg7XG4gICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZDQxNzQ4IWltcG9ydGFudDtcbiAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG59XG4ubWFpbntcbiAgICB3aWR0aDo3NSU7XG59Il19 */"] });


/***/ }),

/***/ 68:
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadComponent": () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);







function UploadComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Path ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r12.path, " ");
} }
function UploadComponent_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " File Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r13.fileName, "% ");
} }
function UploadComponent_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Model Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadComponent_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r14.modelName, " ");
} }
function UploadComponent_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Upload Date/Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r15.uploadDateTime, " ");
} }
function UploadComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell", 21);
} }
function UploadComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r16.data, " ");
} }
function UploadComponent_mat_header_row_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function UploadComponent_mat_row_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return [20, 50, 100]; };
class UploadComponent {
    constructor() {
        this.fileData = { path: '', fileName: '', modelName: '', uploadDateTime: '', data: '' };
        this.displayedColumns = ['path', 'fileName', 'modelName', 'uploadDateTime', 'data'];
        this.uploadData = new Array;
        this.fileName = '';
        //   this.uploadData.push({path:'asdf',fileName:'asdf', uploadDateTime:'23 May 2021', modelName:'fgsdf',data:'gfdgsh'});
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.uploadData);
    }
    ngOnInit() {
    }
    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // }
    getFileInfo(e) {
        console.log(e.target.value);
        this.fileData.path = e.target.value;
        this.fileData.fileName = e.target.files[0].name;
        this.fileData.uploadDateTime = new Date().toLocaleString();
        this.fileData.data = 'WillDo';
        this.fileName = this.fileData.fileName;
        // console.log(this.fileName);
    }
    upload() {
        let deepCopyFileData = JSON.parse(JSON.stringify(this.fileData));
        this.uploadData.push(deepCopyFileData);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.uploadData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(e) {
        let filterValue = e.target.value;
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(); };
UploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], viewQuery: function UploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 37, vars: 6, consts: [[1, "head"], [1, "upload"], ["type", "text", "disabled", "", 1, "fileNameFill", 3, "value"], ["type", "file", "id", "file", 1, "file", 2, "display", "none", 3, "change"], ["for", "file"], [3, "click"], [1, "logs"], [1, "upload-container", "mat-elevation-z8"], [1, "tableHeader"], ["placeholder", "Search", 3, "keyup"], [3, "pageSizeOptions"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "path"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "fileName"], ["matColumnDef", "modelName"], ["matColumnDef", "uploadDateTime"], ["matColumnDef", "data"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_6_listener($event) { return ctx.getFileInfo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Browse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_9_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UploadComponent_Template_input_keyup_17_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-paginator", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UploadComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UploadComponent_mat_cell_22_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UploadComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UploadComponent_mat_cell_25_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UploadComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UploadComponent_mat_cell_28_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UploadComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UploadComponent_mat_cell_31_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UploadComponent_mat_header_cell_33_Template, 1, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UploadComponent_mat_cell_34_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UploadComponent_mat_header_row_35_Template, 1, 0, "mat-header-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UploadComponent_mat_row_36_Template, 1, 0, "mat-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap\");\n.head[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 100%;\n  padding: 2%;\n  background-color: #F9F9F9;\n}\n.head[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .logs[_ngcontent-%COMP%] {\n  padding: 2%;\n  width: 90%;\n  margin: 2% auto;\n  background-color: #fff;\n  font-weight: 600;\n  border-radius: 10px;\n  font-family: Nunito Sans;\n}\n.head[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .logs[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 1% 0;\n  color: #d41748;\n  font-weight: 600;\n}\n.head[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .logs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0;\n  width: 40%;\n  padding: 1%;\n  margin: 1%;\n  border: 0.1px solid #7e7575;\n}\n.head[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .head[_ngcontent-%COMP%]   .logs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  text-align: left !important;\n}\n.head[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .head[_ngcontent-%COMP%]   .logs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: 0.1px solid #7e7575;\n}\n.head[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .logs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 10%;\n  padding: 1%;\n  border: 0.1px solid #7e7575;\n  background-color: #d41748;\n  color: #fff;\n}\n.head[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]   .logs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 10%;\n  border: 0;\n  outline: 0;\n  text-align: center;\n  margin-left: 10%;\n  background-color: #d41748;\n  border: 0.1px solid #d41748 !important;\n  font-family: Nunito Sans;\n  color: #fff;\n  border-radius: 25px;\n  font-weight: 600;\n  padding: 1% 1%;\n}\n.head[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .head[_ngcontent-%COMP%]   .logs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #d41748;\n}\n.upload-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n  .mat-form-field-ripple {\n  display: none;\n}\n  .mat-form-field-underline {\n  display: none;\n}\nmat-header-cell[_ngcontent-%COMP%] {\n  font-family: Nunito Sans;\n  font-weight: 800;\n  color: #000;\n  width: 20%;\n  text-align: center;\n  background-color: #d8d4d4;\n}\nmat-cell[_ngcontent-%COMP%] {\n  font-family: Nunito Sans;\n  color: #000;\n  width: 20%;\n  font-weight: 400;\n  padding-right: 2%;\n  font-size: 0.6em;\n  text-align: center;\n}\n.tableHeader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUVSO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDUjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVaO0FBQ1E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFDWjtBQUVRO0VBQ0ksMkJBQUE7QUFBWjtBQUVRO0VBQ0Usd0JBQUE7RUFDQSwyQkFBQTtBQUFWO0FBR1E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBRFo7QUFJUTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGWjtBQU1RO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0FBSlo7QUFXQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBUko7QUFlRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQVpKO0FBY0U7RUFDRSxhQUFBO0FBWEo7QUFhRTtFQUNFLGFBQUE7QUFWSjtBQVlFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVRKO0FBWUU7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQW9CQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWpCRiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcblxuLmhlYWR7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICAgIC51cGxvYWQsIC5sb2dze1xuICAgICAgICBwYWRkaW5nOjIlO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46MiUgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICBOdW5pdG8gU2FucztcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBtYXJnaW46MSUgMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZDQxNzQ4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgYm9yZGVyOjA7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgcGFkZGluZzoxJTtcbiAgICAgICAgICAgIG1hcmdpbjoxJTtcbiAgICAgICAgICAgIGJvcmRlcjowLjFweCBzb2xpZCByZ2IoMTI2LCAxMTcsIDExNyk7XG5cbiAgICAgICAgfVxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dDpmb2N1c3tcbiAgICAgICAgICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXI6MC4xcHggc29saWQgcmdiKDEyNiwgMTE3LCAxMTcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICBwYWRkaW5nOjElO1xuICAgICAgICAgICAgYm9yZGVyOjAuMXB4IHNvbGlkIHJnYigxMjYsIDExNywgMTE3KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDE3NDg7XG4gICAgICAgICAgICBjb2xvcjojZmZmO1xuXG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6MTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTowO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MTc0ODtcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcHggc29saWQgI2Q0MTc0OCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xuICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcGFkZGluZzoxJSAxJTtcbiAgICAgICAgICAgIC8vIG1hcmdpbjo0JSA0JSA0JSAwO1xuXG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiNkNDE3NDg7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG59XG5cbi51cGxvYWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICBcblxuICBcbiAgXG4gIFxuICAubWF0LXRhYmxlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBtYXQtaGVhZGVyLWNlbGx7XG4gICAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IzAwMDtcbiAgICB3aWR0aDoyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxMiwgMjEyKTtcblxuICB9XG4gIG1hdC1jZWxse1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8gU2FucztcbiAgICBjb2xvcjojMDAwO1xuICAgIHdpZHRoOjIwJTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmctcmlnaHQ6MiU7XG4gICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBcblxuLy8gICBtYXQtcGFnaW5hdG9ye1xuLy8gICAvLyBkaXNwbGF5OmlubGluZTtcbi8vICAgd2lkdGg6MzAlIWltcG9ydGFudDtcblxuLy8gfVxuXG4udGFibGVIZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map