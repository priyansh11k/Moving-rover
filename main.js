canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_img = ["mar1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
ramdom = Math.floor(Math.random() * 4); //generating ramdom no.
console.log(ramdom);

rover_w = 100;
rover_h = 90;
rover_x = 10;
rover_y=10;

bg_image = mars_img[ramdom];//Adding ramdom img.
rover_img = "rover.png";

function add(){
background = new Image();
background.onload = uploadbg;
background.src = bg_image;

rover = new Image();
rover.onload = uploadrv;
rover.src = rover_img;


}

//Adding image on canvas

function uploadbg(){
ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function uploadrv(){
ctx.drawImage(rover,rover_x,rover_y,rover_w,rover_h);
}


window.addEventListener("keydown", mykeydown);
function mykeydown(e){
keypress = e.keyCode;//Getting the code of the key pressed by the user
console.log(keypress);


if(keypress=='37'){
left();
console.log("left");
}

if(keypress=='38'){
    up();
    console.log("up");
    }

    if(keypress=='39'){
        right();
        console.log("right");
        }

        if(keypress=='40'){
            down();
            console.log("down");
            }
}

function up(){
    if(rover_y >= 0){
    rover_y=rover_y -10;
    console.log("When up arrow is pressed, x = "+ rover_x+" and y =  " + rover_y);
    uploadbg();
    uploadrv();
    }
    
}

function down(){
    if(rover_y <= 700){
    rover_y=rover_y +10;
    console.log("When down arrow is pressed, x = "+ rover_x+" and y =  " + rover_y);
    uploadbg();
    uploadrv();
    }
    
}

function left(){
    if(rover_x >= 0){
    rover_x=rover_x -10;
    console.log("When left arrow is pressed, x = "+ rover_x+" and y =  " + rover_y);
    uploadbg();
    uploadrv();
    }
    
}

function right(){
    if(rover_x <= 700){
    rover_x=rover_x +10;
    console.log("When right arrow is pressed, x = "+ rover_x+" and y =  " + rover_y);
    uploadbg();
    uploadrv();
    }
    
}


