import { Component } from '@angular/core';
import { ImageService } from './images.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(":leave", [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' })),
      ])
    ])
  ],
})
export class PhotosComponent {
  images: { id: number; url: string; caption: string}[] = [];
  filterBy?: string = 'all'
  allImages: { id: number; url: string; caption: string}[] = [];
  activeLink = this.allImages[0];

  constructor(private imageService: ImageService,private router: Router) {
    this.allImages = this.imageService.getImages();
    console.log('this.allImages',this.allImages);
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }
}
