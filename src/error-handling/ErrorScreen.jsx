import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import earthTexture from "./assets/onepice-world-map.webp";

const OpPlanet = (props) => {
  const base = new THREE.TextureLoader().load(earthTexture);
  const ref = useRef();
  return (
    <mesh
      {...props}
      visible
      castShadow
      ref={ref}
      onClick={(e) => (ref.color = "red")}
    >
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[0.1, 34, 34]} />
      <meshBasicMaterial map={base} color="white" />
    </mesh>
  );
};

export default function App() {
  return (
    <Canvas className="canvas" shadowMap>
      <OpPlanet />
    </Canvas>
  );
}
