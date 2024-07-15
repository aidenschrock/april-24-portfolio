"use client";
import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import * as THREE from "three";
import fragment from "../glsl/grid/fragment.glsl";
import vertex from "../glsl/grid/vertex.glsl";

export default function RecoludeGrid() {
  const gridContainer = useRef();

  function Plane() {
    const plane = useRef();

    const uniforms = useMemo(
      () => ({
        uTime: { value: 0 },

        uBigWavesElevation: { value: 0.1 },
        uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
        uBigWavesSpeed: { value: 0.08 },

        uDepthColor: { value: new THREE.Color("#721d3c") },
        uSurfaceColor: { value: new THREE.Color("#f22e76") },
        uColorOffset: { value: 0.4 },
        uColorMultiplier: { value: 2.5 },

        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 0.5 },
        uSmallWavesSpeed: { value: 0.1 },
        uSmallIterations: { value: 5 },
      }),
      [],
    );

    useFrame((state) => {
      const { clock } = state;
      plane.current.material.uniforms.uTime.value = clock.getElapsedTime();
    });
    return (
      <mesh
        ref={plane}
        scale={[3, 3, 3]}
        rotation={[-Math.PI / 6, 0, Math.PI / 6]}
        position={[0, 0.4, 0]}
      >
        <planeGeometry args={[4, 2, 400, 200]} />

        <shaderMaterial
          fragmentShader={fragment}
          vertexShader={vertex}
          transparent={true}
          uniforms={uniforms}
        />
      </mesh>
    );
  }

  return (
    <>
      <div
        ref={gridContainer}
        id="gridContainer"
        className="h-64 w-full rounded bg-gradient-to-tr from-[#571732] to-[#140F27] md:h-96"
      >
        <Canvas camera={{ position: [0, 0.2, 0.2] }}>
          <Center>
            <Plane />
          </Center>
        </Canvas>
      </div>
    </>
  );
}
