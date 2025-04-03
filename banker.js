let boxes = document.querySelectorAll("li");
console.log(boxes);

boxes.forEach(function(elem) {
    elem.addEventListener("click", function(){
        if(elem.getAttribute("class")=="undark") {
            elem.setAttribute("style","background-image: linear-gradient(to right,#39340d,#6b6b6b, #39340d);");
            elem.setAttribute("class", "dark");
        }
        else if (elem.getAttribute("class")=="dark") {
            elem.setAttribute("style","background-image: linear-gradient(to right,#f2df4f, #ffffff,#f2df4f);");
            elem.setAttribute("class", "undark");
        }
        update();
    });
});

function getCount(){
    let count = 0;
    boxes.forEach(function(elem) {
        if(elem.getAttribute("class")=="undark") {
            count++;
        }
    });
    return count;
}

function update(){
    let offer = 0.0;
    let count = getCount();
    boxes.forEach(function(elem) {
        if(elem.getAttribute("class")=="undark") {
            let temp = parseFloat(elem.getAttribute("data-value")) / count;
            offer += temp;
        }
    });
    document.querySelector("#offer").innerHTML = offer.toFixed(2);
}