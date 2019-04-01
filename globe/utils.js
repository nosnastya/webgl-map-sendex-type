import * as THREE from 'three';
import { geoInterpolate } from 'd3-geo';
import { GLOBE_RADIUS, CURVE_MIN_ALTITUDE, CURVE_MAX_ALTITUDE, CURVE_COLOR } from './constants';

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

export function getSplineFromCoords(coords) {
  const startLat = coords[0];
  const startLng = coords[1];
  const endLat = coords[2];
  const endLng = coords[3];

  // spline vertices
  const start = coordinateToPosition(startLat, startLng, GLOBE_RADIUS);
  const altitude = Math.floor(Math.random()*(CURVE_MAX_ALTITUDE - CURVE_MIN_ALTITUDE + 1)+ CURVE_MIN_ALTITUDE);
  const end = coordinateToPosition(startLat, startLng, GLOBE_RADIUS + altitude);

  return {
    start,
    end,
    spline: new THREE.LineCurve3(start, end)
  };
}