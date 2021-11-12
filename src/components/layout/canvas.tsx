import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { PointerLockControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const CHAIR_POSITION = new THREE.Vector3(3.28, 1.6, -0.2)

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const setLocked = useStore((state) => state.setLocked)
  const control = useRef(null)

  useEffect(() => {
    if (control) {
      dom.current.style['touch-action'] = 'none'
      control.current.target = new THREE.Vector3(-4, 1, 0)
    }
  }, [dom, control])

  return (
    // @ts-ignore
    <PointerLockControls
      selector='#start-button'
      onLock={() => {
        setLocked(true)
      }}
      onUnlock={() => {
        setLocked(false)
      }}
      ref={control}
      domElement={dom.current}
    />
  )
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
  const dpr =
    typeof window !== 'undefined' ? window.devicePixelRatio : undefined

  return (
    <Canvas
      mode='concurrent'
      dpr={dpr}
      shadows
      camera={{
        position: CHAIR_POSITION,
      }}
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => {
        state.events.connect(dom.current)
      }}
    >
      <LControl />
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas
