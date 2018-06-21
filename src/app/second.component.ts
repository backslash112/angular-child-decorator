import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div>
      second works!
      <p #name>carl</p>

      <p>cn name: {{ cnName }}</p>
      <p>en name: {{ enName }}</p>
      <button (click)="getName()">get name</button>
    </div>
  `,
  styles: []
})
export class SecondComponent implements OnInit {

  cnName = "";
  enName = "";
  constructor() { }

  ngOnInit() {
  }

  @ViewChild('name') enNameP;
  @ContentChild('realName') cnNameP;
  getName() {
    console.log('getname')
    this.enName = this.enNameP.nativeElement.textContent;
    this.cnName = this.cnNameP.nativeElement.textContent;
  }
}
