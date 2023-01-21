import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CallsService, EngineService, INotifyConfig } from 'hans-lib';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  message: INotifyConfig | undefined;
  constructor(private engineService: EngineService, private callService: CallsService) { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    mobileNumber: new FormControl(null, Validators.required),
    emailAddress: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })

  validForm() {
    this.message = { success: false, notifyMessage: 'Please complete the form' };
    this.contactForm.invalid ? this.engineService.changeNotifyMessage(this.message) : "";
  }
  submit(post: any) {
    console.log(post);
  }
}
