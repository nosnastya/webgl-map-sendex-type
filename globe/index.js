import { init as initScene } from './scene';
import { init as initSphere } from './sphere';
import { init as initPaths } from './paths';

export default function initGlobe(container) {
  initScene(container);
  initSphere();
  initPaths([
    [
      37.77397, 
      -122.43129, 
      22.54554,
      114.0683
    ],
    [
      47.77397, 
      -110.43129, 
      22.54554,
      114.0683
    ]
  ]);
}
