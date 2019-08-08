import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public loading: Subject<any> = new Subject<any>();
  public sideNavToggle: Subject<any> = new Subject<any>();

  constructor() { }

}
