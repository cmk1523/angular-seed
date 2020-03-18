import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableComponent } from './custom-table.component';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../../services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('CustomTableComponent', () => {
  let component: CustomTableComponent<any>;
  let fixture: ComponentFixture<CustomTableComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTableComponent ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: HttpClient, useValue: {} },
        EventService,
        { provide: MatSnackBar, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
