import {Component, OnInit} from '@angular/core';
import {BaseAngularComponent} from '../../shared/components/base-angular/base-angular.component';
import {AppService} from '../../shared/services/app.service';

@Component({
  selector: 'app-not-enabled',
  templateUrl: './not-enabled.component.html',
  styleUrls: ['./not-enabled.component.css']
})
export class NotEnabledComponent extends BaseAngularComponent implements OnInit {
  constructor(protected appService: AppService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
