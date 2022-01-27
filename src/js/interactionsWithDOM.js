import createPopover from './createPopover';

export default function interactionsWithDOM() {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', (event) => {
    const popover = document.querySelector('.popover');
    if (!popover) createPopover(event);
    else popover.remove();
  });
}
