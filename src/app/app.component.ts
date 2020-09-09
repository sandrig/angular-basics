import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = '';
  searchField = 'title';

  posts: Post[] = [
    { title: 'Angular', text: 'Angular is a platform for building mobile and desktop web applications. '},
    { title: 'React', text: 'A JavaScript library for building user interfaces.'},
    { title: 'Vue', text: 'The Progressive JavaScript Framework'},
  ];

  addPost() {
    this.posts.unshift({
      title: 'Angular 10',
      text: 'How to learn Angular?'
    });
  }
}
