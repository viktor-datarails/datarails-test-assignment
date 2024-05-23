import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAddTableDialogComponent } from './dr-add-table-dialog.component';

describe('DrAddTableDialogComponent', () => {
  let component: DrAddTableDialogComponent;
  let fixture: ComponentFixture<DrAddTableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrAddTableDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrAddTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
