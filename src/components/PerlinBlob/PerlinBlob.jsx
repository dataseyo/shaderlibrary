// REACT
import React, { useRef, useMemo } from 'react'

// THREE
import { Color, MathUtils } from 'three'
import { useFrame } from '@react-three/fiber'

// SHADERS
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'

const PerlinBlob = () => {
    const meshRef = useRef()
    const hover = useRef(false)

    const uniforms = useMemo(() => ({
        u_time: {
            value: 0
        },
        u_intensity: {
            value: 0.3
        }
    }))

    useFrame((state) => {
        const { clock } = state
        meshRef.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

        meshRef.current.material.uniforms.u_intensity.value = MathUtils.lerp(
            meshRef.current.material.uniforms.u_intensity.value,
            hover.current ? 0.85 : 0.15,
            0.02
        )
    })

    return (
        <mesh 
            ref={meshRef} 
            position={[0, 0, 0]} 
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
        >
            <icosahedronGeometry args={[1, 10]}/>
            {/* <meshStandardMaterial/> */}
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    )
}

export default PerlinBlob