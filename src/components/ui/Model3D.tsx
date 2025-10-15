import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Model3DProps {
  modelPath: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  autoRotate?: boolean;
}

function RotatingModel({ modelPath, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], autoRotate = true }: Model3DProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene.clone()} />
    </group>
  );
}

function FallbackCube({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], autoRotate = true }: Omit<Model3DProps, 'modelPath'>) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#ffd700" 
        metalness={0.9} 
        roughness={0.1}
        emissive="#ffaa00"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Preload the model
useGLTF.preload('/models/Gold_Initials_1013141911_texture.glb');

export default function Model3D({ 
  modelPath, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = [1, 1, 1], 
  autoRotate = true 
}: Model3DProps) {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: true
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={3}
          color="#ffffff"
        />
        <pointLight position={[2, 2, 2]} intensity={2} color="#ffd700" />
        <spotLight 
          position={[0, 5, 0]} 
          intensity={2} 
          color="#ffaa00"
          angle={Math.PI / 4}
          penumbra={0.5}
        />
        
        <Suspense fallback={
          <FallbackCube 
            position={position}
            rotation={rotation}
            scale={scale}
            autoRotate={autoRotate}
          />
        }>
          <RotatingModel 
            modelPath={modelPath}
            position={position}
            rotation={rotation}
            scale={scale}
            autoRotate={autoRotate}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
