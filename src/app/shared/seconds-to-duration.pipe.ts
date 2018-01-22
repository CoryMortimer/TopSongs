import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToDuration'
})
export class SecondsToDurationPipe implements PipeTransform {

  transform(time): string {
    if ((!time && time !== 0) || isNaN(time)) { return String(time) }
    const minutes = Math.floor(time / 60);
    let seconds = '' + Math.round(time % 60);
    seconds = seconds.length < 2 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
  }

}
