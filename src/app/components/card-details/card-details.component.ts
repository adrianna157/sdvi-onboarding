import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() card?: Card;

  constructor() {
  }

  ngOnInit(): void {
  }

}
