import Input from "../js/Engine/input.js";

const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext('2d');  

const gravity = 0.5;

class Player
{  
    constructor()
    {
        this.position = {x: 0, y: 0};
        this.velocity = {x: 0, y: 1};
        this.height = 10;
    }

    draw()
    {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y,10,this.height);
    }

    update()
    {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if(this.position.y + this.height + this.velocity.y < canvas.height)
        {
            this.velocity.y += gravity;
        }
        else
        {
            this.velocity.y = 0;
        }
    }

}

const player = new Player();

let y = 10;
const keys = {};

function gameLoop()
{
    window.requestAnimationFrame(gameLoop);
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);    
    player.update();
}

gameLoop();

window.addEventListener('keydown', (event) => 
{
    switch(event.key)
    {
        case 'd': 
            player.velocity.x = 1;
        break;
        case 'a': 
            player.velocity.x = -1;
        break;
        case 'w': 
            player.velocity.y = -10;
        break;
    }
});

window.addEventListener('keyup', (event) => 
{
    switch(event.key)
    {
        case 'd': 
            player.velocity.x = 0;
        break;
        case 'a': 
            player.velocity.x = 0;
        break;
    }
});