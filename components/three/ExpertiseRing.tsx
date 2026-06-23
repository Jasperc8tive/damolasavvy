"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

const COUNT = 10;

function OrbitingObjects() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const nodes = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => {
        const a = (i / COUNT) * Math.PI * 2;
        const shape = i % 3; // 0 box, 1 octa, 2 torus
        return { a, shape, scale: 0.28 + (i % 4) * 0.06 };
      }),
    []
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.25;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * 0.3 + 0.2, 3, delta);
  });

  return (
    <group ref={group} rotation={[0.2, 0, 0]}>
      {/* elliptical guide ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.4, 0.006, 8, 200]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
      </mesh>
      {nodes.map((n, i) => {
        const x = Math.cos(n.a) * 3.4;
        const z = Math.sin(n.a) * 3.4;
        const y = Math.sin(n.a * 2) * 0.5;
        return (
          <mesh key={i} position={[x, y, z]} scale={n.scale} rotation={[n.a, n.a * 2, 0]}>
            {n.shape === 0 && <boxGeometry args={[1, 1, 1]} />}
            {n.shape === 1 && <octahedronGeometry args={[1, 0]} />}
            {n.shape === 2 && <torusGeometry args={[0.7, 0.28, 16, 32]} />}
            <meshStandardMaterial color="#101010" metalness={1} roughness={0.18} envMapIntensity={1.3} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function ExpertiseRing() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 1.5, 7], fov: 45 }}
      dpr={[1, 1.7]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 4]} intensity={1.6} />
      <OrbitingObjects />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 4, 2]} scale={[8, 3, 1]} color="#ffffff" />
        <Lightformer intensity={1.5} position={[-5, 0, -2]} scale={[3, 4, 1]} color="#bdbdbd" />
        <Lightformer intensity={1.5} position={[5, -2, 1]} scale={[3, 3, 1]} color="#7a7a7a" />
      </Environment>
    </Canvas>
  );
}
