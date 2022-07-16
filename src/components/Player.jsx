import React, { useRef } from "react";
import { useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "./hooks/useKeyboardControls";
import { Vector3 } from "three";
import { PointerLockControls } from "@react-three/drei";

const SPEED = 6;

export function Player(props) {
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useKeyboardControls();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    ...props,
  }));

  const velocity = useRef([0, 0, 0]);
  React.useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(ref.current.position);
    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      Number(moveBackward) - Number(moveForward)
    );
    const sideVector = new Vector3(Number(moveLeft) - Number(moveRight), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
    }

    ref.current.getWorldPosition(ref.current.position);
  });

  return (
    <>
      <PointerLockControls />
      <mesh ref={ref} />
    </>
  );
}
