"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employeecomponent = (function () {
    function Employeecomponent() {
        this.firstname = "OM Prakash";
        this.age = "26";
        this.place = "Bellary";
    }
    Employeecomponent = __decorate([
        core_1.Component({
            selector: 'my-Employee',
            templateUrl: 'app/Employee/Employee.component.html',
            styleUrls: ['app/Employee/Employee.component.css']
        })
    ], Employeecomponent);
    return Employeecomponent;
}());
exports.Employeecomponent = Employeecomponent;
//# sourceMappingURL=Employee.component.js.map