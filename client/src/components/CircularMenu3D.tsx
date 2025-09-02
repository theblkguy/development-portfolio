import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface CircularMenuProps {
  onMenuClick: (section: string) => void
}

function CircularMesh({ onMenuClick }: CircularMenuProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState<string | null>(null)
  
  useFrame((_, delta) => {
    // Only horizontal rotation (Y-axis) - 4 times faster
    meshRef.current.rotation.y += delta * 1.6
  })

  const handleClick = (section: string) => {
    onMenuClick(section)
  }

  return (
    <group>
      {/* Main spherical orb */}
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[6, 32, 32]} />
        <meshStandardMaterial 
          color="#FF7F7F" 
          metalness={0.6}
          roughness={0.1}
          emissive="#FF3F3F"
          emissiveIntensity={0.2}
          transparent
          opacity={1.0}
        />
      </mesh>
      
      {/* Menu items positioned at exactly 120-degree intervals */}
      <group>
        {/* About button - positioned at 0 degrees (front) */}
        <group position={[0, 0, 6.9]} rotation={[0, 0, 0]}>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={1.2}
            height={0.4}
            curveSegments={12}
            bevelEnabled={true}
            bevelThickness={0.08}
            bevelSize={0.04}
            bevelOffset={0}
            bevelSegments={5}
            onClick={() => handleClick('about')}
            onPointerOver={() => setHovered('about')}
            onPointerOut={() => setHovered(null)}
          >
            About
            <meshStandardMaterial 
              color={hovered === 'about' ? '#FFD700' : '#2D2D2D'}
              metalness={0.5}
              roughness={0.3}
            />
          </Text3D>
        </group>

        {/* Work button - positioned at 120 degrees (2.3 units right, -3.98 units back) */}
        <group position={[5.97, 0, -3.45]} rotation={[0, 2.094, 0]}>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={1.2}
            height={0.4}
            curveSegments={12}
            bevelEnabled={true}
            bevelThickness={0.08}
            bevelSize={0.04}
            bevelOffset={0}
            bevelSegments={5}
            onClick={() => handleClick('work')}
            onPointerOver={() => setHovered('work')}
            onPointerOut={() => setHovered(null)}
          >
            Work
            <meshStandardMaterial 
              color={hovered === 'work' ? '#FFD700' : '#2D2D2D'}
              metalness={0.5}
              roughness={0.3}
            />
          </Text3D>
        </group>

        {/* Contact button - positioned at 240 degrees (-2.3 units right, -3.98 units back) */}
        <group position={[-5.97, 0, -3.45]} rotation={[0, -2.094, 0]}>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={1.2}
            height={0.4}
            curveSegments={12}
            bevelEnabled={true}
            bevelThickness={0.08}
            bevelSize={0.04}
            bevelOffset={0}
            bevelSegments={5}
            onClick={() => handleClick('contact')}
            onPointerOver={() => setHovered('contact')}
            onPointerOut={() => setHovered(null)}
          >
            Contact
            <meshStandardMaterial 
              color={hovered === 'contact' ? '#FFD700' : '#2D2D2D'}
              metalness={0.5}
              roughness={0.3}
            />
          </Text3D>
        </group>
      </group>
    </group>
  )
}

export default function CircularMenu3D({ onMenuClick }: CircularMenuProps) {
  return (
    <div className="w-96 h-96">
      <Canvas 
        camera={{ position: [0, 0, 18], fov: 85 }}
        shadows
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 8, 5]} intensity={0.4} castShadow />
        <pointLight position={[-3, 3, 8]} intensity={0.2} color="#FFE4E1" />
        <directionalLight
          position={[0, 20, 0]}
          intensity={0.6}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={30}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <CircularMesh onMenuClick={onMenuClick} />
        
        {/* Ground plane to receive shadows */}
        <mesh position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial 
            color="#C8A8D8" 
            transparent 
            opacity={0.032}
          />
        </mesh>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={4.0}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  )
}
