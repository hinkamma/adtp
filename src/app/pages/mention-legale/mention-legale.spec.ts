import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionLegale } from './mention-legale';

describe('MentionLegale', () => {
  let component: MentionLegale;
  let fixture: ComponentFixture<MentionLegale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentionLegale],
    }).compileComponents();

    fixture = TestBed.createComponent(MentionLegale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
