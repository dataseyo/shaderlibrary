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
        },
        u_ratio: {
            value: new THREE.Vector2()
        }
    }

    const mouseEvent = (event) => {
        uniforms.u_ratio.value.x = window.innerWidth
        uniforms.u_ratio.value.y = window.innerHeight

        const ratio = window.innerWidth / window.innerHeight
        uniforms.u_mouse.value.x = (event.clientX / window.innerWidth) * ratio
        uniforms.u_mouse.value.y = 1-(event.clientY / window.innerHeight)
        // console.log("x:", uniforms.u_mouse.value.x, "y:", 1-(event.clientY / window.innerHeight))
    }

    // GENERATE PARTICLES
    const count = 2000
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
      
        for (let i = 0; i < count; i++) {
          let x = (Math.random() - 0.5) * 2;
          let y = (Math.random() - 0.5) * 2;
          let z = 0
      
          // We add the 3 values to the attribute array for every loop
          positions.set([x, y, z], i * 3);
        }
      
        return positions;
      }, [count]);
    
    // USE FRAME
    useFrame((state) => {
        // get clocl
        const { clock } = state
        uniforms.u_time.value = clock.getElapsedTime()
    })

    // const { raycaster } = useThree()

    // useEffect(() => {
    //     if (raycaster == null) return;
    //     raycaster.setFromCamera(mouse, camera)
    // }, [])

    return (
        <group>
            <points 
                ref={meshRef} 
                // onPointerMove={(event) => mouseEvent(event)} 
                onClick={(e) => (e.stopPropagation(), console.log(e.point))}
                onPointerOver={(event) => mouseEvent(event)}
            >
                <bufferGeometry>
                    <bufferAttribute 
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <shaderMaterial
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </group>
        
    )
}

export default MouseCast