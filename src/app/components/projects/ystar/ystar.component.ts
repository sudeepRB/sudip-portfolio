import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ystar',
  templateUrl: './ystar.component.html',
  styleUrls: ['./ystar.component.scss'],
  standalone: true,
  imports: [CommonModule] // Include this line to ensure *ngFor works
})
export class YstarComponent {
  currentSlide = 0;
  wireframeImages = [
    { src: 'assets/images/HomePage.png', alt: 'Home Page', caption: 'Home Page' },
    { src: 'assets/images/About_club.png', alt: 'Club History', caption: 'About Club History' },
    { src: 'assets/images/About_Players.png', alt: 'Players Profile', caption: 'Player Profile' },
    { src: 'assets/images/B_league.png', alt: 'B_league', caption: 'Tournament Gallery Page 1' },
    { src: 'assets/images/Pleague.png', alt: 'Pleague', caption: 'Tournament Gallery Page 2' },
    { src: 'assets/images/Feedback.png', alt: 'Feedback', caption: 'Feedback Page' },
    { src: 'assets/images/Join.png', alt: 'Join', caption: 'Join Page' }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.wireframeImages.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.wireframeImages.length) % this.wireframeImages.length;
  }
}
