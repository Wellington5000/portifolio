import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.createAnimation();
  }

  createAnimation(): void {
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse'
    });

    gsap.to('.img-container', {
      scale: 100,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,
        start: 'top top',
        end: 'bottom',
        pin: true
      }
    });

    gsap.to('.right', {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        start: 1
      }
    });

    gsap.to('.left', {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        start: 1
      }
    });

    gsap.to('.navbar', {
      background: "linear-gradient(to right, #0e131f, #38405F, #0e131f)",
      duration: 1.5,
      scrollTrigger: {
        start: 1
      }
    });

    gsap.to('.txt-bottom', {
      autoAlpha: 0,
      y: 500,
      duration: 1.5,
      scrollTrigger: {
        start: 1
      }
    });  
    
    gsap.from('.logo-name', {
      autoAlpha: 0,
      y: 50,
      opacity: 1,
      duration: 1,
      delay: 0.75,
      scrollTrigger: {
        start: 1
      }
    });

    const tl = gsap.timeline({
      ease: 'ease'
    });

    tl.from('.left-side div', {
      y: 150,
      opacity: 0,
      stagger: {
        amount: .4
      },
      delay: .5
    }).from('.right-side', {
      opacity: 0,
      duration: 2
    },.5);

    ScrollTrigger.create({
      animation:  tl,
      trigger: '.wrapper',
      start: 'top top',
      end: '+=600',
      scrub: 1,
    });

    const timeline = gsap.timeline();

    timeline.from('.title span', {
      y: 150,
      skewY: 7,
      duration: 3
    });

    gsap.fromTo('.txt-bottom', {
      letterSpacing: -10,
      opacity: 0
    },{
      delay: 2,
      letterSpacing: 12,
      opacity: 1,
      duration: 0.5
    })
  }
}
