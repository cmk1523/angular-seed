import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAngularComponent } from './base-angular.component';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../../services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AppService} from '../../services/app.service';

describe('BaseAngularComponent', () => {
  it('should create', () => {
    const component: BaseAngularComponent = new BaseAngularComponent({} as AppService);
    expect(component).toBeTruthy();
  });
});
