import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from './shared/services/app.service';
import {first, takeUntil} from 'rxjs/operators';
import {BaseAngularComponent} from './shared/base-angular/base-angular.component';
import {EventService} from './shared/services/event.service';
import {MatSidenav, MatSidenavContainer} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseAngularComponent implements OnInit {
  initializing = true;
  sideNavOpened = true;
  title = 'angular-seed';

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor(private appService: AppService,
              private eventService: EventService) {
    super();
  }

  ngOnInit(): void {
    this.eventService.sideNavToggle.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.sidenav.toggle();
    });

    this.appService.appInfo.pipe(first()).subscribe(
      (appInfo: any) => {
        this.appInfo = appInfo;
        document.title = this.appInfo.title;

        setTimeout(() => {
          this.initializing = false;
        });
      });
  }
}
