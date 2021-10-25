import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { TASKS } from 'src/app/mock-tasks';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() card?: Card;
  tasks = TASKS;
  constructor() {
  }

  ngOnInit(): void {
  }

}
