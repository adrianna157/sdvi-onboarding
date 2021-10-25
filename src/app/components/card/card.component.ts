import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { CardService } from 'src/app/services/card.service';
import { CardDetailsComponent } from '../card-details/card-details.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class Card implements OnInit {
  tasks = TASKS;
  curr_index!: number;


  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cardService.count.subscribe(c => {
      this.curr_index = c;
    });
  }
  onNext() {
    this.cardService.onNext();
  }
  onBack() {
    this.cardService.onBack();
  }
}
