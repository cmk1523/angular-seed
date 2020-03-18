import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import {HttpClient} from '@angular/common/http';
import {EventService} from './event.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessageService} from './message.service';

describe('MessageService', () => {
  beforeEach(() => {});

  it('should be created', () => {
    const appService: AppService = new AppService({} as HttpClient, {} as EventService, {} as MatSnackBar);
    const service: MessageService = new MessageService({} as HttpClient, {} as EventService, {} as MatSnackBar, appService);
    expect(service).toBeTruthy();
  });
});
