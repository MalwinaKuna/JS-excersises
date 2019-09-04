let size = 100;

let grow = true;

const square = document.createElement('div');
const body = document.body;
body.appendChild(square);
body.style.margin = '0';
body.style.height = '10000vh';
square.style.backgroundColor = "red";
square.style.width = '100%';
square.style.height = size + 'px';
square.style.position = "fixed";
square.style.left = '0px';
square.style.top = '0px';


const scrolling = document.addEventListener('scroll', function () {
    if (grow) {
        size += 5;
        square.style.height = size + 'px';
        square.style.backgroundColor = "red";
    }
    else {
        size -= 5;
        square.style.height = size + 'px';
        square.style.backgroundColor = "green";
    }

    if(size >= window.innerHeight /2) {
        grow = !grow;
    }
    else if (size == 0) {
        grow = !grow;
    }
    
}
);