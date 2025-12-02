import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Trophy Component
function Trophy() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.3, 1, 8]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.8}
          roughness={0.2}
          emissive="#4C6BFF"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Floating Particles
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#4C6BFF" />
    </points>
  );
}

// Neon Orb
function NeonOrb({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={3}>
      <Sphere position={position} args={[0.3, 32, 32]}>
        <MeshDistortMaterial
          color="#A85CFF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// 3D Scene Component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4C6BFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A85CFF" />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Particles />

      <Trophy />
      <NeonOrb position={[-3, 2, -2]} />
      <NeonOrb position={[3, -1, -1]} />
      <NeonOrb position={[0, 3, -3]} />

      <Text
        position={[0, -2, 0]}
        fontSize={0.5}
        color="#4C6BFF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/orbitron.woff"
      >
        SKYONE ESPORTS
      </Text>
    </>
  );
}

// Loading Fallback
function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-dark">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <p className="text-red-500">Loading 3D Experience...</p>

      </div>
    </div>
  );
}

// Main Hero Component
const Hero3D = () => {
  const [use3D, setUse3D] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl || window.innerWidth < 768) {
      setUse3D(false);
    }

    setIsLoading(false);
  }, []);

  if (isLoading) return <LoadingFallback />;

  return (
    <div className="hero-3d relative">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/assest/ff.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20"></div>

      {/* 3D Scene */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center z-10 mobile-box">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title text-6xl md:text-8xl font-gaming font-bold mb-6 glow-text-red"
          >
            SKYONE
          </motion.h1>
          
          <style>{`
  .glow-text-red {
    color: black !important;
    text-shadow:
      0 0 10px rgba(255, 0, 0, 0.7),
      0 0 20px rgba(255, 0, 0, 0.8),
      0 0 40px rgba(255, 0, 0, 1),
      0 0 80px rgba(255, 0, 0, 1);
  }
`}</style>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hero-sub text-xl md:text-2xl text-black-300 mb-8"
          >
            Elite Free Fire eSports Platform
          </motion.p>

          

        </div>
      </div>

      {/* MOBILE FIX CSS */}
      <style>
        {`
        @media (max-width: 768px) {

          video {
            opacity: 0.25 !important;
            filter: brightness(0.5) !important;
          }

          .mobile-box {
            background: rgba(0,0,0,0.55);
            padding: 16px;
            border-radius: 12px;
            width: 92%;
            margin: 0 auto;
          }

          .hero-title {
            font-size: 42px !important;
            line-height: 46px !important;
          }

          .hero-sub {
            font-size: 18px !important;
            margin-bottom: 12px !important;
          }

          .hero-text {
            font-size: 13px !important;
            line-height: 18px !important;
            max-width: 95% !important;
          }

          .hero-3d canvas {
            height: 70vh !important;
          }
        }
        `}
      </style>

    </div>
  );
};

export default Hero3D;
