"use client";

import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import * as THREE from "three";
import fragment from "../glsl/fragment.glsl";
import vertex from "../glsl/vertex.glsl";

function Plane() {
  const plane = useRef();

  let palette = ["#000000", "#101111", "#cf799e", "#262729", "#393c3e"];

  palette = palette.map((color) => new THREE.Color(color));
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: palette },
      uResolution: { value: new THREE.Vector4() },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    plane.current.material.uniforms.uTime.value = clock.getElapsedTime();
  });
  return (
    <mesh ref={plane} scale={[2, 2, 2]}>
      <planeGeometry args={[4, 2, 400, 200]} />

      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function SquareGradient() {
  const container = useRef();

  return (
    <>
      <div
        ref={container}
        id="canvasContainer"
        className="w-64 h-64 sm:w-80 md:w-[400px] md:h-[400px] lg:h-[500px] lg:w-[500px] rounded-3xl overflow-hidden "
      >
        <Canvas
          resize={{ scroll: false }}
          camera={{ position: [0, 0.18, 0.2] }}
        >
          <Center>
            <Plane />
          </Center>
        </Canvas>
      </div>
    </>
  );
}

export default SquareGradient;
