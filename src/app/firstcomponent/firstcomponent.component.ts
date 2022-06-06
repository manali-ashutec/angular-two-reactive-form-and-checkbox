import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css'],
})
export class FirstcomponentComponent implements OnInit {
  checkbox;
  @Input() namesInput = [];
  @Output() myOutput: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkbox = this.formBuilder.group({
      field: ['', this.formBuilder.array([], [Validators.required])],
    });
  }
  submit() {
    console.log(this.checkbox.value);
  }
  onCheckboxChange(e) {
    const field: FormArray = this.checkbox.get('field') as FormArray;
    // console.log(e.target.value);
    this.myOutput.emit(e.target.value);
  }
}
