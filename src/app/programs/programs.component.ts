import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  starter = [
    "Personalized 1-on-1 private lessons",
    "Tailored instruction for all skill levels",
    "Fundamental grasp for beginners",
    "Fine-tuning and strategic insights for advanced players",
    "Dedicated coaches committed to your goals",
    "Elevate your game to new heights"
  ];

  semiPrivate = [
    "Dive into dynamic semi-private tennis lessons.",
    "Bring a partner for an enjoyable learning experience.",
    "Experience a lively and engaging tennis atmosphere.",
    "Foster healthy competition and boost each other's skills.",
    "Learn and have a blast on the court with a companion.",
    "Motivate and excel together in our collaborative sessions."
  ];
}
