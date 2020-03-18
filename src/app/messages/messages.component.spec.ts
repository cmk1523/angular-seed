import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../shared/services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CustomTableComponent} from '../shared/components/custom-table/custom-table.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MaterialModule} from '../shared/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppService} from '../shared/services/app.service';
import {MessageService} from '../shared/services/message.service';

describe('Messages', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        MessagesComponent
      ],
      providers: [
        AppService,
        MessageService,
        { provide: HttpClient, useValue: {} },
        EventService,
        { provide: MatSnackBar, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
