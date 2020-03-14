import {BaseAngularComponent} from '../shared/base-angular/base-angular.component';
import {EventService} from '../shared/services/event.service';
import {Component, OnInit} from '@angular/core';
import {AppService} from '../shared/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseAngularComponent implements OnInit {

  constructor(protected appService: AppService, protected eventService: EventService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  sideNavBtnClicked() {
    this.eventService.sideNavToggle.next(true);
  }
}
