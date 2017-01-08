// Arrays
const pressed = [];
const secretCode = 'boom';

// Listen for keystrokes
window.addEventListener('keyup', (e) => {

  console.log(e.pressed);

  pressed.push(e.key);
  pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)) {
    console.log('BOOM!');
    cornify_add();
  }
});
