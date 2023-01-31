// REACT
import React, { useRef, useMemo, useEffect } from 'react'

// THREE
import { Vector2, Vector3, DoubleSide } from 'three'
import { useFrame, useThree } from '@react-three/fiber'

// SHADERS
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'

const Particles = () => {
    const particlesRef = useRef()

    const count = 10000
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            let x = (Math.random() - 0.5) * 8;
            let y = (Math.random() - 0.5) * 6;
            let z = (Math.random() - 0.5) * 0.1;
        
            // We add the 3 values to the attribute array for every loop
            positions.set([x, y, z], i * 3);
          }
        
          return positions;
    }, [count])

    const uniforms = {
        u_mouse: {
            value: new Vector2()
        },
        u_time: {
            value: 0.0
        },
        u_intersection: {
            value: new Vector3()
        },
        u_ratio: {
            value: new Vector2()
        }
    }

    // MOUSE EVENTS
    const handlePointer = (event) => {
        // get mouse intersection
        const uv = event.intersections[0].uv
        console.log(event)

        // set mouse intersection to uniform
        // uniforms.u_mouse.value.x = uv.x
        // uniforms.u_mouse.value.y = uv.y

        uniforms.u_intersection.value = event.intersections[0].point

        uniforms.u_ratio.value.x = window.innerWidth
        uniforms.u_ratio.value.y = window.innerHeight

    }

    useFrame((state) => {
        const {clock} = state
        uniforms.u_time.value = clock.getElapsedTime()
    })

    return (
        <group>
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <shaderMaterial
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms}
                />
            </points>

            {/* use plane to get coordinates for mouse intersection */}
            <mesh 
                onPointerMove={event => handlePointer(event)}
                onClick={event => handlePointer(event)}
                visible={false}
            >
                <boxGeometry args={[10, 6, 0.1, 32, 32]} />
                <meshStandardMaterial color="white" side={DoubleSide}/>
            </mesh>
        </group>
    )
}

export default Particles