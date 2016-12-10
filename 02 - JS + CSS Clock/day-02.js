function dayTwo() {

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  // Set the Date
  function setDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hoursDegrees = ((hours / 24) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  setInterval(setDate, 1000);

}

dayTwo();
