import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneBelFormat'
})
export class PhoneBelFormatPipe implements PipeTransform {
  transform(phoneNumber: string): string {
    if (!phoneNumber || phoneNumber.length !== 12) {
      return phoneNumber;
    }
    return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`;;
  }
}
