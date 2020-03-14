import {BaseAngularComponent} from '../../shared/components/base-angular/base-angular.component';
import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/services/app.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent extends BaseAngularComponent implements OnInit {
  constructor(protected appService: AppService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
