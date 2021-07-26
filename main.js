var images= [ 
    "https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg", 
    "https://images-na.ssl-images-amazon.com/images/I/71IXI3kBGEL._SL1500_.jpg", 
    "https://www.collinsdictionary.com/images/full/pencil_280523090.jpg", 
    "https://media.istockphoto.com/photos/modern-colorful-skateboard-pennyboard-isolated-on-white-picture-id1199422535?k=6&m=1199422535&s=612x612&w=0&h=eeADkS3pdLCYDrgzGrgmww7N0wrQ4sn2SKzyLM7Ij7Q=", 
    "https://images-na.ssl-images-amazon.com/images/I/711UQcfhLlL._SL1500_.jpg", 
    "https://images-na.ssl-images-amazon.com/images/I/61Jb1FfY4oL._SX466_.jpg", 
    "https://www.sportscrunch.in/wp-content/uploads/2020/06/Tennis-Rackets-Used-by-Famous-Male-Players-1170x1060.jpg", 
    "https://media.istockphoto.com/photos/basketball-picture-id170096587?k=6&m=170096587&s=170667a&w=0&h=xvicKT5Yot8XPy7kuSRVfRbI__CWIxw7zMneHGDY0E8="
];
var names= [
"A really sweet orange",
"A broom! Clean sweep!", 
"That is a sharp pencil", 
"Just a plain skateboard", 
"Nice and comfy pillows", 
"Spicy hot sauce!", 
"A tennis racket and ball. Not bad!", 
"You wouldn't have been able to find the ball without light!"
];
var i= 0;
function lightness() {
    document.getElementById("btn_on").style.display= "none";
    document.getElementById("btn_off").style.display= "inline-block";
    document.getElementById("noLight").style.display= "none";
    document.getElementById("light").style.display= "inline-block"
    document.getElementById("items").style.display= "inline-block";
    document.getElementById("name").style.display= "inline-block";
    document.getElementById("items").src= images[i];

    document.getElementById("name").innerHTML= names[i];
    i++

    if (i>7){i=0};
}
function lightnos() {
    document.getElementById("btn_off").style.display= "none";
    document.getElementById("btn_on").style.display= "inline-block";
    document.getElementById("noLight").style.display= "inline-block";
    document.getElementById("light").style.display= "none"
    document.getElementById("items").style.display= "none";
    document.getElementById("name").style.display= "none";
}