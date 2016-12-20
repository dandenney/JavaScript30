function selectAll () {

  // Private variables
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let lastChecked;

  // Add event listeners
  checkboxes.forEach( checkbox => checkbox.addEventListener ('click', handleCheck) );

  // Handle check
  function handleCheck (e) {

    // If they had the shift key down
    // And if they are checking it
    if ( e.shiftKey && this.checked ) {

      let inBetween = false;

      // loop over all checkboxes
      checkboxes.forEach ( checkbox => {

        // True starts at first or last checked
        // Flips inBetween to to true until first or last checked
        if ( checkbox === this || checkbox === lastChecked ) {
          inBetween = !inBetween;
        }

        // Checks the boxes that have been flipped to true
        if ( inBetween ) {
          checkbox.checked = true;
        }

      });
    }

    lastChecked = this;
  }

}

selectAll();
