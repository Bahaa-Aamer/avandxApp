import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefSecComponent } from './brief-sec.component';

describe('BriefSecComponent', () => {
  let component: BriefSecComponent;
  let fixture: ComponentFixture<BriefSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BriefSecComponent]
    });
    fixture = TestBed.createComponent(BriefSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
