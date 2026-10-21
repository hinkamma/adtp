import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Realisation } from './realisation';

describe('Realisation', () => {
  let component: Realisation;
  let fixture: ComponentFixture<Realisation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Realisation],
    }).compileComponents();

    fixture = TestBed.createComponent(Realisation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
