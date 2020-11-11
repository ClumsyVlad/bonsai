const wall = document.querySelectorAll('body > *');

function whiteWall() {
    wall.forEach(element => element.remove());
}

setTimeout(whiteWall, 2500);