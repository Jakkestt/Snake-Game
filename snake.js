class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xspeed = 0;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
    }

    update(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    move() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.x = constrain(this.x, 0, (width/gridsize)-1);
        this.y = constrain(this.y, 0, (height/gridsize)-1);

        for (var i = 0; i < this.tail.length-1; i++) {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total-1] = createVector(this.x, this.y);
    }

    eat(x, y) {
        if (this.x == x && this.y == y) {
            this.total++;
            return true;
        }
    }

    show() {
        push();
        stroke(0);
        rect(this.x * gridsize, this.y * gridsize, gridsize, gridsize);
        pop();
    }
}
