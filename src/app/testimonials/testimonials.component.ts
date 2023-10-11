import { AfterViewInit, Component } from '@angular/core';
import { Observable, interval, map, of, startWith, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {

  testimonials: TestimonialsContainer[] = [{
    body: "Level Up is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    name: "Jesse Stevens",
    url: "https://www.linkedin.com/in/jesse-stevens-8b1a791b/",
    designation: "CEO at NewCo"
  },
  {
    body: "Level Up saved us a lot of time and money. It's really wonderful. I would like to personally thank you for your outstanding product.",
    name: "Helen Miller",
    url: "https://www.linkedin.com/in/helen-miller-0b7a791b/",
    designation: "CTO at NewCo"
  },
  {
    body: "Since I invested in Level Up I made over 100,000 dollars profits. Level Up is the next killer app. I would gladly pay over 600 dollars for Level Up. Level Up is the most valuable business resource we have EVER purchased.",
    name: "Dorothy Morris",
    url: "https://www.linkedin.com/in/dorothy-morris-0b7a791b/",
    designation: "CEO at NewCo"
  },
  {
    body: "I would like to personally thank you for your outstanding product. Level Up is awesome! I am so pleased with this product.",
    name: "Craig Smith",
    url: "https://www.linkedin.com/in/craig-smith-0b7a791b/",
    designation: "CEO at NewCo"
  }];

  ngAfterViewInit(): void {
    interval(2000).pipe(take(this.testimonials.length - 1),map((i) => this.testimonials[i+1]),tap((testimonial) => this.selectedTestimonial = testimonial)).subscribe();
  }

  selectedTestimonial: TestimonialsContainer = this.testimonials[0];

  onCarouselChange(button: boolean = true) {
    let selectedIndex = this.testimonials.indexOf(this.selectedTestimonial);
    if(button && selectedIndex > 0)
      this.selectedTestimonial = this.testimonials[selectedIndex - 1];
    else if(selectedIndex < this.testimonials.length - 1)
      this.selectedTestimonial = this.testimonials[selectedIndex + 1];
  }

  get leftCarouselButtonDisabled() {
    return this.testimonials.indexOf(this.selectedTestimonial) === 0;
  }

  get rightCarouselButtonDisabled() {
    return this.testimonials.indexOf(this.selectedTestimonial) === this.testimonials.length - 1;
  }
}

export interface TestimonialsContainer {
  body: string;
  name: string;
  url: string;
  designation: string;

}
