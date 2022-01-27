export default function createPopover(event) {
  event.preventDefault();
  const popover = document.createElement('div');
  popover.classList.add('popover');

  const popoverTitle = document.createElement('h3');
  popoverTitle.textContent = `${event.target.getAttribute('title')}`;
  popover.appendChild(popoverTitle);

  const popoverText = document.createElement('p');
  popoverText.textContent = `${event.target.dataset.text}`;
  popover.appendChild(popoverText);

  event.target.offsetParent.appendChild(popover);
  popover.style.top = `${event.target.offsetTop - popover.offsetHeight}px`;
  popover.style.left = `${
    event.target.offsetWidth / 2 - popover.offsetHeight / 2
  }px`;
}
