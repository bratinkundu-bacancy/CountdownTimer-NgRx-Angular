import { Component, OnInit } from '@angular/core';
import { CountdownService } from 'src/app/Services/countdowntimer.service';
import { countdownReducer } from 'src/app/Store/contdowntimer.reducer';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  constructor(public countdownService : CountdownService) { }

  ngOnInit(): void {
  }

  public hasRemainingTime(result : any): boolean {
    return (
      result.milliseconds > 0
    )
  }

  sample(){
    setInterval(() => {
      this.countdownService.count.subscribe(res => {
        console.log(res)
      })
    }, 1000);
  }
}
