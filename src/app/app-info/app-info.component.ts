import { Component, OnInit } from '@angular/core';
import {BaseAngularComponent} from '../shared/base-angular/base-angular.component';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss']
})
export class AppInfoComponent extends BaseAngularComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
