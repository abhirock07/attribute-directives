import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fruittype = false;
  log = [1];

  onfruittype() {

    this.fruittype = !this.fruittype;
    this.log.push(this.log.length +1);

  }

}

