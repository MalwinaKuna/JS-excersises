let count = 0;

function removeTask(e) {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
    count++;
    if (count === 3) {
        document.querySelector("h1").textContent = "Congrats!"
        alert("Thats's all!");
        let anotherLi = document.createElement("li");
        anotherLi.style.listStyleType = "none";
        anotherLi.innerHTML = "Come back when you will have some other tasks.";
        document.querySelector("ul").appendChild(anotherLi);

        let anotherLi2 = document.createElement("li");
        anotherLi2.style.listStyleType = "none";
        anotherLi2.innerHTML = `<a href='http://127.0.0.1:5501/index1.html'>Try again</a>`;
        document.querySelector("ul").appendChild(anotherLi2);
    }
}
document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));

let fun = document.body;
fun.style.listStyleType = "none";
fun.style.backgroundImage = "url('./photo-1464822759023-fed622ff2c3b.jpeg')";
fun.style.backgroundRepeat = "space";
fun.style.backgroundSize = "cover";
fun.style.backgroundAttachment = "fixed";
fun.style.color = "white";
fun.style.textAlign = "center";
fun.style.marginLeft = "auto";
fun.style.marginRight = "auto";

let rectangle = document.querySelector('ul');
rectangle.style.marginTop = "5%";
rectangle.style.width = "60%";
rectangle.style.height = "60vh";
rectangle.style.background = "rgba(0,0,0,0.5)";
rectangle.style.marginLeft = "auto";
rectangle.style.marginRight = "auto";
rectangle.style.padding = "40px";
rectangle.style.borderRadius = "15px";
rectangle.style.letterSpacing = "3px";
rectangle.style.fontSize = "40px";

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "rgba(0,0,0,0.4)";
    buttons[i].style.color = "white";
    buttons[i].style.borderRadius = "9px";
}

let liList = document.querySelectorAll("li");

liList.forEach((item) => {
    item.style.textTransform = "upperCase";
    item.style.fontFamily = "Helvetica";
    item.style.listStyleType = "none";
    item.style.lineHeight = "66px";
});