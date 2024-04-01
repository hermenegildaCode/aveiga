import { Injectable } from '@angular/core'
@Injectable()
export class ImageService {
  allImages: { id: number; url: string; caption: string }[] = [];

  getImages() {
      return this.allImages = galleryImages.slice(0);
  }

  getImage(id: number) {
      return galleryImages.slice(0).find(Images => Images.id == id)
  }
}
const galleryImages = [
  { "id": 0, "url": "assets/f0.jpg", "caption": "En el Junquito, Caracas"  },
  { "id": 1, "url": "assets/f1.jpg", "caption": "En mi Lincoln" },
  { "id": 2, "url": "assets/f2.jpg", "caption": "Na malla, ano 64, sacada por Iberio" },
  { "id": 3, "url": "assets/f3.jpg", "caption": "Orto cando non había pantano" },
  { "id": 4, "url": "assets/f4.jpg", "caption": "En un ferry" },
  { "id": 5, "url": "assets/f5.jpg", "caption": "Coruña adornada un día que ía Franco" },
  { "id": 6, "url": "assets/f6.jpg", "caption": "No ferry que ía ó Salto do Ángel" },
  { "id": 7, "url": "assets/f7.jpg", "caption": "No ferry cruzando o orinoco cara o Salto do Ángel" },
  { "id": 8, "url": "assets/f8.jpg", "caption": "El tren del parque del Este, Caracas" },
  { "id": 9, "url": "assets/f9.jpg", "caption": "Gabino en Orto" },
  { "id": 10, "url": "assets/f10.jpg", "caption": "Yo"  },
  { "id": 11, "url": "assets/f11.jpg", "caption": "Fotografía sacada en Venezuela"  },
  { "id": 12, "url": "assets/f12.jpg", "caption": "Vista del Junquito"  }
]
