/**
 * changeMode : change the web page to look something like this:
 * @param {size} : size is setting font-size - number
 * @param {weight} : weight is setting font-weight - string
 * @param {transform} : transform is setting text-transform - string
 * @param {background} : background is setting background-color - string
 * @param {color} : color is setting color - string
 * @returns {void}
 */

function changeMode(size, weight, transform, background, color) {
    return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);
  
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.onclick = spooky;
    document.body.appendChild(spookyButton);
  
    const darkButton = document.createElement('button');
    darkButton.textContent = 'Dark mode';
    darkButton.onclick = darkMode;
    document.body.appendChild(darkButton);
  
    const screamButton = document.createElement('button');
    screamButton.textContent = 'Scream mode';
    screamButton.onclick = screamMode;
    document.body.appendChild(screamButton);
  }
  
  main();