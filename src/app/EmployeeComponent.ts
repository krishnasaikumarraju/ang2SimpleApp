import {Component} from '@angular/core';
import {style} from '@angular/animations';

@Component({
  selector : 'app-root',
  template : '<table><tr><td>Name</td><td>{{name}}</td></tr><tr><td>ID</td><td>{{id}}</td></tr><tr><td>Basic</td><td>{{basic}}</td></tr>' +
             ' <tr><td>Allowance</td><td>{{getAllowance()}}</td></tr><tr><td>Tax</td><td>{{getTax()}}</td></tr></table>',
  styles : ['table {background-color: olive;color: white;margin: 0 auto} td{border:1px solid white;padding: 2px;}']
})

export class EmployeeComponent {

  id = 1001;
  name = 'Krishna';
  basic = 30000.00;

  getAllowance(): number {
    return this.basic * 0.26;
  }

  getTax(): number {
    return this.basic * 0.10;
  }

}

