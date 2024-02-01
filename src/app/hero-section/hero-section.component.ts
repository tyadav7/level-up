import { trigger, transition, animate, style } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this._images = this.allowedImages.map((x) => this.imagesFolder + (x) + ".jpg");
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) { 
      this.startAutoPlay();
    }     
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
    }, 4000); // Change images every 3 seconds
  }

}
