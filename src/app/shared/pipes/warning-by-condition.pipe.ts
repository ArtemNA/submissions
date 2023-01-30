import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'warningByCondition'
})
export class WarningByConditionPipe implements PipeTransform {

  // THIS is mock pipe just for example

  constructor(private sanitizer: DomSanitizer) { }

  transform(text: string): SafeHtml {
    let color: string | null;
    switch (true) {
      case text.toLowerCase().includes('2'):
        color = 'red';
        break;
      default:
        color = null;
        break;
    }
    const newText = text.replace(text, `<span style="color:${color}">${text}</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(newText);
  }

}