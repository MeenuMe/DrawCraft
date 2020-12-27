var canvas = new fabric.Canvas("myCanvas");
var block_img_width = 30;
var block_img_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update (){
    fabric.Image.fromURL("player.png", function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(player_object);

    });

}

function new_image (get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(block_image_object);
        
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown (e){
    key_press = e.keyCode;
    if (e.shiftKey == true && key_press == '77'){
        block_img_width -= 10;
        block_img_height -= 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (e.shiftKey == true && key_press == '80'){
        block_img_width += 10;
        block_img_height += 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (key_press == '84') {
        new_image('trunk.jpg');
        console.log("t");
    }
    if (key_press == '68') {
        new_image('dark_green.png');
        console.log("d");
    }
    if (key_press == '76') {
        new_image('light_green.png');
        console.log("l");
    }
    if (key_press == '71') {
        new_image('ground');
        console.log("g");
    }
    if (key_press == '87') {
        new_image('wall.jpg');
        console.log("w");
    }
    if (key_press == '89') {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if (key_press == '82') {
        new_image('roof.jpg');
        console.log("r");
    }
    if (key_press == '67') {
        new_image('cloud.jpg');
        console.log("c");
    }
    if (key_press == '85') {
        new_image('unique.png');
        console.log("u");
    }
    if (key_press == '38'){
        up();
    }
    if (key_press == '40'){
        down();
    }
    if (key_press == '39'){
        right();
    }
    if (key_press == '37'){
        left();
    }
}

function up (){
    if (player_y >= 0){
        player_y = player_y - block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down (){
    if (player_y <= 500){
        player_y = player_y + block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}

function right (){
    if (player_x <= 850){
        player_x = player_x + block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}

function left (){
    if (player_x >= 0){
        player_x = player_x - block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}