const cat = document.querySelector('#cat');

let catPosition = 0;
let moveForward;
let moveBackward;
let toLeft = true;
let speed = 1;

catWalk = () => {
  if(toLeft === true) {
    moveForward = setInterval(forward, 1);
  } else {
    moveBackward = setInterval(backward, 1);
  }
  
}

function forward() {
  catPosition += speed;
  cat.style.left = `${catPosition}px`;
  cat.style.transform = 'rotateY(360deg)';
  if(catPosition >= (window.innerWidth - 300)) {
    clearInterval(moveForward);
    toLeft = false;
    moveBackward = setInterval(backward, 1);
  }
}

function backward() {
  catPosition -= speed;
  cat.style.left = `${catPosition}px`;
  cat.style.transform = 'rotateY(180deg)';
  if(catPosition <= 0) {
    clearInterval(moveBackward);
    toLeft = true;
    moveForward = setInterval(forward, 1);
  }
}

pause = () => {
  clearInterval(moveForward);
  clearInterval(moveBackward);
}

turn = () => {
  if(toLeft === false) {
    clearInterval(moveBackward);
    toLeft = true;
    moveForward = setInterval(forward, 1);
  } else {
    clearInterval(moveForward);
    toLeft = false;
    moveBackward = setInterval(backward, 1);
  }
}

catSpeed = () => {
  speed = 7;
}
