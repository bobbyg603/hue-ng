import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { title: 'Groups', fragment: 'groups' },
    { title: 'Lights', fragment: 'lights' }
  ];

  constructor(public route: ActivatedRoute) {}
}
