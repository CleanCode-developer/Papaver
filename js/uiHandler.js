import * as THREE from 'three';
import SceneManager from './sceneManager.js';

class UIHandler {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.addObjectButton = document.getElementById('addObject');
    this.objectTypeSelect = document.getElementById('objectType');

    this.addObjectButton.addEventListener('click', () => this.addObject());
  }

  addObject() {
    const objectType = this.objectTypeSelect.value;
    let object;

    switch (objectType) {
      case 'cube':
        object = this.createCube();
        break;
      case 'sphere':
        object = this.createSphere();
        break;
      case 'plane':
        object = this.createPlane();
        break;
      default:
        console.error('Unknown object type');
        return;
    }

    this.sceneManager.activeScene.add(object);
  }

  createCube() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    return new THREE.Mesh(geometry, material);
  }

  createSphere() {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    return new THREE.Mesh(geometry, material);
  }

  createPlane() {
    const geometry = new THREE.PlaneGeometry(5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
    return new THREE.Mesh(geometry, material);
  }
}

export default UIHandler;
