import { Component } from '@angular/core';
import { ImageService } from './images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  images: { id: number; url: string; }[] = [];
  filterBy?: string = 'all'
  allImages: { id: number; url: string; }[] = [];
  activeLink = this.allImages[0];

  constructor(private imageService: ImageService,private router: Router) {
    this.allImages = this.imageService.getImages();
    console.log('this.allImages',this.allImages);
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }
}
