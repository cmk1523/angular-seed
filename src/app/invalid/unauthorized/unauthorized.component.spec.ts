import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedComponent } from './unauthorized.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../../shared/services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('NotEnabledComponent', () => {
  let component: UnauthorizedComponent;
  let fixture: ComponentFixture<UnauthorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnauthorizedComponent
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
    fixture = TestBed.createComponent(UnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
