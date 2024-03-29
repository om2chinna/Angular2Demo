"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageheader = 'Employee Details';
        this.imagepath = 'https://www.petersons.com/resources/cloud/images/pi-assets/logo.png';
        this.firstname = 'Om Prakash';
        this.lastname = 'Golla';
    }
    AppComponent.prototype.fullname = function () {
        return this.firstname + ' ' + this.lastname;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n<h1> {{ 'Here are :' + pageheader}}</h1>\n<h1> {{ fullname()}}</h1>\n<img [src]='imagepath'/>\n<my-Employee></my-Employee>\n</div>",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map