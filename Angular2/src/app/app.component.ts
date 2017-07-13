import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
<h1> {{ 'Here are :' + pageheader}}</h1>
<h1> {{ fullname()}}</h1>
<img [src]='imagepath'/>
<my-Employee></my-Employee>
</div>`,
})
export class AppComponent {
    pageheader = 'Employee Details';
    imagepath = 'https://www.petersons.com/resources/cloud/images/pi-assets/logo.png';
    firstname: string = 'Om Prakash';
    lastname: string = 'Golla';

    fullname():string {
        return this.firstname + ' ' + this.lastname;





    }
}
