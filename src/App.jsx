// REACT IMPORTS
import React from 'react'

// THREE IMPORTS
// import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// PROJECT IMPORTS
import './App.css'

// CAMERA
const Camera = () => {
  const { camera } = useThree()
  console.log(camera)
  camera.lookAt(0, 0, 0)
  return <></>
}

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [0, 2, 5]
}

// APP
function App() {

  return (
    <Canvas
      camera={cameraSettings}
    >
      <ambientLight />
      <Camera/>
      {/* <OrbitControls /> */}
      <color attach="background" args={["black"]} />

      {/* test mesh */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry />
        <meshBasicMaterial color="lightblue" />
      </mesh>
    </Canvas>
  )
}

export default App
