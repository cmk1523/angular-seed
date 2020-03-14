import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import {HttpClient} from '@angular/common/http';
import {EventService} from './event.service';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('BaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseService = new BaseService({} as HttpClient, {} as EventService, {} as MatSnackBar);
    expect(service).toBeTruthy();
  });
});
