// import { init as initScene } from './scene';
// import { init as initSphere } from './sphere';
// import { init as initPaths } from './paths';
// function initData() {
//   let request = new XMLHttpRequest();
//   request.open('GET', './data.json', true);
//   request.onload = function () {
//     // Convert JSON data to an object
//     let places = JSON.parse(this.response);
//     let data = [];
//     for (var i = 0; i < places.length; i++) {
//       data = places[i].lat, places[i].long, places[i].size;
//       console.log(data);
//     }
//     return data;
//     request.send();
//   }
// }
// export default function initGlobe(container) {
//     console.log(initData());

//   initScene(container);
//   initSphere();
//   initPaths([initData()]);
// }
