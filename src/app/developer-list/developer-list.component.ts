import { Component, Input, OnInit } from '@angular/core';
import { IDeveloper } from '../models/developer.model';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html'
})

export class DeveloperListComponent implements OnInit {

  @Input() developer: IDeveloper;

  constructor() {

  }

  ngOnInit() {

  }

}
