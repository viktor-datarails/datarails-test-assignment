import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrFieldsComponent } from './dr-fields.component';

describe('DrDieldsComponent', () => {
  let component: DrFieldsComponent;
  let fixture: ComponentFixture<DrFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
