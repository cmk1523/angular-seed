import { Component, OnInit } from '@angular/core';
import {BaseAngularComponent} from '../../shared/base-angular/base-angular.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends BaseAngularComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
