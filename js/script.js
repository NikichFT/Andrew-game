let obj = document.querySelector("#obj");
let beer = document.querySelector("#beer");
let start = document.querySelector("#start");
obj.addEventListener("click", go);

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)) + Math.floor(min));
}

let a = 0;
let aBack = 0;
let b = 0;
let bBack = 0;

function go() {
    start.style.display = 'none';
    obj.style.left = a + "px";
    setInterval(goLeft, getRandomArbitrary(20, 30));
    setInterval(goTop, getRandomArbitrary(20, 30));

    function goLeft() {
        if (a <= 0 || a < 255) {
            obj.style.transform = 'scaleX(' + 1 + ')';
            a += getRandomArbitrary(-1, 3);
            obj.style.left = a + "px";
            aBack = a;
        } else if (a >= 255) {
            obj.style.transform = 'scaleX(' + -1 + ')';
            aBack -= getRandomArbitrary(-1, 3);
            obj.style.left = aBack + "px";
            if (aBack <= 0) {
                a = aBack;
            }
        }
        if (parseInt(obj.style.left) >= 100 && parseInt(obj.style.left) <= 200 && parseInt(obj.style.top) >= 300 && parseInt(obj.style.top) <= 400) {
            a = undefined;
            b = undefined;
            beer.classList.add("pulse");
        }
    }

    function goTop() {
        if (b <= 0 || b < 400) {
            b += getRandomArbitrary(-1, 3)
            obj.style.top = b + "px";
            bBack = b;
        } else if (b >= 400) {
            bBack -= getRandomArbitrary(-1, 3);
            obj.style.top = bBack + "px";
            if (bBack <= 0) {
                b = bBack;
            }
        }
    }
}