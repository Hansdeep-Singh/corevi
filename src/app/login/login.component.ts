import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, CallsService, CookieService, EngineService, INotifyConfig, SessionService } from 'hans-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: INotifyConfig | undefined;

  constructor(private router: Router,
    private callsService: CallsService,
    private cookieService: CookieService,
    private engineService: EngineService,
    private sessionService: SessionService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    emailAddress: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  validForm() {
    this.message = { success: false, notifyMessage: 'Please complete the form' };
    this.loginForm.invalid ? this.engineService.changeNotifyMessage(this.message) : "";
  }
  submit(post: any) {
    this.callsService.post("User", "LoginViaEmailAddress", post)
      .subscribe((data) => {
        const notify = data.notify;
        if (data?.success) {
          const payload = JSON.parse(data?.payload);
          this.cookieService.setCookieStringify("user", payload?.User, 1);
          this.cookieService.setCookie("refreshToken", payload?.Tokens?.RefreshToken, 1)
          this.authService.accessToken = payload?.Tokens?.AccessToken;

          if (payload?.User?.Roles == 'Admin') this.router.navigate(['./admin']);
          else this.router.navigate(['./secure']);

          this.message = { success: true, notifyMessage: notify.message };
          this.engineService.changeNotifyMessage(this.message);
          this.hideLogin();
          // this.close.emit(false); This is used to close the notification.
        }
        else {
          this.message = { success: notify.success, notifyMessage: notify.message };
          this.engineService.changeNotifyMessage(this.message);
        }
      });
  }

  hideLogin() {
    let nodeList = document.querySelectorAll("section:not(#login)");
    let loginElement = document.getElementById("login");
    nodeList.forEach(element => {
      if (element !== loginElement) { element.classList.remove("blur") }
    });
    loginElement?.classList.add("d-none");

  }

}
