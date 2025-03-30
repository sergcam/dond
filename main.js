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
        
    });
});