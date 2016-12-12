function day05() {

  const panels = document.querySelectorAll('.panel');

  function toggleOpen() {
    this.classList.toggle('open');
    console.clear();
    console.log(panels);
  }

  function toggleActive(e) {
    console.log(e.propertyName); // Keeping this so I remember to use it
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

};

day05();
