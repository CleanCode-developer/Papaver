import Renderer from './renderer.js';
import SceneManager from './sceneManager.js';
import InputHandler from './inputHandler.js';
import ExportGame from './exportGame.js';
import UIHandler from './uiHandler.js';

class Engine {
  constructor() {
    this.renderer = new Renderer();
    this.sceneManager = new SceneManager();
    this.inputHandler = new InputHandler();
    this.exportGame = new ExportGame(this.sceneManager);
    this.uiHandler = new UIHandler(this.sceneManager);

    this.init();
  }

  init() {
    // Initialize scenes and other components
    this.loop();
  }

  loop() {
    requestAnimationFrame(() => this.loop());
    this.sceneManager.update();
    this.renderer.render();  // Render with Three.js
  }
}

window.onload = () => {
  const engine = new Engine();
};
