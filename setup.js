var gridsize = 40;
let snake;
let food;

function setup() {
    createCanvas(800, 800);
    frameRate(10)

    snake = new Snake(2, 2);
    food = new Food();

    food.appear();
    stroke(0);
}

function draw() {
    background(155);
    for (var i = 0; i < snake.tail.length; i++) {
        rect(snake.tail[i].x * gridsize, snake.tail[i].y * gridsize, gridsize, gridsize);
    }

    food.show();
    snake.move();
    snake.show();
    if (snake.eat(food.x, food.y)) {
        food.appear();
    }
}

function keyPressed() {
    if ((keyCode === UP_ARROW || keyCode === 87) && snake.yspeed != 1) {
        snake.update(0, -1);
    }
    if ((keyCode === DOWN_ARROW || keyCode === 83) && snake.yspeed != -1) {
        snake.update(0, 1);
    }
    if ((keyCode === LEFT_ARROW || keyCode === 65) && snake.xspeed != 1) {
        snake.update(-1, 0);
    }
    if ((keyCode === RIGHT_ARROW || keyCode === 68) && snake.xspeed != -1) {
        snake.update(1, 0);
    }
}
