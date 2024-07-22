import { Directive } from '@angular/core';

@Directive({
  selector: '[appHost]',
  standalone: true,
})
export class HostDirective {}
