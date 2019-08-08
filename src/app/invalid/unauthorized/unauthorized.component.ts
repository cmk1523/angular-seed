import { Component, OnInit } from '@angular/core';
import {BaseAngularComponent} from '../../shared/base-angular/base-angular.component';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent extends BaseAngularComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
