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

  it('scrolls smoothly to the realisations section without adding a URL fragment', () => {
    const section = fixture.nativeElement.querySelector('#contenu-realisations') as HTMLElement;
    const scrollIntoView = vi.fn();
    section.scrollIntoView = scrollIntoView;

    fixture.nativeElement.querySelector('button').click();

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    expect(window.location.hash).toBe('');
  });

  it('shows only projects matching the selected gallery filter', () => {
    component.setFilter('toiture');
    expect(component.filteredProjets.map((projet) => projet.title)).toEqual([
      'Réfection complète de toiture',
    ]);

    component.setFilter('isolation');
    expect(component.filteredProjets.map((projet) => projet.title)).toEqual([
      'Isolation des murs par l’extérieur (ITE)',
      'Isolation des combles perdus',
    ]);

    component.setFilter('etancheite');
    expect(component.filteredProjets.map((projet) => projet.title)).toEqual([
      'Travaux d’étanchéité de terrasse',
    ]);

    component.setFilter('tous');
    expect(component.filteredProjets).toHaveLength(4);
  });
});
