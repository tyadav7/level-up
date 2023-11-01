import { AfterViewInit, Component } from '@angular/core';
import { Observable, interval, map, of, startWith, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {

  testimonials: TestimonialsContainer[] = [{
    body: "Obviously, Jatin is a young but experienced tennis player and coach, full of energy and passion about tennis. Both my husband and myself have been learning from him for a while already and we made significant progress. Due to his previous overseas experiences, Jatin's teaching is mix of Asian and western style that could suit people with both culture as we are an international family. We look forward to moving on to next level of playing with him in near future.",
    name: "Jesse Stevens",
    url: "https://www.linkedin.com/in/jesse-stevens-8b1a791b/",
    designation: "CEO at NewCo"
  },
  {
    body: "Jatin has been coaching me for the past 1.5 years and he has really helped me improve my game. I have been playing tennis for a long time but never really got the opportunity to learn the proper basic techniques. With little tweaks here and there taught by Jatin, he has been able to help me up my game to another level. Thank you Jatin!",
    name: "Helen Miller",
    url: "https://www.linkedin.com/in/helen-miller-0b7a791b/",
    designation: "CTO at NewCo"
  },
  {
    body: "“Jatin Dahiya has been giving me tennis lessons since May 2023. He is a wonderful tennis coach and has a great sense of humour. Over the past few months, Jatin has helped me to improve my ground strokes, volleys, approach shots and my footwork around the tennis court.  Furthermore, he has also helped me to improve my serve which some of my previous tennis coaches were unable to do. I also like how Jatin gives me continuous feedback during my tennis lessons and tells me how to improve my strokes and my footwork.  Giving ongoing feedback has been really appreciated. I have no hesitation in recommending Jatin to anyone who wants to improve their tennis skills”.",
    name: "Alice Thompson",
    url: "https://www.linkedin.com/in/dorothy-morris-0b7a791b/",
    designation: "CEO at NewCo"
  },
  {
    body: "As an ex-ATP player who has worked with various tour professionals, Jatin is a highly technical coach who focuses heavily on technical aspects of tennis. He has improved the quality of my daughter's ball striking on both wings and achieved better consistency and ball trajectory with higher spin rpm. Kudos to the excellent work done across the various tournaments. Many thanks! ",
    name: "Spex U10 Singles Finalist / Doubles Winner",
    url: "https://www.linkedin.com/in/craig-smith-0b7a791b/",
    designation: "NSG Greenball Overall 1st (Tier 1)"
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
