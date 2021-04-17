var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1CfyPLj8HrBQKY4JuVZgMi-6cuARYkHwow&usqp=CAU", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (key_presed == 69) {
        new_image('https://drive.google.com/file/d/18gAM21-K2XuvAwY5O-UZkfccGtupEZAA/view?usp=sharing')
        console.log("LEGS")
}

    if (key_presed == 66) {
        new_image('https://drive.google.com/file/d/16q60eulWvkIUXqtdIHYVf-WzL1PnprWo/view?usp=sharing')
        console.log("BODY")
}

    if (key_presed == 70) {
        new_image('https://drive.google.com/file/d/1RjtrVFlLkNwDUGwQHSjY2WAJOEFjMjsE/view?usp=sharing')
        console.log("FACE")
}

    if (key_presed == 82) {
        new_image('https://drive.google.com/file/d/1JGZlMGfmfzmBiKHvoeeaYsOvJZ96LA88/view?usp=sharing')
        console.log("RIGHT HAND")
}

    if (key_presed == 76) {
        new_image('https://drive.google.com/file/d/1hNsjZZWyHXhN0f4yOLjqRNlcB0YpiyNi/view?usp=sharing')
        console.log("LEFT HAND")
}

    if (keyPressed == 38) {
        up();
        conesole.log("up")
    }

    if (keyPressed == 40) {
        down();
        conesole.log("down")
    }

    if (keyPressed == 37) {
        left();
        conesole.log("left")
    }

    if (keyPressed == 39) {
        right();
        conesole.log("right")
    }

}