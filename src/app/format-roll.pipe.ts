import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatRoll',
  standalone: true
})
export class FormatRollPipe implements PipeTransform {
  transform(roll: number[]): string {
    return `[${roll[0]},${roll[1]}]`;
  }
}
