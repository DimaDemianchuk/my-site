  var pics = {
      "one": "img/tshirt.png",
    "two": "img/tshirt_01.png",
    "three": "img/tshirt_09.png",
     "four": "img/tshirt_04.png",
    "five": "img/tshirt_11.png"
  }
function check_value(event){
   document.getElementById("imagetest").src = pics[event.target.value];
}