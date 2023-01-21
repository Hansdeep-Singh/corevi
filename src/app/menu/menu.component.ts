import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService, ScreenService } from 'hans-lib';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private screenService: ScreenService, private authService: AuthService) { }

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

  get logged() {
    return this.authService?.isloggedin;
  }

  showLogin() {
    let nodeList = document.querySelectorAll("section:not(#login):not(#notify)");
    let loginElement = document.getElementById("login");
    nodeList.forEach(element => {
      if (element !== loginElement) { element.classList.add("blur") }
    });
    loginElement?.classList.remove("d-none");
    loginElement?.classList.add("d-block");
  }
}
