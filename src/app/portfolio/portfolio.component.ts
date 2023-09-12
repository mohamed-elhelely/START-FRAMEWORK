import { Component } from '@angular/core';
declare let $: any
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PORTFOLIOComponent {
  x: any = ``
  modal(z: any) {
    this.x = `assets/images/${z}.png`
  }
}
