import {Observable, ReplaySubject} from 'rxjs';
import {timeout} from 'rxjs/operators';
import {EventService} from './event.service';
import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AppInfo} from '../models/AppInfo';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseService {
  public static APP_INFO: AppInfo = {
    buildDateTime: '',
    buildNumber: '',
    title: '',
    user: {
      id: '',
      name: ''
    } as User,
    version: ''
  } as AppInfo;

  protected appUrl = this.baseUrl + 'api/v1/app';
  public appInfo: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(protected http: HttpClient, protected eventService: EventService, protected snackBar: MatSnackBar) {
    super(http, eventService, snackBar);
  }

  getAppInfo(): Observable<any> {
    return new Observable((observer) => {
      if (!AppService.APP_INFO.title) {
        this.eventService.loading.next(true);

        // TODO: ...
        AppService.APP_INFO = {
          title: 'Angular Seed',
          version: '0.0.1',
          buildNumber: '1234',
          buildDateTime: '2019-08-07T20:24:00.000Z',
          user: {
            id: '01234567890',
            name: 'test user'
          } as User
        } as AppInfo;

        this.appInfo.next(AppService.APP_INFO);
        this.eventService.loading.next(false);
      }

      observer.next(AppService.APP_INFO);
      observer.complete();
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
