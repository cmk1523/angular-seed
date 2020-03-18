import {AppService} from '../services/app.service';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {first} from 'rxjs/operators';

@Injectable()
export class BaseResolver implements Resolve<any> {
  appInfo: any = AppService.APP_INFO;

  constructor(protected appService: AppService, protected router: Router, protected snackBar: MatSnackBar) {}

  protected static HandleError(e: any, msg: any, snackBar: MatSnackBar) {
    console.log('ERROR - BaseResolver - Error: ', e);
    console.log('ERROR - ' + msg);

    if (e.message != null && e.message.indexOf('Read timed out') > -1) {
      snackBar.open(msg, 'Resolve Error - Request Timeout',
        { duration: AppService.DEFAULT_SNACKBAR_DURATION } );
    } else {
      snackBar.open(msg, 'Resolve Error',
        { duration: AppService.DEFAULT_SNACKBAR_DURATION });
    }
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return new Observable((observer) => {
      this.appService.getAppInfo().pipe(first()).subscribe((appInfo: any) => {
        this.appInfo = appInfo;
        // this.appInfo.user = User.ConvertToBasicUser(appInfo.user);

        // if (!this.appInfo.user.isEnabled()) {
        //   this.snackBar.open('Not Enabled', 'Forwarding',
        //     {duration: 2000});
        //   this.router.navigate(['/notenabled']);
        // }

        observer.next(appInfo);
      }, (e: any) => {
        BaseResolver.HandleError(e, 'BaseResolver - Unable to get application info', this.snackBar);
        window.location.href = './login';
        observer.complete();
      }, () => {
        observer.complete();
      });
    });
  }
}
