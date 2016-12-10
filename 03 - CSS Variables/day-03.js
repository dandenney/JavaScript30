function dayThree() {

  const inputs = document.querySelectorAll( '.control' );

  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach( input => input.addEventListener ( 'change', handleUpdate ) );
  inputs.forEach( input => input.addEventListener ( 'mousemove', handleUpdate ) );

};

dayThree();
