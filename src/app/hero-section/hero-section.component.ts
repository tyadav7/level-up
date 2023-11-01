import { trigger, transition, animate, style } from '@angular/animations';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  
})
export class HeroSectionComponent implements AfterViewInit {

  imagesFolder: string = '../../assets/img/';
  imagesCount: number = 9;

  private _currentImageCount = 1;
  private _images: string[];

  constructor() {
    this._images = Array.from(Array(this.imagesCount).keys()).map((x) => this.imagesFolder + (x + 1) + ".jpg");
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
      this._currentImageCount = (this._currentImageCount + 1) % this.imagesCount;
      console.log(this._currentImageCount);
    }, 4000); // Change images every 3 seconds
  }

}
