import {ReplaySubject} from 'rxjs';
import {AppService} from '../../services/app.service';
import {OnInit} from '@angular/core';

export class BaseAngularComponent implements OnInit {
  appInfo: any = AppService.APP_INFO || {};
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(protected appService: AppService) { }

  ngOnInit() {
    // this.appService.getAppInfo().subscribe((appInfo: any) => {
    //   this.appInfo = appInfo;
    // });
  }

  protected destroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
