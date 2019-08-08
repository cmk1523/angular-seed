import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import {SharedComponentsModule} from '../../shared/components/shared-components.module';
import {RouterTestingModule} from '@angular/router/testing';
import {InMemoryDatabase} from '../../shared/InMemoryDatabase';
import {AppService} from '../../shared/services/app.service';

describe('NotEnabledComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent
      ],
      imports: [
        SharedComponentsModule,
        RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    AppService.APP_INFO = InMemoryDatabase.GenerateAppInfoResponse().data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
