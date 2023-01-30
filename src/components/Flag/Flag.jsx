// REACT
import React, { useRef, useMemo, useEffect } from 'react'

// THREE
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

// SHADERS
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'

const Flag = () => {
    const meshRef = useRef()

    const textureLoader = new THREE.TextureLoader
    const flagTex = textureLoader.load('/hxh.jpg')
    console.log(flagTex)

    const uniforms = useMemo(() => ({
        u_frequency: {
            value: new THREE.Vector2(10, 5)
        },
        u_time: {
            value: 0.0
        },
        u_texture: {
            value: flagTex
        }
    }))

    useFrame((state) => {
        const { clock } = state
        meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime()

    })

    useEffect(() => {
        const { geometry } = meshRef.current
        const count = geometry.attributes.position.count
        const randoms = new Float32Array(count)
        for (let i = 0; i < count; i++) {
            randoms[i] = Math.random()
        }
        geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))
    }, [])


    return (
        <mesh 
            ref={meshRef} 
            position={[0, 0, 0]} 
            scale-y={4/5}
        >
            <planeGeometry args={[1, 1, 16, 16]}/>
            <rawShaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                side={THREE.DoubleSide}
                uniforms={uniforms}
            />
        </mesh>
    )
}

export default Flag