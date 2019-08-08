import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {timeout} from 'rxjs/operators';
import {EventService} from './event.service';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseService {
  public static APP_INFO: any = null;
  protected appUrl = this.baseUrl + 'api/v1/app';
  public appInfo: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(protected http: HttpClient, protected eventService: EventService, protected snackBar: MatSnackBar) {
    super(http, eventService, snackBar);
  }

  getAppInfo(): Observable<any> {
    return new Observable((observer) => {
      if (!AppService.APP_INFO) {
        this.eventService.loading.next(true);

        // TODO: ...
        AppService.APP_INFO = {
          title: 'test title',
          version: '0.0.1',
          buildNumber: 1,
          buildDateTime: '2019-08-07T20:24:00.000Z',
          user: {
            id: '01234567890',
            name: 'test user'
          }
        };
        this.appInfo.next(AppService.APP_INFO);

        this.eventService.loading.next(false);
        observer.next(AppService.APP_INFO);
        observer.complete();
      } else {
        observer.next(AppService.APP_INFO);
        observer.complete();
      }
    });
  }

  saveSettings(settings: any): Observable<any> {
    return new Observable((observer) => {
      this.eventService.loading.next(true);
      // TODO: ...
      this.eventService.loading.next(false);
      observer.next(AppService.APP_INFO);
      observer.complete();
    });
  }
}
