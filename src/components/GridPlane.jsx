import React from "react";
import Plane from "./Plane";

function GridPlane() {
  return (
    <mesh>
      <fog attach="fog" args={["#041830", 20, 20]} />
      <Plane />
      <gridHelper />
    </mesh>
  );
}

export default GridPlane;
