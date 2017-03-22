"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var SalesComponent = (function () {
    function SalesComponent(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
        this.randomQuote = '';
    }
    SalesComponent.prototype.saveProduct = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/saveProduct", { headers: this.getHeaders() })
            .map(function (res) { return res.text(); })
            .subscribe(function (data) {
            _this.randomQuote = data;
            console.log(_this.randomQuote);
        }, function (err) { return _this.logError(err); });
    };
    SalesComponent.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    SalesComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    return SalesComponent;
}());
SalesComponent = __decorate([
    core_1.Component({
        selector: 'sales',
        templateUrl: 'app/view/sales.html'
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SalesComponent);
exports.SalesComponent = SalesComponent;
;
//# sourceMappingURL=sales.component.js.map