import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseIsolationHydrofuge } from './expertise-isolation-hydrofuge';

describe('ExpertiseIsolationHydrofuge', () => {
  let component: ExpertiseIsolationHydrofuge;
  let fixture: ComponentFixture<ExpertiseIsolationHydrofuge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseIsolationHydrofuge],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertiseIsolationHydrofuge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
