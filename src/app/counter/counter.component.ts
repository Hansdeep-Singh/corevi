import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() maxnumber = 0;
  @Input() interval = 0;
  @Input() speed = 0;
  timer: any;
  number: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      if (this.number < this.maxnumber) {
        this.number += this.interval;
      }
      else {
        clearInterval(this.timer);
      }
    }, this.speed)

  }


}
