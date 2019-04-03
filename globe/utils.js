import * as THREE from 'three';
import { geoInterpolate } from 'd3-geo';
import { GLOBE_RADIUS, CURVE_MIN_ALTITUDE, CURVE_MAX_ALTITUDE, CURVE_COLOR } from './constants';
import * as THREE from 'three';
import _ from 'lodash';
import Curve from './Curve';
import Tube from './Tube';
import { rootMesh } from './scene';
import { CURVE_COLOR } from './constants';

const DEGREE_TO_RADIAN = Math.PI / 180;


export function coordinateToPosition(lat, lng, radius) {
  const phi = (90 - lat) * DEGREE_TO_RADIAN;
  const theta = (lng + 180) * DEGREE_TO_RADIAN;

  return new THREE.Vector3(
    - radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}
const altitude = Math.floor(Math.random() * (CURVE_MAX_ALTITUDE - CURVE_MIN_ALTITUDE + 1) + CURVE_MIN_ALTITUDE);

export function init(allCoords) {
  const CURVE_COLOR = (altitude < CURVE_MAX_ALTITUDE/2) ? 0xff9900 : 0x00ff37;
  const material = new THREE.MeshBasicMaterial({
    blending: THREE.AdditiveBlending,
    opacity: 1,
    transparent: true,
    color: CURVE_COLOR
  });
  const curveMesh = new THREE.Mesh();

  allCoords.forEach((coords, index) => {
    if (index % 2) {
      const curve = new Curve(coords, material);
      curveMesh.add(curve.mesh);
    } else {
      const tube = new Tube(coords, material);
      curveMesh.add(tube.mesh);
    }
  });

  rootMesh.add(curveMesh);
}
export function getSplineFromCoords(coords) {
  const startLat = coords[0];
  const startLng = coords[1];
  const endLat = coords[2];
  const endLng = coords[3];
  // spline vertices
  const start = coordinateToPosition(startLat, startLng, GLOBE_RADIUS);

  const end = coordinateToPosition(startLat, startLng, GLOBE_RADIUS + coords[3]);

  return {
    start,
    end,
    spline: new THREE.LineCurve3(start, end)
  };
}