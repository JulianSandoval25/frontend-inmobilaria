import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer-component',
  templateUrl: './image-viewer-component.component.html',
  styleUrls: ['./image-viewer-component.component.css']
})
export class ImageViewerComponentComponent {
 @Input() images!: string[];
  currentIndex = 0;
  get currentImage() {
    return this.images[this.currentIndex];
  }
  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  nextImage(){
    if (this.currentIndex <this.images.length) {
      this.currentIndex++;
    }
  }
}
