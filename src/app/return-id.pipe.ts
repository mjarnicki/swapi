import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'returnId'
})
export class ReturnIdPipe implements PipeTransform {

  transform(value: string): string {
      return value.slice(0, -1).replace(/^(.*[\\\/])/, '');
  }

}
