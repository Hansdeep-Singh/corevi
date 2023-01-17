import { Component } from '@angular/core';
import { EngineService, LoadingService, notifyAnimation } from 'hans-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [notifyAnimation.notifyTrigger],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nglar';
  constructor(private engineService: EngineService, public loadingService: LoadingService) { }
  ngOnInit(): void {
    this.loadingService.isloading$.subscribe((data) => { console.log(data) });
    this.engineService.currentNotifyMessage.subscribe((message) => {
      if (message && !message?.success) {
        this.flagShowHide = !message.success;
      }
      else if (message && message?.success) {
        this.flagShowHide = message.success;
      }
    });
  }
  flagShowHide: boolean = false;
  closeNotification($event: boolean): void {
    this.flagShowHide = $event;
  }
}

