// REACT IMPORTS
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// THREE IMPORTS
// import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// PROJECT IMPORTS
import './App.css'
import {
  Nav,
  ColorWave,
  Wave,
  PerlinBlob,
  Flag,
  Pattern,
  MouseCast,
  Particles
} from './components'

// CAMERA
const Camera = () => {
  const { camera } = useThree()
  camera.lookAt(0, 0, 0)
  return <></>
}

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [0, 2, 5]
}

function Scene() {
  return (
    <>
      <Nav/>
      <Canvas
        className="canvas"
        camera={cameraSettings}
      >
        <ambientLight />
        <Camera/>
        <OrbitControls />
        <color attach="background" args={["#000000"]} />
        {/* <axesHelper args={[1]}/> */}

        <Routes>
          <Route path="/" element={<Wave/>}/>
          <Route path="/colorwave" element={<ColorWave/>}/>
          <Route path="/perlinblob" element={<PerlinBlob/>}/>
          <Route path="/flag" element={<Flag/>}/>
          <Route path="/pattern" element={<Pattern/>}/>
          <Route path="/mousecast" element={<MouseCast/>}/>
          <Route path="/particles" element={<Particles/>}/>
        </Routes>
      </Canvas>
    </>

  )
}

function App() {
  return (
    <div className="App">
      <Scene/>
    </div>
  )
}

export default App
