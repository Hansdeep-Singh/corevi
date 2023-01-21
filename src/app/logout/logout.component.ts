import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, CallsService, EngineService } from 'hans-lib';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private router: Router, private callsService: CallsService, private engineService: EngineService, private authService: AuthService) { }
  message: any | undefined;
  logout() {
    this.callsService.post('User', 'LogOut').subscribe(async (data) => {
      const notify = data.notify;
      this.message = { success: notify.success, notifyMessage: notify.message };
      await this.engineService.changeNotifyMessage(this.message);
      await this.authService.logout();
      await this.router.navigate(['/']);
    }
    )
  }
}
