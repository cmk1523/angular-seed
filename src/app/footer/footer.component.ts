import {BaseAngularComponent} from '../shared/components/base-angular/base-angular.component';
import {Component, OnInit} from '@angular/core';
import {AppService} from '../shared/services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseAngularComponent implements OnInit {

  constructor(protected appService: AppService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
