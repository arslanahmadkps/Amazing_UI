import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public baseURL: string = 'http://localhost:4200/';
  public brandName: string = 'GUGGU INDUSTRIES';
  public tagLine: string = 'Your personal hygiene partner';

  constructor() {
  }

  ngOnInit() {
    // use this method to get data form external services (Http service etc.)

  }
}
