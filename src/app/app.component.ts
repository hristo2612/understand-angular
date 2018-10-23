import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeveloper } from './models/developer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query: string;
  developers: IDeveloper[] = [];
  currentDeveloper?: IDeveloper;

  public showDeveloper(developer) {
    this.query = '';
    this.currentDeveloper = developer;
  }

  ngOnInit(): void {
    this.http.get<IDeveloper[]>('./assets/data.json').subscribe((data) => {
      this.developers = data;
    });
  }

  constructor(private http: HttpClient) {
    this.query = '';
  }
}
