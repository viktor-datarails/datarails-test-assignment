import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSidenavComponent } from './dr-sidenav.component';

describe('DrSidenavComponent', () => {
  let component: DrSidenavComponent;
  let fixture: ComponentFixture<DrSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
