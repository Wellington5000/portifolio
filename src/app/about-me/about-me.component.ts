import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.createAnimation();
  }

  createAnimation(): void {
    const amImg = document.querySelector('.am-img');
    const amInfo = document.querySelector('.am-info');

    gsap.from('.am-info div', {
      x: -300,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: amInfo
    })
    
    gsap.fromTo(amImg, {
      opacity: 0,
      y: 300,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: amInfo

    });

    // gsap.fromTo(amText, {
    //   opacity: 0,
    //   x: 300,
    //   skewX: 65
    // }, {
    //   opacity: 1,
    //   x: 0,
    //   skewX: 0,
    //   duration: 1,
    //   delay: 1,
    //   scrollTrigger: amText
    // });
  }
}
