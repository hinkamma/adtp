import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationDetails } from './realisation-details';

describe('RealisationDetails', () => {
  let component: RealisationDetails;
  let fixture: ComponentFixture<RealisationDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealisationDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(RealisationDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
