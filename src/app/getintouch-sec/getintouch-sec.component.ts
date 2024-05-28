import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-getintouch-sec',
  templateUrl: './getintouch-sec.component.html',
  styleUrls: ['./getintouch-sec.component.css']
})
export class GetintouchSecComponent implements OnInit{


  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('^[^0-9]*$')]],
      phone: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      this.contactForm.reset();
    } else {
      console.log('Form is not valid.');
    }
  }

} 
