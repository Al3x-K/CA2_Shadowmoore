import GameObject from '../Engine/gameobject.js';
import Renderer from '../Engine/renderer.js';
import Physics from '../Engine/physics.js';

class Platform extends GameObject 
{
  
    constructor(x, y, width, height, color = 'blue')  // The constructor is called when the object is created
    {
        super(x, y); // Call the super constructor
        this.addComponent(new Renderer(color, width, height)); // Add a renderer component to the object
        this.addComponent(new Physics({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 })); // Add a physics component to the object
        this.tag = 'platform'; 
    }
  }
  
  export default Platform;