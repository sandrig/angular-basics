import { Component } from '@angular/core';
import { AppCounterService } from '../services/app-counter.service';
import { LocalCounterService } from '../services/local-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent {

  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) {}
}
