// REACT
import React, { useRef, useMemo } from 'react'

// THREE
import { Color, DoubleSide } from 'three'
import { useFrame } from '@react-three/fiber'

// SHADERS
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'

const ColorWave = () => {
    const meshRef = useRef()

    const uniforms = useMemo(() => ({
        u_time: {
            value: 0
        },
        u_colorA: { value: new Color("#05299E") },
        u_colorB: { value: new Color("#00F6ED") },
    }))

    useFrame((state) => {
        const { clock } = state
        const elapsedTime = clock.getElapsedTime();
        meshRef.current.material.uniforms.u_time.value = elapsedTime;
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
            <planeGeometry args={[1, 1, 32, 32]}/>
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                side={DoubleSide}

            />
        </mesh>
    )
}

export default ColorWave