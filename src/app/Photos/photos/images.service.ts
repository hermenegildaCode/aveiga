import { Injectable } from '@angular/core'
@Injectable()
export class ImageService {
  allImages: { id: number; url: string; }[] = [];

  getImages() {
      return this.allImages = galleryImages.slice(0);
  }

  getImage(id: number) {
      return galleryImages.slice(0).find(Images => Images.id == id)
  }
}
const galleryImages = [
  { "id": 0, "url": "assets/f0.jpg" },
  { "id": 1, "url": "assets/f1.jpg" },
  { "id": 2, "url": "assets/f2.jpg" },
  { "id": 3, "url": "assets/f3.jpg" },
  { "id": 4, "url": "assets/f4.jpg" },
  { "id": 5, "url": "assets/f5.jpg" },
  { "id": 6, "url": "assets/f6.jpg" },
  { "id": 7, "url": "assets/f7.jpg" }
]
