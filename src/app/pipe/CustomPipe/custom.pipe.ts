import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomPipe'
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
