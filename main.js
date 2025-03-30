let boxes = document.querySelectorAll("li");
console.log(boxes);

boxes.forEach(function(elem) {
    elem.addEventListener("click", function(){
        elem.setAttribute("style","background-image: linear-gradient(to right,#39340d,#6b6b6b, #39340d);")
    });
});