import {AppService} from './shared/services/app.service';
import {first, takeUntil} from 'rxjs/operators';
import {BaseAngularComponent} from './shared/base-angular/base-angular.component';
import {EventService} from './shared/services/event.service';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseAngularComponent implements OnInit, OnDestroy {
  initializing = true;
  sideNavOpened = true;
  title = 'angular-seed';

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor(protected appService: AppService,
              protected eventService: EventService) {
    super(appService);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.eventService.sideNavToggle.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.sidenav.toggle();
    });

    this.appService.appInfo.pipe(first()).subscribe((appInfo: any) => {
      this.appInfo = appInfo;
      document.title = this.appInfo.title;

      setTimeout(() => {
        this.initializing = false;
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
