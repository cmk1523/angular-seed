import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAddComponent } from './message-add.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MaterialModule} from '../shared/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessagesComponent} from '../messages/messages.component';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../shared/services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessageService} from '../shared/services/message.service';
import {Router} from '@angular/router';

describe('MessageAddComponent', () => {
  let component: MessageAddComponent;
  let fixture: ComponentFixture<MessageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        MessageAddComponent
      ],
      providers: [
        MessageService,
        { provide: MatSnackBar, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: HttpClient, useValue: {} },
        EventService,
        { provide: MatSnackBar, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
