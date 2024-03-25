import { Component } from '@angular/core';
import { ImageService } from '../photos/images.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent {
  image:any;

  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      this.route.snapshot.params['id']
    );
    console.log('this.image', this.image);
  }
}
