import {BaseAngularComponent} from '../../shared/base-angular/base-angular.component';
import {Component, OnInit} from '@angular/core';

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
