import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import earthTexture from "./assets/onepice-world-map.webp";
import "./styles/style.css";
import { Physics } from "@react-three/cannon";
import GridPlane from "./components/GridPlane";
import Moon from "./components/Moon";
import Crosshair from "./components/Crosshair";
import { Player } from "./components/Player";

import moonTexture1 from "./assets/moon-texture.jpg";
import moonTexture2 from "./assets/moon-texture-2.jpg";
import moonTexture3 from "./assets/moon-texture-3.jpg";
import moonTexture4 from "./assets/moon-texture-4.jpg";
import moonTexture5 from "./assets/moon-texture-5.jpg";
import moonTexture6 from "./assets/moon-texture-6.jpg";

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
      <sphereGeometry attach="geometry" args={[1, 34, 34]} />
      <meshBasicMaterial map={base} color="white" />
    </mesh>
  );
};

export default function App() {
  return (
    <Canvas
      className="canvas"
      gl={{ alpha: false }}
      camera={{ position: [-1, 1, 5], fov: 50 }}
    >
      <Stars radius={100} depth={50} count={1000} factor={10} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} />
      <OpPlanet position={[0, 5, 0]} />
      <Moon
        texture={moonTexture1}
        vel={0.0019}
        flag={1}
        radius={0.2}
        distance={2}
      />
      <Moon
        texture={moonTexture2}
        vel={0.004}
        flag={2}
        radius={0.25}
        distance={3}
      />
      <Moon
        texture={moonTexture3}
        vel={0.0055}
        flag={3}
        radius={0.1}
        distance={2}
      />
      <Moon
        texture={moonTexture4}
        vel={0.0015}
        flag={4}
        radius={0.3}
        distance={2.5}
      />
      <Moon
        texture={moonTexture5}
        vel={0.0045}
        flag={4}
        radius={0.25}
        distance={2}
      />
      <Moon
        texture={moonTexture6}
        vel={0.005}
        flag={1}
        radius={0.1}
        distance={2.5}
      />               
      <Physics gravity={[0, -10, 0]}>
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <Player position={[0, 2, 0]} />
        <GridPlane />
      </Physics>
    </Canvas>
  );
}
