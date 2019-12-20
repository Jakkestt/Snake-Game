class Food {
    show() {
        push();
        fill(255, 0, 0);
        rect(this.x * gridsize, this.y * gridsize, gridsize, gridsize);
        pop();
    }

    appear() {
        this.x = round(random(2, (width/gridsize)-2));
        this.y = round(random(2, (height/gridsize)-2));
    }
}
