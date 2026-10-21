import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseRenovInterne } from './expertise-renov-interne';

describe('ExpertiseRenovInterne', () => {
  let component: ExpertiseRenovInterne;
  let fixture: ComponentFixture<ExpertiseRenovInterne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseRenovInterne],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertiseRenovInterne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
