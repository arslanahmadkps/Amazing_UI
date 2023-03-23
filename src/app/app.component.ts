import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'Amazing_UI';

  public studentName: string;

  public subjectsList: string[];

  constructor() {
    this.studentName = 'Sample Student Name';
    this.subjectsList = ['English', 'Physics', 'Math'];
  }

  ngOnInit() {
    // use this method to get data form external services (Http service etc.)

  }
}
