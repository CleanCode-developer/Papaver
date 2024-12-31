import SceneManager from './sceneManager.js';

class ExportGame {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    document.getElementById('exportGame').addEventListener('click', () => this.export());
  }

  export() {
    const gameState = JSON.stringify(this.sceneManager);
    const blob = new Blob([gameState], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'game.json';
    a.click();
    URL.revokeObjectURL(url);
  }
}

export default ExportGame;
