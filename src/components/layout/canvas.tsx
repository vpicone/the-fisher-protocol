import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { PointerLockControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import useKeyboardControls from '@/hooks/useKeyboardControls'

const CHAIR_POSITION = new THREE.Vector3(3.5, 2.25, -0.2)

const LControl = () => {
  const set = useThree((state) => state.set)
  const dom = useStore((state) => state.dom)
  const setLocked = useStore((state) => state.setLocked)
  const controls = useRef(null)
  useKeyboardControls({ allowJumping: true })

  useEffect(() => {
    if (controls) {
      set({ controls: controls.current })
      dom.current.style['touch-action'] = 'none'
      dom.current.style['background'] = 'none'
      controls.current.target = new THREE.Vector3(-4, 2.25, 0)
    }
  }, [dom, controls, set])

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
      ref={controls}
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
