
function DOMQuery() {
    let elements = document.querySelectorAll('ul:first-of-type > li');
    for (let elem of elements) {
        alert(elem.innerHTML);
    }
}

function DOMQuery1() {
    let elements = document.querySelectorAll('ul:nth-of-type(2) > li:nth-of-type(2)');
    for (let elem of elements) {
        alert(elem.innerHTML);
    }
}

function DOMQuery2() {
    let elements = document.querySelectorAll('ul:nth-of-type(3) > li:nth-of-type(4)');
    for (let elem of elements) {
        alert(elem.innerHTML);
    }
}

function DOMQuery3() {
    let elements = document.querySelectorAll('ul:nth-of-type(2) > li');
    for (let elem of elements) {
        alert(elem.innerHTML);
    }
}

function DOMQuery4() {
    let elements = document.getElementsByTagName("h1")
    for (let elem of elements) {
        alert(elem.innerHTML);
    }
}

function DOMQuery5() {
    let elements = document.getElementById("game-of-the-day")
    alert(elements.innerHTML);
}

function DOMQuery6() {
    let elements = document.getElementsByClassName("sale")
    for (let elem of elements) {
        alert(elem.innerHTML);
    }
}

DOMQuery
DOMQuery1
DOMQuery2
DOMQuery3
DOMQuery4
DOMQuery5
DOMQuery6