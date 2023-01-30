// REACT
import React, { useRef, useMemo, useEffect } from 'react'

// THREE
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

// SHADERS
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'

const MouseCast = () => {
    const meshRef = useRef()

    const uniforms = {
        u_time: {
            value: 0
        },
        u_mouse: {
            value: new THREE.Vector2()
        }
    }
    const mouseEvent = (event) => {
        // console.log(event)
        uniforms.u_mouse.value.x = event.clientX / window.innerWidth
        uniforms.u_mouse.value.y = event.clientY / window.innerHeight
    }

    useFrame((state) => {
        const {raycaster} = state
        // console.log(raycaster)

        // const intersections = raycaster.intersectObjects(meshRef, false)
        // console.log(intersections)
    })

    return (
        <mesh 
            ref={meshRef} 
            position={[0, 0, 0]} 
            onPointerMove={(event) => mouseEvent(event)}
            onClick={(event) => mouseEvent(event)}
            // onPointerOver={(event) => mouseEvent(event)}
            // onPointerEnter={ () => {  } }
            // onPointerLeave={ () => {  } }
        >
            <planeGeometry args={[1, 1, 32, 32]}/>
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                side={THREE.DoubleSide}
                uniforms={uniforms}
            />
        </mesh>
    )
}

export default MouseCast