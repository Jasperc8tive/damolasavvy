"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";

function Monolith() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    // cursor parallax tilt
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -pointer.y * 0.4,
      3,
      delta
    );
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, pointer.x * 0.4, 3, delta);
  });

  return (
    <group ref={group}>
      {/* sharp dark-metal core */}
      <mesh>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#0d0d0d" metalness={1} roughness={0.12} envMapIntensity={1.4} />
      </mesh>
      {/* thin reflective edge cage */}
      <mesh scale={1.52}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.2} wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

function Rings() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * 0.04;
  });
  return (
    <group ref={ref} rotation={[Math.PI / 2.4, 0, 0]}>
      {[2.6, 3.2, 3.8].map((r, i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 6]}>
          <torusGeometry args={[r, 0.004, 8, 160]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
        </mesh>
      ))}
    </group>
  );
}

export default function MetalObject() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, -3, -4]} intensity={0.6} />
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
        <Monolith />
      </Float>
      <Rings />
      {/* Procedural reflections — no external HDR fetch. */}
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 3, 2]} scale={[6, 3, 1]} color="#ffffff" />
        <Lightformer intensity={1.4} position={[-4, 1, -2]} scale={[3, 3, 1]} color="#cfcfcf" />
        <Lightformer intensity={2} position={[3, -2, 1]} scale={[3, 2, 1]} color="#9a9a9a" />
        <Lightformer intensity={0.8} position={[0, -3, -2]} scale={[6, 2, 1]} color="#555555" />
      </Environment>
    </Canvas>
  );
}
