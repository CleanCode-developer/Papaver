class SceneManager {
  constructor() {
    this.scenes = [];
    this.activeScene = null;
  }

  addScene(scene) {
    this.scenes.push(scene);
    if (!this.activeScene) {
      this.activeScene = scene;
    }
  }

  setActiveScene(sceneName) {
    this.activeScene = this.scenes.find(scene => scene.name === sceneName);
  }

  update() {
    if (this.activeScene) {
      this.activeScene.update();
    }
  }

  render(renderer) {
    if (this.activeScene) {
      renderer.render(this.activeScene);
    }
  }
}

export default SceneManager;
