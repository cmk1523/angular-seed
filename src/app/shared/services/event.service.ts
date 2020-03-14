import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public loading: Subject<any> = new Subject<any>();
  public sideNavToggle: Subject<any> = new Subject<any>();

  constructor() { }

}
