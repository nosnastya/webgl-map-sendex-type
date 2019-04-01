// import * as THREE from 'three';
// import _ from 'lodash';
// import Curve from './Curve';
// import Tube from './Tube';
// import { rootMesh } from './scene';
// import { CURVE_COLOR } from './constants';

// export function init(allCoords) {
//  let color = (altitude < 30) ? 0xf39200 : 0x00ff37;
//  const CURVE_COLOR = findColor();
//   const material = new THREE.MeshBasicMaterial({
//     blending: THREE.AdditiveBlending,
//     opacity: 1,
//     transparent: true,
//     color: CURVE_COLOR
//   });
//   const curveMesh = new THREE.Mesh();

//   allCoords.forEach((coords, index) => {
//     if (index % 2) {
//       const curve = new Curve(coords, material);
//       curveMesh.add(curve.mesh);
//     } else {
//       const tube = new Tube(coords, material);
//       curveMesh.add(tube.mesh);
//     }
//   });

//   rootMesh.add(curveMesh);
// }