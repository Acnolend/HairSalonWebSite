import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private images: string[] = [
    "assets/carousel/imagen1.jpg",
    "assets/carousel/imagen2.jpg",
    "assets/carousel/imagen3.jpg",
    "assets/carousel/imagen4.jpg",
  ]

  private currentIndex: number = 0;

  constructor() { }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  getCurrentImage() {
    return this.images[this.currentIndex];
  }
}
