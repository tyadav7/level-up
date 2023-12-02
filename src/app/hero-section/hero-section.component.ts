import { trigger, transition, animate, style } from '@angular/animations';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  
})
export class HeroSectionComponent implements AfterViewInit {

  imagesFolder: string = '../../assets/img/';
  allowedImages = [1,3,4,5,6,7];

  private _currentImageCount = 1;
  private _images: string[];

  constructor() {
    this._images = this.allowedImages.map((x) => this.imagesFolder + (x) + ".jpg");
  }

  ngAfterViewInit(): void {
    this.startAutoPlay();
  }
  

  public get currentImageUrl() {
    return this._images[this._currentImageCount];
  }

  public get images() {
    return this._images;
  }

  startAutoPlay() {
    setInterval(() => {
      this._currentImageCount = (this._currentImageCount + 1) % this.allowedImages.length;
      console.log(this._currentImageCount);
    }, 4000); // Change images every 3 seconds
  }

}
