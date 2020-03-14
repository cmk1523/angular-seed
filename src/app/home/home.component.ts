import {BaseAngularComponent} from '../shared/base-angular/base-angular.component';
import {Component, OnInit} from '@angular/core';
import {AppService} from '../shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseAngularComponent implements OnInit {
  constructor(protected appService: AppService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
