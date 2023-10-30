import { trigger, transition, animate, style } from '@angular/animations';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  
})
export class HeroSectionComponent implements AfterViewInit {

  images: string[] = [
    '../../assets/img/2.jpg',
    '../../assets/img/3.jpg',
    '../../assets/img/4.jpg',
    '../../assets/img/5.jpg',
    '../../assets/img/1.jpg',
    
  ];
  _currentImage = 0;

  public get currentImageUrl() {
    return this.images[this._currentImage];
  }

  ngAfterViewInit(): void {
    this.startAutoPlay();
  }

  startAutoPlay() {
    setInterval(() => {
      this._currentImage = (this._currentImage + 1) % this.images.length;
      console.log(this._currentImage);
    }, 4000); // Change images every 3 seconds
  }

}
