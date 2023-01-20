import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, CallsService, CookieService, EngineService, INotifyConfig, UtilitiesService } from 'hans-lib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message: INotifyConfig | undefined;
  constructor(private utilityService: UtilitiesService, private engineService: EngineService, private callService: CallsService, private cookieService: CookieService,
    private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    emailAddress: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  validForm() {
    this.message = { success: false, notifyMessage: 'Please complete the form' };
    this.registerForm.invalid ? this.engineService.changeNotifyMessage(this.message) : "";
  }
  submit(post: any) {
    this.callService.post('User', 'RegisterAuthEmail', post)
      .subscribe((data) => {
        const notify = data?.notify;
        if (data.success) {
          const payload = JSON.parse(data?.payload);
          this.cookieService.setCookieStringify("user", payload?.User, 1);
          this.cookieService.setCookie("refreshToken", payload?.Tokens?.RefreshToken, 1)
          this.authService.accessToken = payload?.Tokens?.AccessToken;

          if (payload?.User?.Roles == 'Admin') this.router.navigate(['./admin']);
          else this.router.navigate(['./secure']);

          this.message = { success: true, notifyMessage: notify.message };
          this.engineService.changeNotifyMessage(this.message);
        }
        else {
          this.message = { success: false, notifyMessage: notify.message };
          this.engineService.changeNotifyMessage(this.message);
        }

      })
  }

}
