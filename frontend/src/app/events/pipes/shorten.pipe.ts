import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenTextPipe implements PipeTransform {
  transform(value: String, limit: number) {
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}
