import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAddUserDialogComponent } from './dr-add-user-dialog.component';

describe('DrAddUserDialogComponent', () => {
  let component: DrAddUserDialogComponent;
  let fixture: ComponentFixture<DrAddUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrAddUserDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrAddUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
