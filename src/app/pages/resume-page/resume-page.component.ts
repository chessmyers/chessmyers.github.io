import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  title = "My Resume";
  subtitle = "Last updated: February 2022";

  constructor() { }

  ngOnInit(): void {
  }

}
