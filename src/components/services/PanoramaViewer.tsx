"use client";

import { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Html, Float } from "@react-three/drei";
import * as THREE from "three";
import { X, MousePointer2 } from "lucide-react";

// 1. The Gradient Sphere with "Click Me" Label
function InteractiveBall({ onClick }: { onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} onClick={onClick} >
        <sphereGeometry args={[1.5, 64, 64]} />
        <shaderMaterial
          vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec2 vUv;
            void main() {
              vec3 color1 = vec3(0.0, 1.0, 0.5); // Green
              vec3 color2 = vec3(0.0, 0.4, 1.0); // Blue
              gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
            }
          `}
        />
        
        {/* Floating "Click Me" Label */}
        <Html distanceFactor={10} position={[0, -2.2, 0]} center>
          <div className="flex flex-col items-center gap-2 select-none pointer-events-none">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-2xl animate-bounce">
              <span className="text-black text-xs font-bold tracking-widest uppercase whitespace-nowrap flex items-center gap-2">
                <MousePointer2 size={12} className="animate-pulse" />
                Click Me to Enter
              </span>
            </div>
            {/* Tiny arrow pointing up to the ball */}
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/20"></div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function PanoramaSphere({ textureUrl }: { textureUrl: string }) {
  const texture = useTexture(textureUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function Interactive360Viewer() {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div 
      className={`relative transition-all duration-700 ease-in-out ${
        isInteracting ? "fixed inset-0 z-[9999] bg-black" : "w-full h-[500px] bg-transparent"
      }`}
    >
      {/* Exit Button */}
      {isInteracting && (
        <button
          onClick={() => setIsInteracting(false)}
          className="absolute top-8 right-8 z-[100] p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-red-500/20 hover:scale-110 transition-all group"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      )}

      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          {!isInteracting ? (
            <>
              <ambientLight intensity={1.5} />
              <pointLight position={[10, 10, 10]} intensity={2} />
              <InteractiveBall onClick={() => setIsInteracting(true)} />
            </>
          ) : (
            <>
              <PanoramaSphere textureUrl="./assets/3d/Things-at-Web-Sweden-2.jpg" />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.4}
                rotateSpeed={-0.5}
                enableDamping
              />
            </>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}