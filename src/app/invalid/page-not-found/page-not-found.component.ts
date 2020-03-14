import {Component, OnInit} from '@angular/core';
import {BaseAngularComponent} from '../../shared/base-angular/base-angular.component';
import {AppService} from '../../shared/services/app.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent extends BaseAngularComponent implements OnInit {
  constructor(protected appService: AppService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
