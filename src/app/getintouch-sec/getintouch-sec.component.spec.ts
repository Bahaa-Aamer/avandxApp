import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetintouchSecComponent } from './getintouch-sec.component';

describe('GetintouchSecComponent', () => {
  let component: GetintouchSecComponent;
  let fixture: ComponentFixture<GetintouchSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetintouchSecComponent]
    });
    fixture = TestBed.createComponent(GetintouchSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
