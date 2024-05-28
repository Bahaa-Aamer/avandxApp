import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSecComponent } from './clients-sec.component';

describe('ClientsSecComponent', () => {
  let component: ClientsSecComponent;
  let fixture: ComponentFixture<ClientsSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsSecComponent]
    });
    fixture = TestBed.createComponent(ClientsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
