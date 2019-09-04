let count = 1;
function addFigure () {
    let item1 = document.createElement('li');
    let item2 = document.createElement('li');
    let list = document.querySelector('ul');
    item2.className = "circles";
    item1.className = "blackSquares"
    if(count%5 === 0){
        list.appendChild(item2)
        item2.textContent = count; 
    }else{
        list.appendChild(item1); 
        item1.textContent = count; 
    }
    count++;
}
let button = document.querySelector('h2');

button.addEventListener('click', addFigure);