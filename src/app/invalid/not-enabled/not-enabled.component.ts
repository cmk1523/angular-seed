import {Component, OnInit} from '@angular/core';
import {BaseAngularComponent} from '../../shared/base-angular/base-angular.component';

@Component({
  selector: 'app-not-enabled',
  templateUrl: './not-enabled.component.html',
  styleUrls: ['./not-enabled.component.css']
})
export class NotEnabledComponent extends BaseAngularComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
