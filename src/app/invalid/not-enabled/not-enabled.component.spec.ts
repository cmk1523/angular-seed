import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotEnabledComponent } from './not-enabled.component';
import {RouterTestingModule} from '@angular/router/testing';

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
