import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { Start, Update, Resume, Pause, Cancel } from '../Store/countdowntimer.actions';


const shouldUpdate = (result: {milliseconds: number, paused: boolean}): boolean => {
    return (
      result.milliseconds > 0 &&
      !result.paused
    )
  }

  

@Injectable({
    providedIn: 'root'
  })

  export class CountdownService {
    private countdown$: Observable<any>
    private updateTimeout : any;
    public count = new BehaviorSubject(null);
    updateRate = 100;
  
    constructor(public store: Store<{countdown: string }>) {
     this.countdown$ = store.pipe(select('countdown'))
  
     this.countdown$.subscribe(result => {
       this.count.next(result)
  
       if (result.milliseconds > 0 && !result.paused) {
          if (this.updateTimeout) {
            clearTimeout(this.updateTimeout)
          }
  
          this.updateTimeout = setTimeout(() => {
            this.update(result.milliseconds - this.updateRate)
          }, this.updateRate)
       } else if (!result.cancelled && !result.paused && !result.init) {
       } else {
         clearTimeout(this.updateTimeout)
       }
     })
    }
  
    public start(milliseconds: number): void {
      this.store.dispatch(new Start({
        milliseconds: milliseconds
      }))
    }
  
    public update(milliseconds: number): void {
      this.store.dispatch(new Update({
        milliseconds: milliseconds
      }))
    }
  
    public cancel(): void {
      this.store.dispatch(new Cancel())
    }
  
    public pause(): void {
      this.store.dispatch(new Pause())
    }
  
    public resume(): void {
      this.store.dispatch(new Resume())
    }
  }