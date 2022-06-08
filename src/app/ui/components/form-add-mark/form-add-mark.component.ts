import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-mark',
  templateUrl: './form-add-mark.component.html',
  styleUrls: ['./form-add-mark.component.scss'],
})
export class FormAddMarkComponent implements OnInit {
  form_add_mark!: FormGroup;
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form_add_mark = this.formBuilder.group({
      site_name: ['', [Validators.required,Validators.minLength(4)]],
      url: ['', [Validators.required, Validators.pattern(this.urlRegex)]],
    });
  }

  save(){
    console.log(this.form_add_mark.valid)
  }
}
