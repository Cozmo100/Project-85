canvas = document.getElementById("mc");
ctx = canvas.getContext("2d");
CarWidth = 130;
CarHeight = 190;
CarX = 200;
CarY = 200;

var bgi = "https://thumbs.dreamstime.com/b/parking-top-aerial-view-graphic-black-white-sketch-landscape-vector-illustration-194458203.jpg"
var cvi = "https://o.remove.bg/downloads/219c7d82-398c-42b8-903e-203956923898/367-3673430_door-ajar-png-close-door-car-icon-transparent-removebg-preview.png"

function add()
{
    bg = new Image();
    bg.onload = uploadbg;
    bg.src = bgi;
    cv = new Image();
    cv.onload = uploadcv;
    cv.src = cvi;
}


function uploadbg()
{
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadcv()
{
    ctx.drawImage(cv, CarX, CarY, CarWidth, CarHeight);
}


window.addEventListener("keydown",my_keydown)
function my_keydown(e) 
{
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if(KeyPressed == "37"){
        left();
    }

    if(KeyPressed == "38"){
        up();
    }

    if(KeyPressed == "39"){
        right();
    }

    if(KeyPressed == "40"){
        bottom();
    }

}
function left() {

    if(CarX >= 0)
    {
        CarX = CarX - 10;
        uploadbg();
        uploadcv();
    }

}

function right() {
    if(CarX <= 500) 
    {
        CarX = CarX + 10;
        uploadbg();
        uploadcv();
    }
}

function up() {
    if(CarY >= 0)
    {
        CarY = CarY - 10;
        uploadbg();
        uploadcv();
    }
}

function bottom() {
    if(CarY <= 325)
    {
        CarY = CarY + 10;
        uploadbg();
        uploadcv();
    }
}
    




