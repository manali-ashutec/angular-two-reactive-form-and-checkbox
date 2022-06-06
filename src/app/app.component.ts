import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Form1;
  checkbox;
  names = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.Form1 = this.formBuilder.group({
      field: ['', Validators.required],
    });
    this.checkbox = this.formBuilder.group({
      field: ['', this.formBuilder.array([], [Validators.required])],
    });
  }

  onSubmit(value) {
    // console.log(value);
    this.names.push(value.field);
  }
  submit() {
    console.log(this.checkbox.value);
  }
  onCheckboxChange(e) {
    const field: FormArray = this.checkbox.get('field') as FormArray;
    console.log(e.target.value);
    // if (e.target.checked) {
    //   field.push(new FormControl(e.target.value));
    //   console.log(e.target.value);
    // } else {
    //   let i: number = 0;
    //   field.controls.forEach((item: FormControl) => {
    //     if (item.value == e.target.value) {
    //       field.removeAt(i);
    //       return;
    //     }
    //     i++;
    //   });
    // }
  }
}
