let counter = 0;
let fontSizeNum = 10;

const clickButtonAction = document.querySelector('button');
clickButtonAction.addEventListener('click', function () {
    if (counter == 0) {
    const list = document.querySelector('ul');
    list.style.fontSize = fontSizeNum +'px';
    const items = [];
    for (let i = 0; i < 5; i++) {
        items[i] = document.createElement('li');
        items[i].textContent = 'Task'
        list.appendChild(items[i]);
    }
    counter++;
} else {
        fontSizeNum += 5;
        const list = document.querySelector('ul');
        list.style.fontSize = fontSizeNum + 'px';


}}
);
