import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  curr_index = 0;
  count: BehaviorSubject<number>;
  constructor() {
    this.count = new BehaviorSubject(this.curr_index);
  }

  onNext() {
    this.count.next(++this.curr_index);
  }
  onBack() {
    this.count.next(--this.curr_index);
  }
}
