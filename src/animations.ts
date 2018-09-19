import { trigger, transition, style, animate, state } from '@angular/animations';
export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),

  //can use :enter and :leave instead of void<=>*
  transition('void<=>*', [
    animate(500)
  ])
]);


