import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenService } from 'hans-lib';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
    console.log(this.screenService.mediaBreakpoint$.value);
  }

  get width() {
    return this.screenService.screenWidth$.value;
  }
  get breakpoint() {
    return this.screenService.mediaBreakpoint$.value;
  }

  get condition() {
    return (this.screenService.screenWidth$.value > 638);
  }
}
