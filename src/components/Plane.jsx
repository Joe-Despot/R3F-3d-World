import React from "react";
import { usePlane } from "@react-three/cannon";

export default function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} position={[0, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[20, 20]} />
      <meshBasicMaterial attach="material" color="#082444" />
    </mesh>
  );
}
