import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxComponent } from './aux.component';

describe('AuxComponent', () => {
  let component: AuxComponent;
  let fixture: ComponentFixture<AuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuxComponent]
    });
    fixture = TestBed.createComponent(AuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
