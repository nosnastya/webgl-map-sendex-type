import { init as initScene } from './scene';
import { init as initSphere } from './sphere';
import { init as initPaths } from './utils';
import axios from 'axios';

export default function initGlobe(container) {
  initScene(container);
  initSphere();
  axios.get('https://raw.githubusercontent.com/nosnastya/webgl-map-sendex-type/master/flights.json')
    .then(res => {
      const routes = res.data.routes.slice(0, 10000);
      const airports = res.data.airports;
      const coords = routes.map(route => {
        const startAirport = airports[route[1]];
        const endAirport = airports[route[2]];
        const startLat = startAirport[4];
        const startLng = startAirport[3];
        const endLat = startAirport[4];
        const endLng = startAirport[3];
        return [startLat, startLng, endLat, endLng];
      });
      initPaths(coords);
    })
    .catch(err => {
      console.log(err);
    });
}

export default function initGlobe2(container) {
  initScene(container);
  initSphere();
  axios.get('https://raw.githubusercontent.com/nosnastya/webgl-map-sendex-type/master/flights.json')
    .then(res => {
      const routes2 = res.data.routes.slice(500, 5000);

      const airports = res.data.airports;

      const coords2 = routes2.map(route2 => {
        const startAirport = airports[route2[1]];
        const endAirport = airports[route2[2]];
        const startLat = startAirport[4];
        const startLng = startAirport[3];
        const endLat = startAirport[4];
        const endLng = startAirport[3];
        return [startLat, startLng, endLat, endLng];
      });
      initPaths(coords2);
    })
    .catch(err => {
      console.log(err);
    });
}