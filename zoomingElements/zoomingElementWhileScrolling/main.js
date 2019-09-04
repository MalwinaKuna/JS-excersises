const square = document.createElement('div');
document.body.appendChild(square);

let grow = true;
let size = 100;
square.style.width = size + 'px';
square.style.height = size + 'px';
square.style.border = "2px solid white";

window.addEventListener('scroll', function () {
    if(grow) {
            size += 5;
            square.style.width = size + 'px';
            square.style.height = size + 'px';
    }
    else {
        size -= 5;
        square.style.width = size +'px';
        square.style.height = size +'px';
    }

    if(size>= window.innerWidth/3) {
        grow = !grow;
    } else if (size == 0) {
        grow = !grow;
    }

})