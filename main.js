canvas = document.getElementById('mc');
ctx = canvas.getContext('2d');
CarX = 200;
CarY = 200;
CarW = 100;
CarH = 75;

var bgi = "https://img.freepik.com/free-vector/top-view-car-park-lots-city-street-underground-garage-vector-background-empty-parking-with-white-yellow-lines-road-marking-black-asphalt-surface_107791-10233.jpg?w=360"
var ci = "https://i.pinimg.com/originals/6a/fb/08/6afb08e233f126c3dabff441c31e06ab.png"

function add(){
    bg = new Image();
    bg.onload = uploadbg;
    bg.src = bgi;
    car = new Image()
    car.onload = uploadcar;
    car.src = ci;
}

//-------------------------------------------//

function uploadbg()
{
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadcar()
{
    ctx.drawImage(car, CarX, CarY, CarW, CarH);
}

//-------------------------------------------//

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
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
        down();
    }
}

//-------------------------------------------//

function left() {

    if(CarX >= 0)
    {
        CarX = CarX - 10;
        uploadbg();
        uploadcar();
    }

}

function down() {

    if(CarY <= 325)
    {
        CarY = CarY + 10;
        uploadbg();
        uploadcar();
    }

}

function right() {

    if(CarX <= 500)
    {
        CarX = CarX + 10;
        uploadbg();
        uploadcar();
    }

}

function up() {

    if(CarY >= 0)
    {
        CarY = CarY - 10;
        uploadbg();
        uploadcar();
    }

}