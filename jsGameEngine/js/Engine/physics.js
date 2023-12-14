import Component from "./component.js";
import Renderer from "./renderer.js";

class Physics extends Component
{
    constructor(velocity = {x: 0, y: 0}, acceleration = {x: 0, y: 0}, gravity = {x: 0, y: 10})
    {
        super();
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.gravity = gravity;
    }

    update(deltaTime)
    {
        this.velocity.x += this.acceleration.x * deltaTime;
        this.velocity.y += (this.acceleration.y + this.gravity.y) * deltaTime;
        this.gameObject.x += this.velocity.x;
        this.gameObject.y += this.velocity.y;
    }
    collision(otherPhysics)
    {
        const [left, right, top, bottom] = this.getBoundingBox();// Get the object's bounding box
        const [otherLeft, otherRight, otherTop, otherBottom] = otherPhysics.getBoundingBox();// Get the other object's bounding box
        const horizontalCollision = right >= otherLeft && left <= otherRight;
        const verticalCollision = bottom >= otherTop && top <= otherBottom;
        return horizontalCollision && verticalCollision;
    }
    

    getBoundingBox()
    {
        const renderer = this.gameObject.getComponent(Renderer);
        const left = this.gameObject.x;
        const right = this.gameObject.x + renderer.width;
        const top = this.gameObject.y;
        const bottom = this.gameObject.y + renderer.height;

        return [left, right, top, bottom];
    }
}

export default Physics;