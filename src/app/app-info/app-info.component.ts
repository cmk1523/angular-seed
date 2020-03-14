import {BaseAngularComponent} from '../shared/components/base-angular/base-angular.component';
import {Component, OnInit} from '@angular/core';
import {AppService} from '../shared/services/app.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss']
})
export class AppInfoComponent extends BaseAngularComponent implements OnInit {

  constructor(protected appService: AppService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
