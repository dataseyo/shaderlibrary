// REACT
import React, { useRef, useMemo, useEffect } from 'react'

// THREE
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

// SHADERS
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'

const Pattern = () => {
    const meshRef = useRef()

    const uniforms = {

    }

    return (
        <mesh 
            ref={meshRef} 
            position={[0, 0, 0]} 
        >
            <planeGeometry args={[1, 1, 16, 16]}/>
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                side={THREE.DoubleSide}
                uniforms={uniforms}
            />
        </mesh>
    )
}

export default Pattern