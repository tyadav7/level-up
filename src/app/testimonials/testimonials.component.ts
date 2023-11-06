import { AfterViewInit, Component } from '@angular/core';
import { Subscription, interval, tap } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {

  carouselSubscription!:Subscription;
  testimonials: TestimonialsContainer[] = [ {
    body: "Jatin, an ex-ATP player, excels in technical coaching. He enhanced my daughter's ball striking, achieving consistency and spin. Kudos for the excellent tournament results. Many thanks!",
    name: "Spex U10 Singles Finalist / Doubles Winner",
    url: "https://www.linkedin.com/in/craig-smith-0b7a791b/",
    designation: "NSG Greenball Overall 1st (Tier 1)"
  },
  {
    body: "I have been training with Jatin for 6 months now and came to him after training with 2 other coaches . Jatin has been very patient with me to improve my foundations and correct the fundamentals. I can already see an improvement in my game. He is a perfect balance between tough and fun and makes every session a combination of suffering and joy 😁",
  },
  {
    body: "Jatin, a dynamic and experienced tennis player and coach, fuels our passion for the sport. My husband and I have progressed under his guidance. His teaching blends Asian and Western styles, ideal for our international family. We're excited to elevate our game with him soon",
    url: "https://www.linkedin.com/in/jesse-stevens-8b1a791b/",
  },
  {
    body: "Jatin has been coaching me for the past 1.5 years and he has really helped me improve my game. I have been playing tennis for a long time but never really got the opportunity to learn the proper basic techniques. With little tweaks here and there taught by Jatin, he has been able to help me up my game to another level. Thank you Jatin!",
    url: "https://www.linkedin.com/in/helen-miller-0b7a791b/",
  },
  {
    body: "Jatin Dahiya, my tennis coach since May 2023, combines expert training with a great sense of humor. His guidance transformed my ground strokes, volleys, approach shots, and footwork. Unlike previous coaches, he honed my serve. Continuous feedback on my strokes and footwork was invaluable. I wholeheartedly recommend Jatin to boost your tennis skills.",
    url: "https://www.linkedin.com/in/dorothy-morris-0b7a791b/",
  }
 ];

  ngAfterViewInit(): void {

    this.carouselSubscription = interval(2000).pipe(tap((i) => this.selectedIndex = i%this.testimonials.length)).subscribe();
  }

  selectedIndex = 0;

  onCarouselChange(button: boolean = true) {
    if(!this.carouselSubscription.closed){
      this.carouselSubscription.unsubscribe();
    }
      
    let selectedIndex = this.selectedIndex;
    if(button && selectedIndex > 0)
      this.selectedIndex = selectedIndex - 1;
    else if(selectedIndex < this.testimonials.length - 1)
      this.selectedIndex = selectedIndex + 1;
  }

  get leftCarouselButtonDisabled() {
    return this.selectedIndex === 0;
  }

  get rightCarouselButtonDisabled() {
    return this.selectedIndex === this.testimonials.length - 1;
  }
}

export interface TestimonialsContainer {
  body: string;
  name?: string;
  url?: string;
  designation?: string;

}
