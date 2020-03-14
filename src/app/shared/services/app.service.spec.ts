import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import {HttpClient} from '@angular/common/http';
import {EventService} from './event.service';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('AppService', () => {
  beforeEach(() => {});

  it('should be created', () => {
    const service: AppService = new AppService({} as HttpClient, {} as EventService, {} as MatSnackBar);
    expect(service).toBeTruthy();
  });
});
