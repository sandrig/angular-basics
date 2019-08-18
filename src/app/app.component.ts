import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  img = 'https://miro.medium.com/max/512/1*gGh9I9ju9w4lXhmWoG2fXA.png';

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/thumb/angular2.png';
    }, 3000);
  }
}
