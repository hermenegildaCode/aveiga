import { Component } from '@angular/core';
import { MemoirsComponent } from './Memoirs/memoirs/memoirs.component';
import { PhotosComponent } from './Photos/photos/photos.component';
import { PoemsComponent } from './Poems/poems/poems.component';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router,
    private titleService:Title) {
  this.titleService.setTitle("A. Veiga");
  }

handleLinkClick(link: string) {
  this.activeLink = link;
  this.router.navigate([link]); // Navigate to the specified link
}
  title = 'A. Veiga';
  isScreenSmall(): boolean {
    console.log(window.innerWidth);
    return window.innerWidth < 500;
  }
  links = ['home', 'memoirs', 'photos', 'poems'];
  titles = ['Inicio', 'Memorias', 'Galería', 'Poemas'];
  activeLink = this.links[1];

}
