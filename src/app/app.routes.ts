import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { YstarComponent } from './components/projects/ystar/ystar.component';
import { WishlistComponent } from './components/projects/wishlist/wishlist.component';
import { LovebatteryComponent } from './components/projects/lovebattery/lovebattery.component';
import { GalaxyfireComponent } from './components/projects/galaxyfire/galaxyfire.component';
import { JerseypkrComponent } from './components/projects/jerseypkr/jerseypkr.component';
import { LogosComponent } from './components/projects/logos/logos.component';
import { MotiongraphicsComponent } from './components/projects/motiongraphics/motiongraphics.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/ystar', component: YstarComponent },
  { path: 'projects/wishlist', component: WishlistComponent },
  { path: 'projects/galaxyfire', component: GalaxyfireComponent },
  { path: 'projects/jerseypkr', component: JerseypkrComponent },
  { path: 'projects/logos', component: LogosComponent },
  { path: 'projects/lovebattery', component: LovebatteryComponent },
  { path: 'projects/motiongraphics', component: MotiongraphicsComponent }

];
