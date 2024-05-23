import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrUsersComponent } from './dr-users.component';

describe('DrUsersComponent', () => {
  let component: DrUsersComponent;
  let fixture: ComponentFixture<DrUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
