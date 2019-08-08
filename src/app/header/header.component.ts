import { Component, OnInit } from '@angular/core';
import {BaseAngularComponent} from '../shared/base-angular/base-angular.component';
import {EventService} from '../shared/services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseAngularComponent implements OnInit {

  constructor(private eventService: EventService) {
    super();
  }

  ngOnInit() {
  }

  sideNavBtnClicked() {
    this.eventService.sideNavToggle.next(true);
  }
}
