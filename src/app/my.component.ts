import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my',
  template: `
    <p>
      my works! <br />
      <input #myMsgInput value="carl" /> <br />
      msg: {{ msg }} <br />
      <button (click)="sayName(myMsgInput)">say</button>
    </p>
  `,
  styles: []
})
export class MyComponent implements OnInit {

  constructor() { }

  msg = ""
  ngOnInit() {
  }

  // sayName(input) {
  //   this.msg = input.value;
  // }

  // or use @ViewChild Decorator for this method
  @ViewChild("myMsgInput") myMsg;
  sayName(input) {    
    this.msg = this.myMsg.nativeElement.value;
  }
}
