import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class Card implements OnInit {
  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
