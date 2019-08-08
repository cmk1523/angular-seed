import { Component, OnInit } from '@angular/core';
import {BaseAngularComponent} from '../shared/base-angular/base-angular.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent extends BaseAngularComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
