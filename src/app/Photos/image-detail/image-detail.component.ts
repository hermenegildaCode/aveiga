import { Component } from '@angular/core';
import { ImageService } from '../photos/images.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent {
  image:any;
  hoverLeft: Boolean = false;
  hoverRight: Boolean = false;

  constructor(private router: Router,
    private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      this.route.snapshot.params['id']
    );
  }
  goToPrevImg() {
    if (this.image.id > 0) {
      this.image = this.imageService.getImage(this.image.id-1);
      this.router.navigate(['/photos' + this.image.id]);
    }
  }
  goToNextImg() {
    console.log('this.image', this.image);
    if (this.image.id < this.imageService.getImages().length - 1) {
      console.log('this.imageService.getImages().length', this.imageService.getImages().length);
      this.image = this.imageService.getImage(this.image.id+1);
       this.router.navigate(['/photos' + this.image.id]);
    }
  }
}
