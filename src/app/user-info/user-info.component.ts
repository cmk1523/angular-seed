import { Component, OnInit } from '@angular/core';
import {BaseAngularComponent} from '../shared/base-angular/base-angular.component';
import {AppService} from '../shared/services/app.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent extends BaseAngularComponent implements OnInit {

  constructor(protected appService: AppService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
