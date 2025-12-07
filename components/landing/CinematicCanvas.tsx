"use client";

import { useRef, useState, type ComponentProps } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

type ParticleFieldProps = ComponentProps<typeof Points>;

function createSpherePositions() {
  const count = 3000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const r = 1.5;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  return positions;
}

function ParticleField(props: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => createSpherePositions());

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#4fa1f0" size={0.003} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export default function CinematicCanvas() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 1.5] }} gl={{ antialias: false }} dpr={[1, 1.5]}>
        <color attach="background" args={["#020617"]} />

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#4488ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />

        <ParticleField />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={0.5} radius={0.4} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
