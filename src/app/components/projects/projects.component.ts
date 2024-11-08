import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true, // Mark as standalone
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projects = [
    {
      title: 'YoungStar Club',
      link: '/projects/ystar', // Make sure this matches your route path
      image: 'assets/images/ys_wireframe.png',
      metadata: '2016 | HTML5, CSS3, JavaScript, Bootstrap, jQuery, Adobe Suite',
      subtitle: 'Sports Club Website',
      description: 'A responsive website created for a sports club as a freelancer project.'
    },
    {
      title: 'Wishlist Function',
      link: '/projects/wishlist',
      image: 'assets/images/sk3.png',
      metadata: '2018 | Sketch, Illustrator',
      subtitle: 'Sketch Wireframe',
      description: 'An experiment with Sketch app, creating a wireframe for an e-commerce wishlist function.'
    },
    {
      title: 'Galaxy Fire',
      link: '/projects/galaxyfire',
      image: 'assets/images/unity.png',
      metadata: '2017 | Unity 3D, Autodesk Maya, C++, Photoshop',
      subtitle: 'A Shooting Game',
      description: 'Developed a simple shooting game in Unity 3D with C# scripting.'
    },
    {
      title: 'Love Battery',
      link: '/projects/lovebattery',
      image: 'assets/images/3d2.png',
      metadata: '2017 | Adobe Photoshop, Autodesk Maya, Premiere Pro',
      subtitle: 'Short 3D Animation',
      description: 'A short 3D animation involving scripting, modeling, rigging, texturing, and final editing.'
    },
    {
      title: 'Motion Graphics',
      link: '/projects/motiongraphics',
      image: 'assets/images/mgraphic.png',
      metadata: '2016 | After Effects, Photoshop, Illustrator, Premiere Pro',
      subtitle: 'TV Promo for YoungStar Club',
      description: 'A piece of digital footage animation combined with audio for a sports club promo.'
    },
    {
      title: 'JerseyPkr',
      link: '/projects/jerseypkr',
      image: 'assets/images/jp4.png',
      metadata: '2012 | Photoshop, Balsamiq Mockups, HTML, CSS',
      subtitle: 'E-commerce Prototype',
      description: 'A dummy e-commerce site prototype where customers can buy products using PayPal.'
    },
    {
      title: 'Digital Elements',
      link: '/projects/logos',
      image: 'assets/images/logo2.png',
      metadata: 'Photoshop, Illustrator',
      subtitle: 'Logos and Templates',
      description: 'Various logos and web templates designed for freelance projects.'
    }
  ];
}
