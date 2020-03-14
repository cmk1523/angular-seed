import {BaseAngularComponent} from '../../shared/components/base-angular/base-angular.component';
import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/services/app.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends BaseAngularComponent implements OnInit {
  constructor(protected appService: AppService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
