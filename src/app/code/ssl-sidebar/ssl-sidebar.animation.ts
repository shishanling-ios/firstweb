import {
  trigger,
  animate,
  style,
  transition,
  state,
} from '@angular/animations';

export const SidebarAnimation = [
  trigger('slideInOut', [
    state(
      '0',
      style({
        height: '0px'
      })
    ),
    state(
      '1',
      style({
        height: '*'
      })
    ),
    transition('1 => 0', animate('300ms ease-out')),
    transition('0 => 1', animate('300ms ease-in'))
  ]),
];
