import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { View } from "@react-three/drei";
import { useControls } from 'leva'
import './styles.css'

function Thing() {
    const ref = useRef(null)
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.x = ref.current.rotation.y += 0.01
        }
    })
    return (
        <mesh
            ref={ref}
            onClick={(e) => console.log('click')}
            onPointerOver={(e) => console.log('hover')}
            onPointerOut={(e) => console.log('unhover')}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial />
        </mesh>
    )
}

function App() {
    const { width } = useControls({ name: 'Width', width: 200 })
    const { height } = useControls({ name: 'Height', height: 200 })
    const { top } = useControls({ name: 'Top', top: 100 })
    const { left } = useControls({ name: 'Left', left: 100 })

    return (
        <div className="main">
            <div className="canvas">
                <Canvas>
                    <View.Port />
                </Canvas>
            </div>
            <div
                className="view-rect"
                style={{top, left, width, height}}
            >
                <View className="full">
                    <Thing />
                </View>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
