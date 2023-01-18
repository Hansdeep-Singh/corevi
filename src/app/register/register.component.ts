import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EngineService, INotifyConfig, UtilitiesService } from 'hans-lib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message: INotifyConfig | undefined;
  constructor(private utilityService: UtilitiesService, private engineService: EngineService) { }

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
  }

}
