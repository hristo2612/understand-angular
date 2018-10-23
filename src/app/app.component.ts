import { Component } from '@angular/core';

interface IDeveloper {
  name: string;
  shortName: string;
  reKnown: string;
  bio: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query: string;
  developers: IDeveloper[];

  public showDeveloper(developer) {
    this.query = developer.name;
    developer.highlight = true;
  }
  constructor() {
    this.query = '';
    this.developers = [
      {
        name: 'Hristo Bogoev',
        shortName: 'icko',
        reKnown: 'Software University from outta space',
        bio: 'Likes to learn and teach great stuff',
      },
      {
        name: 'Linus Torvalds',
        shortName: 'linus',
        reKnown: 'Unknown',
        bio: 'Writes linux things..',
      },
      {
        name: 'Bai Ganio',
        shortName: 'bai ganio',
        reKnown: 'From MIT',
        bio: 'Goes around and around and around..',
      }
    ];
  }
}
