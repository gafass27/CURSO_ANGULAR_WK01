import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtedtedComponent } from './protedted.component';

describe('ProtedtedComponent', () => {
  let component: ProtedtedComponent;
  let fixture: ComponentFixture<ProtedtedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtedtedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtedtedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
