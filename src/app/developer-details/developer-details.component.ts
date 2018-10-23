import { Component, Input, OnInit } from '@angular/core';
import { IDeveloper } from '../models/developer.model';

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html'
})
export class DeveloperDetailsComponent implements OnInit {

  @Input() developer: IDeveloper;

  constructor() { }

  ngOnInit() {
  }

}
