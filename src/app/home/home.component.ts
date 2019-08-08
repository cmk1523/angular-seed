import { Component, OnInit } from '@angular/core';
import {BaseAngularComponent} from '../shared/base-angular/base-angular.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseAngularComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
