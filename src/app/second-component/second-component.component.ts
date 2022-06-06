import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent implements OnInit {
  @Input() second: string[];
  constructor() {
    console.log(this.second);
  }

  ngOnInit() {
    console.log(this.second);
  }
}
