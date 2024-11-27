import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ChristmasTree(props) {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) / 10;
  });

  return (
    <group ref={group} {...props}>
      {/* Tree trunk */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Tree layers */}
      {[2, 1.5, 1].map((scale, index) => (
        <mesh key={index} position={[0, index * 1.5, 0]}>
          <coneGeometry args={[scale, 2, 32]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
      ))}

      {/* Star on top */}
      <mesh position={[0, 4.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <tetrahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </mesh>

      {/* Ornaments */}
      {Array.from({ length: 20 }).map((_, index) => {
        const theta = Math.random() * Math.PI * 2;
        const y = Math.random() * 4;
        const r = 0.5 + Math.random() * 1;
        return (
          <mesh key={index} position={[r * Math.cos(theta), y, r * Math.sin(theta)]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color={new THREE.Color().setHSL(Math.random(), 1, 0.5)} />
          </mesh>
        );
      })}
    </group>
  );
}

