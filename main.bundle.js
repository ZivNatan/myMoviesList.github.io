webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.list-tools{\r\n    padding: 5px 20px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.item-card{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-radius: 10px;\r\n    background-color: #ededed;\r\n    margin: 20px;\r\n    padding: 10px;\r\n    position: relative;\r\n\r\n}\r\n.add-btn {\r\n    max-height: 30px;\r\n}\r\n.truncate {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    line-height: 1.5;\r\n  }\r\n.list-wrapper {\r\n    max-height: 600px;\r\n    overflow: auto;\r\n\r\n}\r\n.poster-wrapper{\r\n    height: 200px;\r\n    width: 150px;\r\n}\r\n.poster{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.card-details{\r\n    padding-left: 10px;\r\n    width: calc(100% - 200px);\r\n}\r\n.action-btns-wrapper{\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 35px;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.delete-btn{\r\n    width: 10px;\r\n    height: 10px;\r\n    -webkit-appearance: none;\r\n\r\n}\r\n.edit-btn{\r\n    width: 10px;\r\n    height: 10px;\r\n    -webkit-appearance: none;\r\n\r\n}\r\n.edit-btn:hover {\r\n    cursor: pointer;\r\n    color:#1ad84c;\r\n   \r\n}\r\n.delete-btn:hover {\r\n    cursor: pointer;\r\n    color:#d82019;\r\n}\r\n.modal-header .close {\r\n    padding: 1rem 1rem;\r\n    margin: -1rem;\r\n    margin-right: 0;\r\n}\r\n.modal-header {\r\n    -webkit-box-pack: left;\r\n        -ms-flex-pack: left;\r\n            justify-content: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <!-- <h1>\n    Welcome to {{ title }}!\n  </h1> -->\n  <img width=\"100\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n\n\n<div class=\"container\">\n\n  <div class=\"list-tools\">\n      <h2 class=\"main-title\">Movies list: </h2>\n      <button class=\"add-btn btn btn-sm btn-primary\" (click)=\"modalTitle='Add'; formItem = {}; f.submitted = false;\"  data-toggle=\"modal\" data-target=\"#formModel\">Add</button>\n  </div>\n<div class=\"list-wrapper\" [ngStyle]=\"{'height': height + 'px'}\">\n  <div class=\"item-card\" *ngFor=\"let item of list; let index = index;  trackBy: index;\">\n      <div class=\"poster-wrapper\">\n        <img [src]=\"item.Poster\" class=\"poster\" >\n      </div>\n      <div class=\"card-details\">\n          <h4 title=\"{{fixTitle(item.Title)}}\" class=\"truncate\">{{fixTitle(item.Title)}}</h4> \n          <span>{{item.Year}}</span>\n          <div class=\"action-btns-wrapper\">\n              <div  (click)=\"editMovie(item,index,'Edit');\" type=\"button\" class=\"fa fa-edit edit-btn\" data-toggle=\"modal\" data-target=\"#formModel\"></div>\n              <div (click)=\"selectedIndex = index\" type=\"button\" class=\"fa fa-trash delete-btn\" data-toggle=\"modal\" data-target=\"#deleteModel\"></div>\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n\n\n\n  <!-- Modal deleteModel -->\n  <div class=\"modal fade\" id=\"deleteModel\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Notice!</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>Are you sure you want to delete this item?</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\" data-dismiss=\"modal\" (click)=\"deleteItem()\">Delete</button>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  \n\n    <!-- Modal formModel-->\n    <div class=\"modal fade\" id=\"formModel\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n        \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\"  id=\"close\"class=\"close\" [attr.data-dismiss]='f.valid || modalTitle==\"Add\" ? \"modal\" : null'>&times;</button>\n              <h4 class=\"modal-title\">{{modalTitle}} Movie</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form name=\"form\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group\">\n                        <label for=\"title\">Title</label>\n                        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"formItem.Title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" required />\n                        <div *ngIf=\"f.submitted && f.controls.title.invalid\" class=\"invalid-feedback\">\n                            <div>Title is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"year\">Year</label>\n                        <input type=\"text\" class=\"form-control\" name=\"year\" [(ngModel)]=\"formItem.Year\" #year=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && year.invalid }\" required />\n                        <div *ngIf=\"f.submitted && f.controls.year.invalid\" class=\"invalid-feedback\">\n                            <div >Year is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"type\">Type</label>\n                        <input type=\"text\" class=\"form-control\" name=\"type\" [(ngModel)]=\"formItem.Type\" #type=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && type.invalid }\" required />\n                        <div *ngIf=\"f.submitted && f.controls.type.invalid\" class=\"invalid-feedback\">\n                            <div >Type is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"poster\">Poster</label>\n                        <input type=\"text\" class=\"form-control\" name=\"poster\" [(ngModel)]=\"formItem.Poster\" #poster=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && poster.invalid }\" required />\n                        <div *ngIf=\"f.submitted && f.controls.poster.invalid\" class=\"invalid-feedback\">\n                            <div>Poster is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-sm btn-primary\" (click)=\"submitMovie(f)\" type=\"submit\" [attr.data-dismiss]='f.valid ? \"modal\" : null'>Submit</button>\n                    </div>\n                   \n                </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_data_service__ = __webpack_require__("../../../../../src/app/get-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(getDataService) {
        this.getDataService = getDataService;
        this.title = 'app';
        this.formItem = {};
        this.selectedItem = {
            title: ''
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.height = window.innerHeight - 150;
        this.getDataService.getMovies(1).subscribe(function (response) {
            _this.list = response['Search'];
        });
    };
    AppComponent.prototype.deleteItem = function () {
        this.list.splice(this.selectedIndex, 1);
    };
    AppComponent.prototype.editMovie = function (item, index, title) {
        this.formItem = Object.create(item);
        this.selectedIndex = index;
        this.modalTitle = title;
    };
    AppComponent.prototype.submitMovie = function (form) {
        console.log(form);
        if (form.valid) {
            if (this.modalTitle === 'Add') {
                this.list.push(this.formItem);
            }
            else {
                this.list[this.selectedIndex] = this.formItem;
            }
            form.submitted = false;
        }
    };
    AppComponent.prototype.fixTitle = function (title) {
        title = title.trim();
        title = title.replace(/[^A-Za-z0-9 ]/g, '');
        title = title.toLocaleLowerCase();
        var arrayOfWords = title.split(' ');
        arrayOfWords = arrayOfWords.map(function (word) {
            return word.replace(/^\w/, function (c) { return c.toUpperCase(); });
        });
        title = arrayOfWords.join(' ');
        // console.log('words', words );
        // title = title.replace(/^\w/, c => c.toUpperCase());
        return title;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__get_data_service__["a" /* GetDataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_data_service__ = __webpack_require__("../../../../../src/app/get-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__get_data_service__["a" /* GetDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/get-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetDataService = /** @class */ (function () {
    function GetDataService(http) {
        this.http = http;
    }
    GetDataService.prototype.getMovies = function (page) {
        return this.http.get('http://www.omdbapi.com/?s=Batman&apikey=50df8ebb&page=1');
    };
    GetDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GetDataService);
    return GetDataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map