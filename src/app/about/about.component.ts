import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  images: string[] = [];
  ngOnInit(): void {
    this.images.push("../assets/images/about-2.jpg")
    this.images.push("../assets/images/about-1.jpg")
  }

}
