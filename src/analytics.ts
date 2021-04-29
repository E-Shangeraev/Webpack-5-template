import * as $ from 'jquery';

function createAnalytics(): object {
  let counter = 0;
  let destroyed: boolean = false;

  const listener = (): number => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      destroyed = true;
    },
    getClicks() {
      if (destroyed) {
        return 'Analytics is destroyed';
      }
      return counter;
    },
  };
}

console.log('Good morning');

import('lodash').then(() => {
  console.log('Lodash', _.random(0, 42, true));
});

window['analytics'] = createAnalytics();
