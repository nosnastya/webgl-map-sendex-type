import './style.css';
import { init as initScene } from './globe/scene';
import { init as initSphere } from './globe/sphere';
import { init as initPaths } from './globe/paths';

function initGlobe(container) {
  let request = new XMLHttpRequest();
  request.open('GET', './data.json', true);
  request.onload = function () {
    // Convert JSON data to an object
    let places = JSON.parse(this.response);
    let data = [];
    for (var i = 0; i < places.length; i++) {
      data = places[i].lat, places[i].long, places[i].size;
    }
    request.send();
  }
  console.log(this.data);
  initScene(container);
  initSphere();
  initPaths(this.data);
}

initGlobe(document.getElementById('globe-app'));
