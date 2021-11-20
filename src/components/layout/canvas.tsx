import { Canvas, useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import {
  PointerLockControls,
  Preload,
  AdaptiveDpr,
  Stats,
} from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import useKeyboardControls from '@/hooks/useKeyboardControls'
import {
  EffectComposer,
  DepthOfField,
  Noise,
  Vignette,
  Bloom,
} from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'

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

function Effects() {
  return (
    <EffectComposer>
      <Vignette offset={0.9} darkness={2} eskil={true} />
      <Bloom
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.5}
        luminanceSmoothing={0.3}
      />
      <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={1} />
    </EffectComposer>
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
      gl={{
        powerPreference: 'high-performance',
      }}
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
      <AdaptiveDpr />
      <Stats />
      <Effects />
      <LControl />
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas
