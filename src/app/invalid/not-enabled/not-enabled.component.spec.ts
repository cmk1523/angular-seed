import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotEnabledComponent } from './not-enabled.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../../shared/services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('NotEnabledComponent', () => {
  let component: NotEnabledComponent;
  let fixture: ComponentFixture<NotEnabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotEnabledComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
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
    fixture = TestBed.createComponent(NotEnabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
