import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDemo1Component } from './test-demo-1.component';

describe('TestDemo1Component', () => {
  let component: TestDemo1Component;
  let fixture: ComponentFixture<TestDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDemo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
