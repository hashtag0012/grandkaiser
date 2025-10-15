import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#ffd700" 
        metalness={0.8} 
        roughness={0.2}
        emissive="#ffaa00"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function SimpleModel() {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('SimpleModel component mounted');
    setIsLoaded(true);
  }, []);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white bg-red-500">
        <div className="text-center">
          <h3>Three.js Error:</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white bg-blue-500">
        Loading Three.js...
      </div>
    );
  }

  try {
    return (
      <div className="w-full h-full relative">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ 
            background: 'rgba(255, 0, 255, 0.1)',
            width: '100%',
            height: '100%'
          }}
          onCreated={() => console.log('Canvas created successfully')}
          onError={(error) => {
            console.error('Canvas error:', error);
            setError(error.message);
          }}
        >
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <pointLight position={[0, 0, 5]} intensity={2} color="#ffd700" />
          <RotatingCube />
        </Canvas>
        <div className="absolute top-2 left-2 text-white text-xs bg-black bg-opacity-50 p-1 rounded">
          Canvas Active
        </div>
      </div>
    );
  } catch (err) {
    console.error('SimpleModel error:', err);
    return (
      <div className="w-full h-full flex items-center justify-center text-white bg-red-500">
        <div className="text-center">
          <h3>Render Error</h3>
          <p>{err instanceof Error ? err.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }
}
