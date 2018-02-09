webpackJsonp(["main"],{

/***/ "../../../../../Client/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../Client/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../Client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../Client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_app_module__ = __webpack_require__("../../../../../Client/modules/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../Client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__modules_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../Client/modules/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-light navbar-static-top\">\r\n    <div class=\"container\">\r\n        <article class=\"row\">\r\n\r\n            <section class=\"col-lg-7 col-md-6 col-xs-12\">\r\n                <a class=\"navbar-brand\" routerLink=\"catalog\">\r\n                    <img src=\"assets/images/brand.png\" />\r\n                </a>\r\n            </section>\r\n\r\n        </article>\r\n    </div>\r\n</header>\r\n\r\n<!-- component routing placeholder -->\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"vin-app-footer\">\r\n    <div class=\"container\">\r\n        <article class=\"row\">\r\n\r\n            <section class=\"col-sm-6\">\r\n                <img class=\"vin-app-footer-brand\" src=\"assets/images/brand_dark.png\" />\r\n            </section>\r\n\r\n            <section class=\"col-sm-6\">\r\n                <img class=\"vin-app-footer-text hidden-xs\" src=\"assets/images/main_footer_text.png\" width=\"335\" height=\"26\" alt=\"footer text image\" />\r\n            </section>\r\n\r\n        </article>\r\n    </div>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../Client/modules/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vin-app-footer {\n  background-color: #000000;\n  border-top: 1px solid #EEEEEE;\n  margin-top: 2.5rem;\n  padding-bottom: 2.5rem;\n  padding-top: 2.5rem;\n  width: 100%; }\n  .vin-app-footer-brand {\n    height: 50px;\n    width: 230px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../Client/modules/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_configuration_service__ = __webpack_require__("../../../../../Client/modules/shared/services/configuration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(titleService, configurationService) {
        this.titleService = titleService;
        this.configurationService = configurationService;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('app on init');
        //Get configuration from server environment variables:
        console.log('configuration');
        this.configurationService.load();
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle('VIN Web App');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'vin-app',
        styles: [__webpack_require__("../../../../../Client/modules/app.component.scss")],
        template: __webpack_require__("../../../../../Client/modules/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_configuration_service__["a" /* ConfigurationService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../Client/modules/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../Client/modules/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../Client/modules/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../Client/modules/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../Client/modules/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__members_members_module__ = __webpack_require__("../../../../../Client/modules/members/members.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { FormsModule } from '@angular/forms';






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            // Only module that app module loads
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__members_members_module__["a" /* MembersModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../Client/modules/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__members_members_component__ = __webpack_require__("../../../../../Client/modules/members/members.component.ts");


var routes = [
    //{ path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_1__members_members_component__["a" /* MembersComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../Client/modules/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = (function () {
    function AppService() {
    }
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppService);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../Client/modules/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<vin-header url=\"/catalog\">Back to catalog</vin-header>\r\n<div class=\"container\">\r\n    <div class=\"alert alert-warning vin-member-alert\" role=\"alert\" [hidden]=\"!errorReceived\">\r\n        Error requesting members list, please try later on\r\n    </div>\r\n    <div *ngIf=\"members?.data?.length > 0\">\r\n        <vin-pager [model]=\"paginationInfo\" (changed)=\"onPageChanged($event)\"></vin-pager>        \r\n        <div class=\"card-group vin-member-items row\">\r\n            <div class=\"vin-member-item col-md-4\"\r\n                 *ngFor=\"let item of members.data\">\r\n\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title vin-member-name\">{{item.userName}}</h4>\r\n                    <ng-template #showDefaultDetailsLink>\r\n                        <input [ngClass]=\"{'vin-member-button': true}\" type=\"submit\" value=\"More details\" routerLink=\"/members/{{item.id}}\">\r\n                    </ng-template>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n        <vin-pager [model]=\"paginationInfo\" (changed)=\"onPageChanged($event)\"></vin-pager>\r\n    </div>\r\n    <div *ngIf=\"members?.data?.length == 0\">\r\n        <span>THERE ARE NO RESULTS THAT MATCH YOUR SEARCH</span>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../Client/modules/members/members.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vin-member-title {\n  position: relative;\n  top: 74.28571429px; }\n\n.vin-member-items {\n  margin-top: 1rem; }\n\n.vin-member-item {\n  margin-bottom: 1.5rem;\n  text-align: center;\n  width: 33%;\n  display: inline-block;\n  float: none !important; }\n\n@media screen and (max-width: 1024px) {\n    .vin-member-item {\n      width: 50%; } }\n\n@media screen and (max-width: 768px) {\n    .vin-member-item {\n      width: 100%; } }\n\n.vin-member-thumbnail {\n  max-width: 370px;\n  width: 100%; }\n\n.vin-member-button {\n  background-color: #83D01B;\n  border: 0;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-size: 1rem;\n  height: 3rem;\n  margin-top: 1rem;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  width: 80%; }\n\n.vin-member-button.is-disabled {\n    opacity: .5;\n    pointer-events: none; }\n\n.vin-member-button:hover {\n    background-color: #4a760f;\n    -webkit-transition: all 0.35s;\n    transition: all 0.35s; }\n\n.vin-member-name {\n  font-size: 1rem;\n  font-weight: 300;\n  margin-top: .5rem;\n  text-align: center;\n  text-transform: uppercase; }\n\n.vin-member-alert {\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../Client/modules/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__members_service__ = __webpack_require__("../../../../../Client/modules/members/members.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_configuration_service__ = __webpack_require__("../../../../../Client/modules/shared/services/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MembersComponent = (function () {
    function MembersComponent(service, configurationService) {
        this.service = service;
        this.configurationService = configurationService;
        this.interval = null;
    }
    MembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.configurationService.isReady) {
            this.getMembers(10, 0);
        }
        else {
            this.configurationService.settingsLoaded$.subscribe(function (x) {
                _this.getMembers(10, 0);
            });
        }
    };
    MembersComponent.prototype.onPageChanged = function (value) {
        console.log('members pager event fired' + value);
        //event.preventDefault();
        this.paginationInfo.actualPage = value;
        this.getMembers(this.paginationInfo.itemsPage, value);
    };
    MembersComponent.prototype.getMembers = function (pageSize, pageIndex) {
        var _this = this;
        this.errorReceived = false;
        this.service.getMembers(pageIndex, pageSize)
            .catch(function (err) { return _this.handleError(err); })
            .subscribe(function (response) {
            _this.members = response.data;
            _this.paginationInfo = {
                actualPage: response.pageIndex,
                itemsPage: response.pageSize,
                totalItems: response.count,
                totalPages: Math.ceil(response.count / response.pageSize),
                items: response.pageSize
            };
        });
    };
    MembersComponent.prototype.handleError = function (error) {
        this.errorReceived = true;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    return MembersComponent;
}());
MembersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'vin-members',
        styles: [__webpack_require__("../../../../../Client/modules/members/members.component.scss")],
        template: __webpack_require__("../../../../../Client/modules/members/members.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__members_service__["a" /* MembersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__members_service__["a" /* MembersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_configuration_service__["a" /* ConfigurationService */]) === "function" && _b || Object])
], MembersComponent);

var _a, _b;
//# sourceMappingURL=members.component.js.map

/***/ }),

/***/ "../../../../../Client/modules/members/members.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../Client/modules/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__members_component__ = __webpack_require__("../../../../../Client/modules/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__members_service__ = __webpack_require__("../../../../../Client/modules/members/members.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MembersModule = (function () {
    function MembersModule() {
    }
    return MembersModule;
}());
MembersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__members_component__["a" /* MembersComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__members_service__["a" /* MembersService */]]
    })
], MembersModule);

//# sourceMappingURL=members.module.js.map

/***/ }),

/***/ "../../../../../Client/modules/members/members.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__ = __webpack_require__("../../../../../Client/modules/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_configuration_service__ = __webpack_require__("../../../../../Client/modules/shared/services/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MembersService = (function () {
    function MembersService(service, configurationService) {
        var _this = this;
        this.service = service;
        this.configurationService = configurationService;
        this.membersUrl = '';
        if (this.configurationService.isReady)
            this.membersUrl = this.configurationService.serverSettings.memberAPIUrl;
        else
            this.configurationService.settingsLoaded$.subscribe(function (x) { return _this.membersUrl = _this.configurationService.serverSettings.memberAPIUrl; });
    }
    MembersService.prototype.getMembers = function (pageNumber, pageSize) {
        var url = this.membersUrl + '/api/members';
        url = url + '?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
        return this.service.get(url).map(function (response) {
            return response.json();
        });
    };
    return MembersService;
}());
MembersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_configuration_service__["a" /* ConfigurationService */]) === "function" && _b || Object])
], MembersService);

var _a, _b;
//# sourceMappingURL=members.service.js.map

/***/ }),

/***/ "../../../../../Client/modules/shared/components/header/header.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vin-header\">\r\n    <div class=\"container\">\r\n        <a class=\"vin-header-back\" routerLink=\"{{url}}\">\r\n            <ng-content></ng-content>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../Client/modules/shared/components/header/header.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vin-header {\n  background-color: #00A69C;\n  height: 4rem; }\n  .vin-header-back {\n    color: rgba(255, 255, 255, 0.5);\n    line-height: 4rem;\n    text-decoration: none;\n    text-transform: uppercase;\n    -webkit-transition: color 0.35s;\n    transition: color 0.35s; }\n  .vin-header-back:hover {\n      color: #FFFFFF;\n      -webkit-transition: color 0.35s;\n      transition: color 0.35s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../Client/modules/shared/components/header/header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header = (function () {
    function Header() {
    }
    return Header;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], Header.prototype, "url", void 0);
Header = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'vin-header',
        template: __webpack_require__("../../../../../Client/modules/shared/components/header/header.html"),
        styles: [__webpack_require__("../../../../../Client/modules/shared/components/header/header.scss")]
    })
], Header);

//# sourceMappingURL=header.js.map

/***/ }),

/***/ "../../../../../Client/modules/shared/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>404!</h1>\r\n\r\n<p>Page you are looking for does not exists.</p>"

/***/ }),

/***/ "../../../../../Client/modules/shared/components/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../Client/modules/shared/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'appc-page-not-found',
        template: __webpack_require__("../../../../../Client/modules/shared/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../Client/modules/shared/components/page-not-found/page-not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../Client/modules/shared/components/pager/pager.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vin-pager\">\r\n    <div class=\"container\">\r\n        <article class=\"vin-pager-wrapper row\">\r\n            <nav>\r\n                <span class=\"vin-pager-item vin-pager-item--navigable\"\r\n                      id=\"Previous\"\r\n                      [ngClass]=\"{'is-disabled': buttonStates?.previousDisabled}\"\r\n                      (click)=\"onPreviousCliked($event)\"\r\n                      aria-label=\"Previous\">\r\n                    Previous\r\n                </span>\r\n\r\n                <span class=\"vin-pager-item\">\r\n                    Showing {{model?.items}} of {{model?.totalItems}} products - Page {{model?.actualPage + 1}} - {{model?.totalPages}}\r\n                </span>\r\n\r\n                <span class=\"vin-pager-item vin-pager-item--navigable\"\r\n                      id=\"Next\"\r\n                      [ngClass]=\"{'is-disabled': buttonStates?.nextDisabled}\"\r\n                      (click)=\"onNextClicked($event)\"\r\n                      aria-label=\"Next\">\r\n                    Next\r\n                </span>\r\n            </nav>\r\n        </article>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../Client/modules/shared/components/pager/pager.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vin-pager-wrapper {\n  padding-top: 1rem;\n  text-align: center; }\n\n.vin-pager-item {\n  margin: 0 5vw; }\n\n.vin-pager-item.is-disabled {\n    opacity: 0;\n    pointer-events: none; }\n\n.vin-pager-item--navigable {\n    cursor: pointer;\n    display: inline-block; }\n\n.vin-pager-item--navigable:hover {\n      color: #83D01B; }\n\n@media screen and (max-width: 1280px) {\n    .vin-pager-item {\n      font-size: 0.85rem; } }\n\n@media screen and (max-width: 1024px) {\n    .vin-pager-item {\n      margin: 0 2.5vw; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../Client/modules/shared/components/pager/pager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_pager_model__ = __webpack_require__("../../../../../Client/modules/shared/models/pager.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_pager_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_pager_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Pager = (function () {
    function Pager() {
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.buttonStates = {
            nextDisabled: true,
            previousDisabled: true,
        };
    }
    Pager.prototype.ngOnInit = function () {
    };
    Pager.prototype.ngOnChanges = function () {
        if (this.model) {
            this.model.items = (this.model.itemsPage > this.model.totalItems) ? this.model.totalItems : this.model.itemsPage;
            this.buttonStates.previousDisabled = (this.model.actualPage == 0);
            this.buttonStates.nextDisabled = (this.model.actualPage + 1 >= this.model.totalPages);
        }
    };
    Pager.prototype.onNextClicked = function (event) {
        event.preventDefault();
        console.log('Pager next clicked');
        this.changed.emit(this.model.actualPage + 1);
    };
    Pager.prototype.onPreviousCliked = function (event) {
        event.preventDefault();
        console.log('Pager previous clicked');
        this.changed.emit(this.model.actualPage - 1);
    };
    return Pager;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], Pager.prototype, "changed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models_pager_model__["IPager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_pager_model__["IPager"]) === "function" && _b || Object)
], Pager.prototype, "model", void 0);
Pager = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'vin-pager',
        template: __webpack_require__("../../../../../Client/modules/shared/components/pager/pager.html"),
        styles: [__webpack_require__("../../../../../Client/modules/shared/components/pager/pager.scss")]
    })
], Pager);

var _a, _b;
//# sourceMappingURL=pager.js.map

/***/ }),

/***/ "../../../../../Client/modules/shared/models/pager.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=pager.model.js.map

/***/ }),

/***/ "../../../../../Client/modules/shared/pipes/uppercase.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UppercasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UppercasePipe = (function () {
    function UppercasePipe() {
    }
    UppercasePipe.prototype.transform = function (value) {
        return value.toUpperCase();
    };
    return UppercasePipe;
}());
UppercasePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'appfUppercase'
    })
], UppercasePipe);

//# sourceMappingURL=uppercase.pipe.js.map

/***/ }),

/***/ "../../../../../Client/modules/shared/services/configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("../../../../../Client/modules/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfigurationService = (function () {
    function ConfigurationService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        // observable that is fired when settings are loaded from server
        this.settingsLoadedSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["b" /* Subject */]();
        this.settingsLoaded$ = this.settingsLoadedSource.asObservable();
        this.isReady = false;
    }
    ConfigurationService.prototype.load = function () {
        var _this = this;
        var baseURI = document.baseURI.endsWith('/') ? document.baseURI : document.baseURI + "/";
        var url = baseURI + "Home/Configuration";
        this.http.get(url).subscribe(function (response) {
            console.log('server settings loaded');
            _this.serverSettings = response.json();
            console.log(_this.serverSettings);
            _this.storageService.store('memberAPIUrl', _this.serverSettings.memberAPIUrl);
            _this.isReady = true;
            _this.settingsLoadedSource.next();
        });
    };
    return ConfigurationService;
}());
ConfigurationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], ConfigurationService);

var _a, _b;
//# sourceMappingURL=configuration.service.js.map

/***/ }),

/***/ "../../../../../Client/modules/shared/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Implementing a Retry-Circuit breaker policy 
// is pending to do for the SPA app
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.get = function (url, params) {
        var options = {};
        return this.http.get(url, options).map(function (res) {
            return res;
        }).catch(this.handleError);
    };
    DataService.prototype.postWithId = function (url, data, params) {
        return this.doPost(url, data, true, params);
    };
    DataService.prototype.post = function (url, data, params) {
        return this.doPost(url, data, false, params);
    };
    DataService.prototype.putWithId = function (url, data, params) {
        return this.doPut(url, data, true, params);
    };
    DataService.prototype.doPost = function (url, data, needId, params) {
        var options = {};
        return this.http.post(url, data, options).map(function (res) {
            return res;
        }).catch(this.handleError);
    };
    DataService.prototype.doPut = function (url, data, needId, params) {
        var options = {};
        options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.put(url, data, options).map(function (res) {
            return res;
        }).catch(this.handleError);
    };
    DataService.prototype.delete = function (url, params) {
        var options = {};
        console.log('data.service deleting');
        // return this.http.delete(url, options).subscribe(
        //        return res;
        //    );
        this.http.delete(url, options).subscribe(function (res) {
            console.log('deleted');
        });
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var errMessage = '';
            try {
                errMessage = error.json();
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMessage);
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error || 'server error');
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../Client/modules/shared/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
        this.storage = sessionStorage; // localStorage;
    }
    StorageService.prototype.retrieve = function (key) {
        var item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    };
    StorageService.prototype.store = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../Client/modules/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../Client/modules/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_configuration_service__ = __webpack_require__("../../../../../Client/modules/shared/services/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_storage_service__ = __webpack_require__("../../../../../Client/modules/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pager_pager__ = __webpack_require__("../../../../../Client/modules/shared/components/pager/pager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header__ = __webpack_require__("../../../../../Client/modules/shared/components/header/header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../Client/modules/shared/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_uppercase_pipe__ = __webpack_require__("../../../../../Client/modules/shared/pipes/uppercase.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Services



// Components:



// Pipes:

var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                // Providers
                __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_7__services_configuration_service__["a" /* ConfigurationService */],
                __WEBPACK_IMPORTED_MODULE_8__services_storage_service__["a" /* StorageService */]
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            // No need to export as these modules don't expose any components/directive etc'
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* JsonpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__components_pager_pager__["a" /* Pager */],
            __WEBPACK_IMPORTED_MODULE_10__components_header_header__["a" /* Header */],
            __WEBPACK_IMPORTED_MODULE_11__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_uppercase_pipe__["a" /* UppercasePipe */]
        ],
        exports: [
            // Modules
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            // Providers, Components, directive, pipes
            __WEBPACK_IMPORTED_MODULE_9__components_pager_pager__["a" /* Pager */],
            __WEBPACK_IMPORTED_MODULE_10__components_header_header__["a" /* Header */],
            __WEBPACK_IMPORTED_MODULE_11__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_uppercase_pipe__["a" /* UppercasePipe */]
        ]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../Client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map