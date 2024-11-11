import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sudip-portfolio';
  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (this.menuOpen) {
      link.classList.add('show');
    } else {
      link.classList.remove('show');
    }
  });
}



}
