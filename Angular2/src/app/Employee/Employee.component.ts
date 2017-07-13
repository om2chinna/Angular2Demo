import { Component } from '@angular/core';

@Component({
    selector: 'my-Employee',
    templateUrl: 'app/Employee/Employee.component.html',
    styleUrls: ['app/Employee/Employee.component.css']

})

export class Employeecomponent {

    firstname: string = "OM Prakash";
    age: string = "26";
    place: string = "Bellary";

}