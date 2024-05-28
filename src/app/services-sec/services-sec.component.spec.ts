import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSecComponent } from './services-sec.component';

describe('ServicesSecComponent', () => {
  let component: ServicesSecComponent;
  let fixture: ComponentFixture<ServicesSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesSecComponent]
    });
    fixture = TestBed.createComponent(ServicesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
