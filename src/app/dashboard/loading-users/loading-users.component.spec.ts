import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingUsersComponent } from './loading-users.component';

describe('LoadingUsersComponent', () => {
  let component: LoadingUsersComponent;
  let fixture: ComponentFixture<LoadingUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
