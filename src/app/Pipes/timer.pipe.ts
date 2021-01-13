import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timer'})
export class TimerPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((value % (1000 * 60)) / 1000);

    let displayhours = hours < 9 ? ("0"+hours) : hours;
    let displayminutes = minutes < 9 ? ("0"+minutes) : minutes;
    let displayseconds = seconds < 9 ? ("0"+seconds) : seconds;

    return `${displayhours}:${displayminutes}:${displayseconds}`
  }
}