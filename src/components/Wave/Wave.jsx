// REACT
import React, { useRef, useMemo } from 'react'

// THREE 
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

// SHADERS
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'

const Wave = () => {
    const meshRef = useRef()

    // memoize uniform obj to not create new obj on re-render
    const uniforms = useMemo(() => ({
        u_time: {
            value: 1.0
        }
    }))

    useFrame((state) => {
        const { clock } = state
        meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime()
    })

    return (
        <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 90]} scale={2}>
            <planeGeometry args={[1, 1, 32, 32]}/>
            <rawShaderMaterial 
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                wireframe
                
        />
        </mesh>
    )
}

export default Wave


