import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Moon = (props) => {
  const base = new THREE.TextureLoader().load(props.texture);
  const ref = useRef();
  let moonVel = 0;
  useFrame(() => {
    moonVel += props.vel * Math.PI;
    if (props.flag === 1) {
      ref.current.position.x = props.distance * Math.cos(moonVel);
      ref.current.position.y = props.distance * Math.sin(moonVel) + 5;
    } else if (props.flag === 2) {
      ref.current.position.z = props.distance * Math.cos(moonVel);
      ref.current.position.y = props.distance * Math.sin(moonVel) + 5;
    } else if (props.flag === 3) {
      ref.current.position.z = props.distance * Math.cos(moonVel);
      ref.current.position.x = props.distance * Math.sin(-moonVel);
      ref.current.position.y = props.distance * Math.sin(moonVel) + 5;
    } else {
      ref.current.position.z = props.distance * Math.cos(moonVel);
      ref.current.position.x = props.distance * Math.sin(-moonVel);
      ref.current.position.y = props.distance * Math.sin(moonVel) + 5;
    }
    if (moonVel === 2 * Math.PI) {
      moonVel = 0;
    }
  });
  return (
    <mesh {...props} visible castShadow ref={ref}>
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[props.radius, 30, 30]} />
      <meshBasicMaterial map={base} color="white" />
    </mesh>
  );
};

export default Moon;
