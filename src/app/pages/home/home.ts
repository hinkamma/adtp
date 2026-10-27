import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @ViewChild('sliderTrack', { static: false }) sliderTrack!: ElementRef;

  currentIndex = 0;
  totalCards = 0;

  ngAfterViewInit() {
    const track = this.sliderTrack.nativeElement;
    this.totalCards = track.querySelectorAll('.expertise-slide-item').length;
  }

  scrollSlider(direction: 'left' | 'right') {
    const track = this.sliderTrack.nativeElement;
    const cards = track.querySelectorAll('.expertise-slide-item');
    this.totalCards = cards.length;

    if (this.totalCards === 0) return;

    if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % this.totalCards;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
    }

    const targetCard = cards[this.currentIndex] as HTMLElement;

    // Défilement fluide forcé
    track.scrollTo({
      left: targetCard.offsetLeft - track.offsetLeft,
      behavior: 'smooth'
    });
  }
}
