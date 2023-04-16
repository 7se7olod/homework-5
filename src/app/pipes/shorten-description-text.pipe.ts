import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenDescriptionText'
})
export class ShortenDescriptionTextPipe implements PipeTransform {
  transform(descriptionText: string, maxLength: number = 95): string {
    if (descriptionText.length > maxLength) {
      return `${descriptionText.substring(0, maxLength)}...`;
    } else return descriptionText;
  }
}
