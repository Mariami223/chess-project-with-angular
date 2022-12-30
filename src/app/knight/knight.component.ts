import { Component } from '@angular/core';

@Component({
  selector: 'app-knight',
  template: '<span >♘</span>',
  styles: [
    `
      span {
        font-weight: 400;
        font-size: 54px;
        line-height: 70px;
        cursor: pointer;
      }
    `,
  ],
})
export class KnightComponent {}
