import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var x = document.createElement("IMG");
    x.setAttribute("src", "../assets/images/girl-dumbell.jpeg");
    const elem = document.getElementById('carousel');
    elem?.appendChild(x);
  }

}
