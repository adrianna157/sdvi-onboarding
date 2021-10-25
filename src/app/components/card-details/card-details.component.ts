import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { TASKS } from 'src/app/mock-tasks';
import { CardService } from 'src/app/services/card.service';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  curr_index!: number;
  tasks = TASKS;



  constructor(private cardService: CardService) {

  }

  ngOnInit(): void {
    this.cardService.count.subscribe(c => {
      this.curr_index = c;
    })
  }


}
