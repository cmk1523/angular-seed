import { Component, OnInit } from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {AppService} from '../services/app.service';

export class BaseAngularComponent implements OnInit {
  appInfo: any = AppService.APP_INFO;
  snackBarTimeout = 2000;
  showBreadcrumbs = true;
  REQUIRED = 'required';
  BASIC_EMPTY_VALUE_MSG = 'You must enter a value';
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor() { }

  ngOnInit() {
  }

  protected destroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
